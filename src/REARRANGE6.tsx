import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';

/**
 * Rearranges PDF pages in groups of 12 according to the specified order.
 * Adds blank pages if needed to complete groups.
 * 
 * @param inputPdfBytes - The PDF file as a Uint8Array
 * @returns Promise<Uint8Array> - The rearranged PDF as bytes
 */
export async function rearrangePdf(inputPdfBytes: Uint8Array): Promise<Uint8Array> {
  try {
    // Load the original PDF
    const originalPdf = await PDFDocument.load(inputPdfBytes);
    const originalPageCount = originalPdf.getPageCount();
    const groupSize = 12;

    // Calculate padding needed
    const pagesToAdd = (groupSize - (originalPageCount % groupSize)) % groupSize;

    // Add blank pages to original PDF if needed
    for (let i = 0; i < pagesToAdd; i++) {
      const blankPage = originalPdf.addPage();
      const font = await originalPdf.embedFont(StandardFonts.Helvetica);
      blankPage.drawText('', {
        x: 50,
        y: 500,
        size: 50,
        font,
        color: rgb(0.95, 0.1, 0.1),
      });
    }

    const totalPages = originalPdf.getPageCount();
    const finalPdf = await PDFDocument.create();

    // Rearrange order for 12-page groups
    const rearrangeOrder = [1, 3, 5, 7, 9, 11, 6, 4, 2, 12, 10, 8];

    // Process each group of pages
    for (let i = 0; i < totalPages; i += groupSize) {
      const pageGroup = rearrangeOrder.map(offset => i + offset - 1);

      for (const pageIndex of pageGroup) {
        if (pageIndex < totalPages) {
          const [copiedPage] = await finalPdf.copyPages(originalPdf, [pageIndex]);
          finalPdf.addPage(copiedPage);
        }
      }
    }

    // Save the rearranged PDF
    const newPdfBytes = await finalPdf.save();
    return newPdfBytes;
  } catch (error) {
    console.error('Error rearranging PDF:', error);
    throw error;
  }
}

/**
 * Downloads the rearranged PDF to the user's device
 * 
 * @param pdfBytes - The PDF file as Uint8Array
 * @param filename - Name for the downloaded file (default: 'output6.pdf')
 */
export function downloadPdf(pdfBytes: Uint8Array, filename: string = 'output6.pdf'): void {
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
    console.log('Starting PDF rearrangement...');
    const rearrangedPdfBytes = await rearrangePdf(inputPdfBytes);

    // Download the result
    const outputFilename = `${file.name.replace('.pdf', '')}_rearranged6.pdf`;
    downloadPdf(rearrangedPdfBytes, outputFilename);

    console.log('PDF rearrangement completed successfully!');
  } catch (error) {
    console.error('Failed to process PDF:', error);
    throw error;
  }
}
