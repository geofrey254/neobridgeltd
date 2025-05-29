'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Home, Users, Package, Settings, Mail } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 py-2 border-b-2 border-[#041740] ${
        scrolled ? 'bg-white shadow-md' : 'bg-white bg-opacity-95'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <Image src="/logolight.png" alt="Logo" width={120} height={120} className="mr-2" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="/"
              className="text-[#041740] hover:text-slate-900 flex items-center space-x-1 font-medium"
            >
              <span>Home</span>
            </Link>

            <Link
              href="/who-we-are"
              className="text-[#041740] hover:text-slate-900 flex items-center space-x-1 font-medium"
            >
              <span>Who We Are</span>
            </Link>

            <Link
              href="/what-we-offer"
              className="text-[#041740] hover:text-slate-900 flex items-center space-x-1 font-medium"
            >
              <span>What We Offer</span>
            </Link>

            <Link
              href="/modular-services"
              className="text-[#041740] hover:text-slate-900 flex items-center space-x-1 font-medium"
            >
              <span>Modular Services</span>
            </Link>

            <Link
              href="/contact-us"
              className="bg-[#041740] text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-all font-medium"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-[#041740] hover:text-slate-900 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg absolute left-0 right-0 max-h-[80vh] overflow-y-auto">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <Link
              href="/"
              className="text-[#041740] hover:bg-gray-100 px-3 py-3 rounded-md text-base font-medium flex items-center"
              onClick={() => setIsOpen(false)}
            >
              <Home size={18} className="mr-3" />
              Home
            </Link>

            <Link
              href="/who-we-are"
              className="text-[#041740] hover:bg-gray-100 px-3 py-3 rounded-md text-base font-medium flex items-center"
              onClick={() => setIsOpen(false)}
            >
              <Users size={18} className="mr-3" />
              Who We Are
            </Link>

            <Link
              href="/what-we-offer"
              className="text-[#041740] hover:bg-gray-100 px-3 py-3 rounded-md text-base font-medium flex items-center"
              onClick={() => setIsOpen(false)}
            >
              <Package size={18} className="mr-3" />
              What We Offer
            </Link>

            <Link
              href="/modular-services"
              className="text-[#041740] hover:bg-gray-100 px-3 py-3 rounded-md text-base font-medium flex items-center"
              onClick={() => setIsOpen(false)}
            >
              <Settings size={18} className="mr-3" />
              Modular Services
            </Link>

            <Link
              href="/contact-us"
              className="bg-[#041740] text-white flex items-center justify-center px-3 py-3 rounded-md text-base font-medium mt-4"
              onClick={() => setIsOpen(false)}
            >
              <Mail size={18} className="mr-2" />
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
