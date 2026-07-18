import React from "react"
import BookCatalog from "../components/BookCatalog/BookCatalog"
import HeroSection from "../components/HeroSection"
import { Category } from "../types/bookTypes"

interface HomePageProps {
  searchQuery?: string
  selectedCategory?: Category
}

const HomePage: React.FC<HomePageProps> = ({ searchQuery = "", selectedCategory = "Semua" }) => {
  return (
    <div>
      <HeroSection />
      <BookCatalog externalSearchQuery={searchQuery} externalCategory={selectedCategory} />
    </div>
  )
}

export default HomePage
