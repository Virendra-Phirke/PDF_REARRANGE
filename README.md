# PDF Page Arranger 📄

A modern React application built with Vite + TypeScript for arranging PDF pages in custom layouts.

## Features

✨ **PDF Processing**
- Upload PDFs via click or drag-and-drop
- Arrange pages in 6-page mode (12-page groups) or 9-page mode (18-page groups)
- Automatic blank page insertion for incomplete groups
- Browser-based processing (no server needed)
- Automatic download of processed PDFs

🎨 **Dark Theme UI**
- Modern, professional dark interface
- Purple accent colors
- Responsive design
- Smooth animations and transitions
- Real-time loading states

⚡ **Tech Stack**
- React 18 with TypeScript
- Vite for fast development and building
- Tailwind CSS for styling
- pdf-lib for PDF manipulation
- lucide-react for icons

## Quick Start

### Installation

```powershell
cd "Z:\0 DATA\z  SEM 7  PJ\clean-react"
npm install
```

### Development

```powershell
npm run dev
# Open http://localhost:3000/
```

### Production Build

```powershell
npm run build
npm run preview
```

### Deployment

```powershell
npm run deploy
```

## How to Use

1. **Upload a PDF**: Click the upload area or drag & drop a PDF file
2. **Select Layout**: Choose either "6 Pages" or "9 Pages" per sheet
3. **Download**: Click "Download Arranged PDF"
4. **Save**: Your browser will automatically download the processed PDF

## Files Structure

```
clean-react/
├── src/
│   ├── App.tsx              # Main component with UI
│   ├── main.tsx             # React entry point
│   ├── index.css            # Tailwind styles
│   ├── REARRANGE6.tsx       # 12-page group processor
│   └── REARRANGE9.tsx       # 18-page group processor
├── dist/                    # Production build
├── package.json             # Dependencies
├── tsconfig.json            # TypeScript config
├── vite.config.ts           # Vite config
└── tailwind.config.js       # Tailwind config
```

## PDF Rearrangement Logic

### 6-Page Mode

- Groups: 12 pages per group
- Order: `[1, 3, 5, 7, 9, 11, 6, 4, 2, 12, 10, 8]`
- Output: `filename_rearranged6.pdf`

### 9-Page Mode

- Groups: 18 pages per group
- Order: `[0, 2, 4, 6, 8, 10, 12, 14, 16, 5, 3, 1, 11, 9, 7, 17, 15, 13]`
- Output: `filename_rearranged9.pdf`

## Dependencies

**Production:**
- react: ^18.2.0
- react-dom: ^18.2.0
- pdf-lib: ^1.17.1
- lucide-react: ^0.296.0

**Development:**
- vite: ^7.1.12
- typescript: ^5.2.0
- tailwindcss: ^3.3.0
- @types/react: ^19.2.2
- @types/react-dom: ^19.2.2

## Browser Support

✅ Chrome/Edge 90+
✅ Firefox 88+
✅ Safari 14+
✅ Opera 76+

## Project Status

- ✅ TypeScript: No errors
- ✅ Build: Production ready
- ✅ Security: All vulnerabilities fixed (0 CVEs)
- ✅ Features: Complete

## Notes

- All PDF processing happens in the browser (client-side only)
- No files are stored on servers
- No internet connection required after page load
- Works offline after initial load
- Dark theme with modern UI

## License

MIT
