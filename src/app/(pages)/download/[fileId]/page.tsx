"use client";

import { DownloadComp } from "@/components/downloadComp";
import { useParams } from "next/navigation";

export default function Download() {
    const params = useParams();
    const { fileId } = params

    return <div className="h-[100vh] bg-black">
        {/* <h1 className="text-green-500">{fileId}</h1>   */}
        <DownloadComp fileId={fileId}></DownloadComp> 
    </div>
}