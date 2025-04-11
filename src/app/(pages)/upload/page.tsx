"use client"

import { InputFile } from "@/components/inputForm"
import { useState } from "react"
import axios from "axios"

interface response {
    msg: string,
    DownloadLink: string
}

export default function Upload() {
    const [selectedFile, setSelectedFile] = useState<any>()
    const [filename, setFilename] = useState<any>("")
    const [link, setLink] = useState<string>("")
    const [msg , setMsg] = useState<string>("")

    const handleClick = async () => {
        if (!selectedFile) return alert('No file selected');

        const formData = new FormData();
        formData.append('file', selectedFile);

        try {
            const res = await axios.post<response>('http://localhost:8000/api/v1/file/upload', formData);
            const link = res.data?.DownloadLink;
            setLink(link);
            setMsg(res.data?.msg)

            alert('Upload successful!');
        } catch (err) {
            console.error('Upload failed:', err);
            alert('Upload failed');
        }
    }

    return (
        <div className="bg-black h-[100vh] flex justify-center items-center">

            <div className="flex flex-col">
                <InputFile upload={(e: any) => {
                    if (e.target.files && e.target.files.length > 0) {
                        setSelectedFile(e.target.files[0]);
                        setFilename(e.target.files[0].name)
                    }

                }}
                    fileName={!filename ? "Choose a File" : filename}
                ></InputFile>

                <button className="p-3 mt-4 bg-blue-500 text-white font-sans hover:bg-blue-800 transition-colors rounded-2xl cursor-pointer"
                    onClick={handleClick}
                >
                    Upload
                </button>

                <div className="text-green-500 mt-[3rem]">
                    {msg && (
                        <div>
                            msg
                        </div>
                    )}
                    <span className="text-gray-500">Download Link : </span>
                    {!link ? "upload a file to share" : link}
                </div>

            </div>


        </div>
    )
}