"use client"

import { InputFile } from "@/components/inputForm"
import { useState } from "react"

export default function Upload() {
    const [selectedFile, setSelectedFile] = useState<any>()
    const [filename , setFilename] = useState<any>("")

    return (
        <div className="bg-black h-[100vh]">

            <div className="flex">
            <InputFile upload={(e : any)=> {
                 if (e.target.files && e.target.files.length > 0) {
                    setSelectedFile(e.target.files[0]);
                    setFilename(e.target.files[0].name)
                  }

            }}
          fileName={!filename ? "Choose a File" : filename}
            ></InputFile>

            </div>

            
        </div>
    )
}