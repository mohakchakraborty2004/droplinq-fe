"use client"
import React, { useState, useEffect } from 'react';
import AnimatedBackground from '@/components/AnimatedBackground';

const Index = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      {/* Background is now pure black */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-black"></div>
      </div>
      
      {/* Animated Background */}
      <AnimatedBackground />
      
      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
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
              <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
              <a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors">How It Works</a>
              <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
            </nav>
            
            <div className="flex gap-4 items-center">
              <button className="hidden md:block text-gray-300 hover:text-white transition-colors">Login</button>
              <button className="px-4 py-2 bg-gradient-to-r from-red-600 to-orange-500 rounded-lg font-medium hover:opacity-90 transition-opacity text-white">Get Started</button>
            </div>
          </div>
        </header>
        
        {/* Hero Section */}
        <section className="pt-20 pb-32 md:pt-32 md:pb-40">
        <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-4xl mx-auto leading-tight text-white">
              Transfer Files <span className="bg-gradient-to-r from-red-500 to-orange-400 text-transparent bg-clip-text">Without Limits</span>
            </h1>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Secure, fast, and decentralized file sharing for the modern web.
              Share anything, anywhere, anytime.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <button className="px-6 py-3 bg-gradient-to-r from-red-600 to-orange-500 rounded-lg font-medium text-lg hover:opacity-90 transition-opacity text-white">
                Start Sharing
              </button>
              <button className="px-6 py-3 bg-black/40 border border-gray-700 rounded-lg font-medium text-lg hover:bg-black/60 transition-colors text-white">
                Learn More
              </button>
            </div>
            
            {/* Interactive Feature Illustration */}
            <div className="mt-16 relative">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {/* Left floating card */}
                <div className="bg-black/30 backdrop-blur-md border border-gray-800 p-5 rounded-xl shadow-lg transform hover:-translate-y-2 transition-transform duration-300 flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-600 to-orange-500 flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <span className="text-lg font-semibold text-white">10+ GB</span>
                  <span className="text-sm text-gray-400">Maximum File Size in RTC transfer</span>
                </div>
                
                {/* Middle floating card */}
                <div className="bg-black/40 backdrop-blur-md border border-gray-800 p-5 rounded-xl shadow-lg transform translate-y-4 md:translate-y-0 hover:-translate-y-2 transition-transform duration-300 flex flex-col items-center z-10">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-600 to-orange-500 flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </div>
                  <span className="text-lg font-semibold text-white">End-to-End</span>
                  <span className="text-sm text-gray-400">Encryption with blockchain</span>
                </div>
                
                {/* Right floating card */}
                <div className="bg-black/30 backdrop-blur-md border border-gray-800 p-5 rounded-xl shadow-lg transform hover:-translate-y-2 transition-transform duration-300 flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-600 to-orange-500 flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                  </div>
                  <span className="text-lg font-semibold text-white">Max Security</span>
                  <span className="text-sm text-gray-400">With AWS S3 systems</span>
                </div>
              </div>
              
              {/* Background glow */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-md bg-gradient-radial from-red-500/10 to-transparent rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section id="features" className="py-20 bg-black/50">
        <div className="container mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-red-500 to-orange-400 text-transparent bg-clip-text">Our Offerings</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-gradient-to-br from-black/60 to-black/40 p-8 rounded-xl border border-gray-800 backdrop-blur-lg hover:border-red-900 transition-colors shadow-xl">
                <div className="bg-gradient-to-r from-red-600 to-orange-500 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <path d="M8 12h8" />
                    <path d="M12 8v8" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white">S3 Based Secure Sharing</h3>
                <p className="text-gray-300 text-lg">
                  Enterprise-grade security with AWS S3 integration. Encrypt your files end-to-end and control access with customizable permissions and expiration dates. Perfect for confidential documents and sensitive data.
                </p>
              </div>
              
              {/* Feature 2 */}
              <div className="bg-gradient-to-br from-black/60 to-black/40 p-8 rounded-xl border border-gray-800 backdrop-blur-lg hover:border-red-900 transition-colors shadow-xl">
                <div className="bg-gradient-to-r from-red-600 to-orange-500 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                    <path d="M12 16l4-4-4-4" />
                    <path d="M8 12h8" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white">WebRTC Large File Transfer</h3>
                <p className="text-gray-300 text-lg">
                  Lightning-fast peer-to-peer transfers for files of any size without server limitations. Transfer multi-gigabyte files directly between devices, bypassing traditional upload/download constraints.
                </p>
              </div>
              
              {/* Feature 3 */}
              <div className="bg-gradient-to-br from-black/60 to-black/40 p-8 rounded-xl border border-gray-800 backdrop-blur-lg hover:border-red-900 transition-colors shadow-xl">
                <div className="bg-gradient-to-r from-red-600 to-orange-500 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white">Decentralized Blockchain Storage</h3>
                <p className="text-gray-300 text-lg">
                  Future-proof file sharing with distributed ledger technology. Your data lives on the blockchain, ensuring permanent availability and immunity from server failures or censorship attempts.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20">
        <div className="container mx-auto px-6 text-center">
            <div className="bg-gradient-to-br from-black/80 to-black/40 border border-gray-800 rounded-xl p-10 backdrop-blur-sm relative overflow-hidden">
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-gradient-radial from-red-600/20 to-transparent rounded-full blur-3xl"></div>
              <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-gradient-radial from-orange-600/20 to-transparent rounded-full blur-3xl"></div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-10 text-white">Ready to transform how you share?</h2>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto relative z-10">
                Join thousands of users already experiencing the future of file sharing. No size limits. No compromises.
              </p>
              <button className="px-8 py-4 bg-gradient-to-r from-red-600 to-orange-500 rounded-lg font-medium text-lg hover:opacity-90 transition-opacity relative z-10 text-white">
                Get Started Free
              </button>
            </div>
          </div>
        </section>
        
        {/* Footer */}
        <footer className="py-12 bg-black/70">
        <div className="container mx-auto px-6">
            <div className="flex justify-between items-center flex-col md:flex-row gap-6">
              <div className="flex items-center gap-2">
                <div className="bg-gradient-to-r from-red-600 to-orange-500 rounded-lg p-1 w-8 h-8 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-red-500 to-orange-400 text-transparent bg-clip-text">DropLinq</span>
              </div>
              
              <div className="flex gap-6">
                <a href="#" className="text-gray-300 hover:text-white transition-colors">About</a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Features</a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Support</a>
              </div>
              
              <div className="flex gap-4">
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="border-t border-gray-800 mt-8 pt-8 text-center md:text-left">
              <p className="text-gray-400">© 2025 DropLinq. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;