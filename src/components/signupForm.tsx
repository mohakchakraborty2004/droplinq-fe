"use client"

import { useState } from 'react';
import axios from "axios";
import { useRouter } from 'next/navigation';

interface response { 
  msg : string, 
  token? : string
}

export default function SignupForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [msg , setMsg] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const router = useRouter()

  const handleChange = (e : any) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e : any) => {
    setLoading(true)
    e.preventDefault();
    console.log('Form submitted:', formData);
    try {
      const response = await axios.post<response>(`http://localhost:8000/api/v1/user/signup`, formData);
      const msg = response.data?.msg
      const token = response.data?.token as string
      if(token) {
        localStorage.setItem("token", token);
        setMsg(msg)
        // alert("signedup");
        setLoading(false)
        router.push("/upload")
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="bg-gray-800 p-4 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-white text-center">Sign Up</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 font-medium text-orange-400">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 font-medium text-orange-400">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="password" className="block mb-2 font-medium text-orange-400">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>
          
          
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-md transition duration-300"
          >
            {loading ? "signing..." : "Start Uploading"}
          </button>
          
          <p className="mt-4 text-center text-gray-400">
            Login here only if you already have an <span className="text-orange-400 hover:underline">Account</span>
          </p>
        </form>
      </div>
    </div>
  );
}