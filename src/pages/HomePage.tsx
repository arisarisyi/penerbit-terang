import React from "react"
import BookCatalog from "../components/BookCatalog/BookCatalog"
import HeroSection from "../components/HeroSection"

const HomePage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <BookCatalog />
    </div>
  )
}

export default HomePage
