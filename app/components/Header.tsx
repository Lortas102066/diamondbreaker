'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href={"/"}>
            <div className="flex items-center">
              <Image
                src="/logo1.png"
                alt="Diamond Breaker Club Logo"
                width={50}
                height={50}
                className="mr-2"
              />
              <span className="font-bold text-lg">DBC</span>
            </div>
          </Link>
          
          {/* Primary Nav - Moved to right */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="/" className="py-5 px-3 text-gray-300 hover:text-white transition duration-200">Home</a>
            <a href="/about" className="py-5 px-3 text-gray-300 hover:text-white transition duration-200">About Us</a>
            <a href="/executive" className="py-5 px-3 text-gray-300 hover:text-white transition duration-200">Executives</a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMenu} 
              className="p-2 rounded-md hover:bg-gray-800 transition duration-200"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}
        aria-hidden={!isMenuOpen}
      >
        <a href="/" className="block py-2 px-4 text-sm hover:bg-gray-800 transition duration-200">Home</a>
        <a href="/about" className="block py-2 px-4 text-sm hover:bg-gray-800 transition duration-200">About Us</a>
        <a href="/executive" className="block py-2 px-4 text-sm hover:bg-gray-800 transition duration-200">Executives</a>
      </div>
    </nav>
  )
}