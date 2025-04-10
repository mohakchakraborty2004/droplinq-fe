"use client"

import { useEffect, useState } from "react";

export default function Navbar() {
     const [isScrolled, setIsScrolled] = useState(false);
      
      useEffect(() => {
        const handleScroll = () => {
          setIsScrolled(window.scrollY > 50);
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);

    return <div className="z-10 relative bg-black">
         <header className={`sticky top-0 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-md py-3' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="bg-gradient-to-r from-red-600 to-orange-500 rounded-lg p-1 w-8 h-8 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-red-500 to-orange-400 text-transparent bg-clip-text">DropLinq</span>
            </div>
            
            <nav className="hidden md:flex items-center gap-8">
              <a href="#features" className="font-bold text-gray-300 hover:text-orange-600 transition-colors">Features</a>
              <a href="#how-it-works" className="font-bold text-gray-300 hover:text-orange-600 transition-colors">How It Works</a>
              <a href="#pricing" className="font-bold text-gray-300 hover:text-orange-600 transition-colors">Pricing</a>
            </nav>
            
          </div>
        </header>
    </div>
}