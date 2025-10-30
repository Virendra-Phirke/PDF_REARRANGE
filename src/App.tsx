import React, { useState, ChangeEvent, DragEvent } from 'react';
import { Upload, Download, FileText, Grid3x3, LayoutGrid, CheckCircle2, AlertCircle } from 'lucide-react';
import { handleRearrangePdf as rearrange6 } from './REARRANGE6';
import { handleRearrangePdf as rearrange9 } from './REARRANGE9';

export default function PDFPageArranger() {
  const [file, setFile] = useState<File | null>(null);
  const [pagesPerSheet, setPagesPerSheet] = useState(6);
  const [processing, setProcessing] = useState(false);
  const [status, setStatus] = useState('');
  const [isDragging, setIsDragging] = useState(false);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile && selectedFile.type === 'application/pdf') {
      setFile(selectedFile);
      setStatus('');
    } else {
      setStatus('error');
    }
  };

  const handleDrop = (e: DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && droppedFile.type === 'application/pdf') {
      setFile(droppedFile);
      setStatus('');
    } else {
      setStatus('error');
    }
  };

  const handleDragOver = (e: DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDownload = async () => {
    if (!file) return;
    
    setProcessing(true);
    setStatus('');
    
    try {
      if (pagesPerSheet === 6) {
        await rearrange6(file);
      } else {
        await rearrange9(file);
      }
      
      setStatus('success');
      setTimeout(() => setStatus(''), 3000);
    } catch (error) {
      console.error('Error processing PDF:', error);
      setStatus('error');
      setTimeout(() => setStatus(''), 3000);
    } finally {
      setProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl mb-4 shadow-lg shadow-purple-500/50">
            <FileText className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            PDF Page Arranger
          </h1>
          <p className="text-slate-500 text-lg">
            Arrange multiple PDF pages per sheet with ease
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-slate-900/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-slate-800/50 overflow-hidden">
          {/* Upload Area */}
          <div className="p-8">
            <label
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              className={`block relative cursor-pointer transition-all duration-300 ${
                isDragging
                  ? 'scale-[0.98]'
                  : 'hover:scale-[1.01]'
              }`}
            >
              <input
                type="file"
                accept=".pdf"
                onChange={handleFileChange}
                className="hidden"
              />
              <div
                className={`border-2 border-dashed rounded-2xl p-12 text-center transition-all duration-300 ${
                  isDragging
                    ? 'border-purple-500 bg-purple-500/10'
                    : file
                    ? 'border-purple-600 bg-purple-500/5'
                    : 'border-slate-700 bg-slate-800/50 hover:border-purple-500 hover:bg-purple-500/5'
                }`}
              >
                <div className="flex flex-col items-center gap-4">
                  <div className={`p-4 rounded-full transition-all duration-300 ${
                    file
                      ? 'bg-gradient-to-br from-purple-500 to-purple-700 shadow-lg shadow-purple-500/50'
                      : 'bg-slate-700'
                  }`}>
                    {file ? (
                      <CheckCircle2 className="w-8 h-8 text-white" />
                    ) : (
                      <Upload className="w-8 h-8 text-gray-500" />
                    )}
                  </div>
                  {file ? (
                    <>
                      <div>
                        <p className="text-white font-semibold text-lg mb-1">
                          {file.name}
                        </p>
                        <p className="text-purple-400 text-sm">
                          {(file.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                      </div>
                      <p className="text-slate-500 text-sm">
                        Click to change file or drag and drop
                      </p>
                    </>
                  ) : (
                    <>
                      <p className="text-white font-medium text-lg">
                        Drop your PDF here or click to browse
                      </p>
                      <p className="text-slate-500 text-sm">
                        Supports PDF files up to 100MB
                      </p>
                    </>
                  )}
                </div>
              </div>
            </label>

            {status === 'error' && (
              <div className="mt-4 flex items-center gap-2 text-red-400 bg-red-500/10 border border-red-500/20 rounded-xl p-3">
                <AlertCircle className="w-5 h-5" />
                <span className="text-sm">
                  {file ? 'Error processing PDF. Please try again.' : 'Please upload a valid PDF file'}
                </span>
              </div>
            )}
          </div>

          {/* Options */}
          <div className="px-8 pb-8">
            <label className="block text-slate-400 font-medium mb-4 text-sm uppercase tracking-wide">
              Pages per Sheet
            </label>
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => setPagesPerSheet(6)}
                className={`flex items-center justify-center gap-3 p-6 rounded-2xl border-2 transition-all duration-300 ${
                  pagesPerSheet === 6
                    ? 'border-purple-500 bg-gradient-to-br from-purple-500/20 to-purple-700/20 shadow-lg shadow-purple-500/20'
                    : 'border-slate-700 bg-slate-800/50 hover:border-purple-500/50 hover:bg-slate-700/50'
                }`}
              >
                <Grid3x3 className={`w-6 h-6 ${pagesPerSheet === 6 ? 'text-purple-400' : 'text-slate-500'}`} />
                <div className="text-left">
                  <div className={`font-bold text-lg ${pagesPerSheet === 6 ? 'text-white' : 'text-slate-400'}`}>
                    6 Pages
                  </div>
                </div>
              </button>

              <button
                onClick={() => setPagesPerSheet(9)}
                className={`flex items-center justify-center gap-3 p-6 rounded-2xl border-2 transition-all duration-300 ${
                  pagesPerSheet === 9
                    ? 'border-purple-500 bg-gradient-to-br from-purple-500/20 to-purple-700/20 shadow-lg shadow-purple-500/20'
                    : 'border-slate-700 bg-slate-800/50 hover:border-purple-500/50 hover:bg-slate-700/50'
                }`}
              >
                <LayoutGrid className={`w-6 h-6 ${pagesPerSheet === 9 ? 'text-purple-400' : 'text-slate-500'}`} />
                <div className="text-left">
                  <div className={`font-bold text-lg ${pagesPerSheet === 9 ? 'text-white' : 'text-slate-400'}`}>
                    9 Pages
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* Download Button */}
          <div className="px-8 pb-8">
            <button
              onClick={handleDownload}
              disabled={!file || processing}
              className={`w-full py-5 px-6 rounded-2xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3 ${
                !file || processing
                  ? 'bg-slate-700 text-slate-500 cursor-not-allowed'
                  : 'bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/60 hover:scale-[1.02]'
              }`}
            >
              {processing ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  <Download className="w-5 h-5" />
                  Download Arranged PDF
                </>
              )}
            </button>

            {status === 'success' && (
              <div className="mt-4 flex items-center gap-2 text-green-400 bg-green-500/10 border border-green-500/20 rounded-xl p-3">
                <CheckCircle2 className="w-5 h-5" />
                <span className="text-sm">PDF arranged successfully!</span>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-6 text-slate-500 text-sm">
          <p>Your files are processed securely and never stored</p>
        </div>
      </div>
    </div>
  );
}
