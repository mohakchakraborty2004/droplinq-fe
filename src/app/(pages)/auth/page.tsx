"use client"

import SignupForm from "@/components/signupForm"

export default function Signup() {

    return <div className="h-full bg-black grid grid-cols-2 p-6 ">
        
        <div className="col-span-1 p-10">
            <img src="suPic.png" alt="" className="ml-10 mt-4.5 rounded-3xl" />
        </div>
        <div className="col-span-1 p-10">
        <SignupForm></SignupForm>
        </div>
    </div>
}