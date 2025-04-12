"use client";

import axios from "axios"
import { useEffect, useState } from "react";

interface data {
    fileName: string,
    fileType: string,
    size: number
}

async function FetchFileData(fileId: any) {
    const response = await axios.get<data>(`http://localhost:8000/api/v1/file/${fileId}`, {
        headers : {
            authorization : `Bearer ${localStorage.getItem("token")}`
        }
    })
    const data = {
        filename: response.data?.fileName,
        filetype: response.data?.fileType,
        size: response.data?.size
    }
    return data;
}

export const DownloadComp = ({ fileId }: { fileId: any }) => {
    const [data, setData] = useState<any>({
        filename: "",
        filetype: "",
        size: 0
    })
    
    useEffect(() => {
        async function Fetch() {
            const res = await FetchFileData(fileId);
            console.log(res)
            setData(res)
        }
        Fetch()
        
    }, [fileId])
    
    const handleClick = async() => {
        const confirmDownload = window.confirm("Download this file?");
        if(confirmDownload && typeof window !== "undefined") {
            window.open(`http://localhost:8000/api/v1/file/download/${fileId}`, '_self');
        }
    }

    return (
        <div className="grid grid-cols-2 h-full">
            <div className="col-span-1 p-8">
                <img src="/download.jpg" className="h-[400px] w-[400px] ml-20 rounded-4xl" alt="" />
            </div>

            <div className="col-span-1 flex flex-col p-7"> 
                <div className="flex flex-col mt-[5rem] mb-[3rem]">
                    <h1 className="text-blue-500 mb-4">
                        <span className="text-gray-500 font-semibold mb-4">File ID: </span>
                        {fileId}
                    </h1>
                    <h1 className="text-blue-500 mb-4">
                        <span className="text-gray-500 font-semibold mb-4">FileName: </span>
                        {data.filename}
                    </h1>
                    <h1 className="text-blue-500 mb-4">
                        <span className="text-gray-500 font-semibold mb-4">Type: </span>
                        {data.filetype}
                    </h1>
                    <h1 className="text-blue-500 mb-4">
                        <span className="text-gray-500 font-semibold">Size: </span>
                        {data.size}
                    </h1>
                </div>

                <button className="p-3 bg-blue-500 text-white font-sans hover:bg-blue-800 transition-colors rounded-2xl cursor-pointer"
                    onClick={handleClick}
                >
                    Download
                </button>
            </div>
        </div>
    )
}