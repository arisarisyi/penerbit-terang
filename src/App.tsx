import React, { useState } from "react"
import Header from "./components/Header/Header"
import HomePage from "./pages/HomePage"
import Footer from "./components/Footer/Footer"
import WelcomeScreen from "./components/WelcomeScreen/WelcomeScreen"
import { Category } from "./types/bookTypes"
import "./App.css"

const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<Category>("Semua")
  const [isLoading, setIsLoading] = useState(true)

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    // Scroll to catalog after search
    setTimeout(() => {
      const catalogElement = document.getElementById("katalog-buku")
      if (catalogElement) {
        catalogElement.scrollIntoView({ behavior: "smooth" })
      }
    }, 100)
  }

  const handleCategoryClick = (category: Category) => {
    setSelectedCategory(category)
    // Scroll to catalog after category selection
    setTimeout(() => {
      const catalogElement = document.getElementById("katalog-buku")
      if (catalogElement) {
        catalogElement.scrollIntoView({ behavior: "smooth" })
      }
    }, 100)
  }

  return (
    <>
      {/* Welcome Screen */}
      {isLoading && <WelcomeScreen onComplete={() => setIsLoading(false)} />}

      {/* Main App */}
      <div className={`flex flex-col min-h-screen bg-gray-50 ${isLoading ? "opacity-0" : "opacity-100"} transition-opacity duration-500`}>
        <Header onSearch={handleSearch} />
        <main className="flex-grow">
          <HomePage searchQuery={searchQuery} selectedCategory={selectedCategory} />
        </main>
        <Footer onCategoryClick={handleCategoryClick} />
      </div>
    </>
  )
}

export default App
