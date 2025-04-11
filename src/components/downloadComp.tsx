import axios from "axios"
import { useEffect, useState } from "react";

interface data {
        fileName : string,
        fileType : string 
}

interface response {
    fileName : any,
    fileType : any
}

async function FetchFileData(fileId : any){
    const response = await axios.get<data>(`http://localhost:8000/api/v1/file/${fileId}`)
    const data = {
        filename : response.data?.fileName, 
        filetype : response.data?.fileType
    }
    return data;
}

export const DownloadComp = ({fileId} : {fileId : any}) => {
    const [data, setData] = useState<any>({
        filename : "",
        filetype : ""
    })
 useEffect(() => {
    async function Fetch() {
        const res = await FetchFileData(fileId);  
        console.log(res)
        setData(res)      
    }
    Fetch()
 }, [])
    return <>
    <h1 className="text-green-500">
        {fileId}
        {data.filename}
        {data.filetype}
    </h1>
    </>
} 