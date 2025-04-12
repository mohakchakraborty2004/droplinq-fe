import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

export default function DownloadLinkCopier({downloadLink} : {downloadLink : string}) {
  const [copied, setCopied] = useState(false);
 
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(downloadLink)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch(err => {
        console.error('Failed to copy text: ', err);
      });
  };
  
  return (
    <div className="max-w-md mx-auto p-6 bg-slate-800 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Download Resource</h2>
      
      <div className="flex items-center mb-4">
        <input 
          type="text" 
          value={downloadLink} 
          readOnly 
          className="flex-grow px-3 py-2 border border-gray-300 rounded-l-md bg-gray-50 text-gray-700"
        />
        <button
          onClick={copyToClipboard}
          className="flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700 transition-colors"
        >
          {copied ? (
            <>
              <Check size={18} className="mr-1" />
              <span>Copied!</span>
            </>
          ) : (
            <>
              <Copy size={18} className="mr-1" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      
    </div>
  );
}