import React, { useState, useEffect } from "react"
import NavItem from "./NavItem"
import SearchBar from "./SearchBar"
import Button from "../UI/Button"
import logo from "../../../public/img/penerbit-terang.png"

const Header: React.FC = () => {
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
                className="h-12 mr-3" // Sesuaikan ukuran sesuai kebutuhan
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
            <SearchBar />
            {/* <Button
              variant="secondary"
              icon="fas fa-shopping-cart"
              className="relative"
            >
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </Button> */}
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
          <div className="md:hidden mt-4 pb-4">
            <div className="mb-4">
              <SearchBar />
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
            <div className="mt-4 flex justify-center">
              <Button
                variant="secondary"
                icon="fas fa-shopping-cart"
                className="relative"
              >
                Keranjang
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  3
                </span>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
