import { PDFDocument } from 'pdf-lib';

/**
 * Rearranges PDF pages in groups of 18 according to the specified order.
 * Handles missing pages by adding blank A4-sized pages.
 * 
 * @param inputPdfBytes - The PDF file as a Uint8Array
 * @returns Promise<Uint8Array> - The rearranged PDF as bytes
 */
export async function rearrangePdf(inputPdfBytes: Uint8Array): Promise<Uint8Array> {
  try {
    // Load the source PDF
    const sourcePdf = await PDFDocument.load(inputPdfBytes);
    const totalPages = sourcePdf.getPageCount();

    // Create output PDF
    const outputPdf = await PDFDocument.create();

    // Custom rearrangement order for 18-page groups (9 pages per sheet logic)
    const customOrder = [
      0, 2, 4, 6, 8, 10, 12, 14, 16, // first 9 positions (odd positions)
      5, 3, 1, 11, 9, 7, 17, 15, 13  // next 9 positions (reversed even positions)
    ];

    // Process pages in groups of 18
    for (let groupStart = 0; groupStart < totalPages; groupStart += 18) {
      const group: (number | null)[] = [];

      // Collect page indices or null for missing pages
      for (let offset = 0; offset < 18; offset++) {
        const pageIndex = groupStart + offset;
        if (pageIndex < totalPages) {
          group.push(pageIndex);
        } else {
          group.push(null); // placeholder for blank page
        }
      }

      // Rearrange pages according to custom order
      for (const orderIndex of customOrder) {
        const realIndex = group[orderIndex];

        if (realIndex === null) {
          // Add blank A4-sized page (595.28 x 841.89 points)
          outputPdf.addPage([595.28, 841.89]);
          continue;
        }

        // Copy the page from source PDF
        const [copiedPage] = await outputPdf.copyPages(sourcePdf, [realIndex]);
        outputPdf.addPage(copiedPage);
      }
    }

    // Save and return the rearranged PDF
    const pdfBytes = await outputPdf.save();
    return pdfBytes;
  } catch (error) {
    console.error('Error rearranging PDF:', error);
    throw error;
  }
}

/**
 * Downloads the rearranged PDF to the user's device
 * 
 * @param pdfBytes - The PDF file as Uint8Array
 * @param filename - Name for the downloaded file (default: 'output9.pdf')
 */
export function downloadPdf(pdfBytes: Uint8Array, filename: string = 'output9.pdf'): void {
  try {
    // Create a blob from the PDF bytes
    const blob = new Blob([new Uint8Array(pdfBytes)], { type: 'application/pdf' });
    
    // Create a temporary download link
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    
    // Trigger download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Clean up the URL object
    URL.revokeObjectURL(url);
    
    console.log(`Rearranged PDF downloaded as "${filename}".`);
  } catch (error) {
    console.error('Error downloading PDF:', error);
    throw error;
  }
}

/**
 * Main handler for rearranging and downloading a PDF
 * 
 * @param file - The PDF File object from input
 */
export async function handleRearrangePdf(file: File): Promise<void> {
  try {
    // Read file as bytes
    const arrayBuffer = await file.arrayBuffer();
    const inputPdfBytes = new Uint8Array(arrayBuffer);

    // Rearrange the PDF
    console.log('Starting PDF rearrangement (9 pages per sheet)...');
    const rearrangedPdfBytes = await rearrangePdf(inputPdfBytes);

    // Download the result
    const outputFilename = `${file.name.replace('.pdf', '')}_rearranged9.pdf`;
    downloadPdf(rearrangedPdfBytes, outputFilename);

    console.log('PDF rearrangement completed successfully!');
  } catch (error) {
    console.error('Failed to process PDF:', error);
    throw error;
  }
}
