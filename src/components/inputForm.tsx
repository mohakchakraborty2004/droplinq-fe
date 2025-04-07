"use client";
import { useState } from "react";

 

export function InputFile({upload , fileName} : {upload : (e :any) => void, fileName : any}) {
  

  return (
    <div className="grid w-full max-w-sm items-center gap-3">
    <label className="text-amber-200" htmlFor="picture">Choose a sharable File</label>
    
    <div className="flex flex-col space-y-2 w-full">
      <div className="flex items-center space-x-4 w-full">
        <input 
          className="hidden" 
          id="picture" 
          type="file" 
          onChange={upload}
        />
        
        <label 
          htmlFor="picture" 
          className="flex items-center justify-center px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-200 transition-colors"
        >
          Browse Files
        </label>
        <div className="text-green-500">
          {fileName}
        </div>
      </div>
      
      <div className="text-xs text-gray-400">
        Upload JPG, PNG, GIF, or any files (max. 5MB)
      </div>
    </div>
  </div>
  )
}