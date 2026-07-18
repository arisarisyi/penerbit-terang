import React, { useState, useEffect } from "react"
import NavItem from "./NavItem"
import SearchBar from "./SearchBar"

interface HeaderProps {
  onSearch?: (query: string) => void
}

const Header: React.FC<HeaderProps> = ({ onSearch }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md py-2"
          : "bg-gradient-to-r from-indigo-900 to-indigo-700 py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <h1
              className={`text-2xl font-bold ${
                isScrolled ? "text-yellow-300" : "text-white"
              }`}
            >
              <img
                src="/img/penerbit-terang.png"
                alt="Penerbit Terang Logo"
                className="h-12 mr-3"
              />
            </h1>
          </div>

          {/* Desktop Navigation */}
          {/* <nav className="hidden md:block">
            <ul className="flex space-x-2">
              <NavItem href="#" isActive>
                Beranda
              </NavItem>
              <NavItem href="#">Katalog</NavItem>
              <NavItem href="#">Penulis</NavItem>
              <NavItem href="#">Tentang Kami</NavItem>
              <NavItem href="#">Kontak</NavItem>
            </ul>
          </nav> */}

          {/* Search and Cart - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <SearchBar onSearch={onSearch} />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i
              className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"} text-2xl ${
                isScrolled ? "text-gray-800" : "text-white"
              }`}
            ></i>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 bg-white rounded-lg shadow-xl p-4">
            <div className="mb-4">
              <SearchBar onSearch={onSearch} />
            </div>
            <ul className="space-y-2">
              <NavItem href="#" isActive>
                Beranda
              </NavItem>
              <NavItem href="#">Katalog</NavItem>
              <NavItem href="#">Penulis</NavItem>
              <NavItem href="#">Tentang Kami</NavItem>
              <NavItem href="#">Kontak</NavItem>
            </ul>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
