import React, { useState, useEffect } from "react"
import BookCard from "./BookCard"
import FilterBar from "./FilterBar"
import CategoryFilter from "./CategoryFilter"
import Loader from "../UI/Loader"
import { Book, Category } from "../../types/bookTypes"
import { books } from "../../data/books"

const categories: Category[] = [
  "Semua",
  "Fiksi",
  "Non-Fiksi",
  "Sains",
  "Teknologi",
  "Bisnis",
  "Sejarah",
  "Self-Help",
]

const BookCatalog: React.FC = () => {
  const [filteredBooks, setFilteredBooks] = useState<Book[]>(books)
  const [selectedCategory, setSelectedCategory] = useState<Category>("Semua")
  const [isLoading, setIsLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 800)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    filterBooks()
  }, [selectedCategory, searchQuery])

  const filterBooks = () => {
    let result = [...books]

    // Apply category filter
    if (selectedCategory !== "Semua") {
      result = result.filter((book) => book.category === selectedCategory)
    }

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(
        (book) =>
          book.title.toLowerCase().includes(query) ||
          book.author.toLowerCase().includes(query) ||
          book.description.toLowerCase().includes(query) ||
          book.category.toLowerCase().includes(query)
      )
    }

    setFilteredBooks(result)
  }

  const handleSortChange = (sortOption: string) => {
    const sortedBooks = [...filteredBooks]

    switch (sortOption) {
      case "terbaru":
        sortedBooks.sort(
          (a, b) =>
            new Date(b.publishDate).getTime() -
            new Date(a.publishDate).getTime()
        )
        break
      case "termurah":
        sortedBooks.sort((a, b) => a.price - b.price)
        break
      case "termahal":
        sortedBooks.sort((a, b) => b.price - a.price)
        break
      case "rating":
        sortedBooks.sort((a, b) => b.rating - a.rating)
        break
      default:
        break
    }

    setFilteredBooks(sortedBooks)
  }

  const handleSearch = (query: string) => {
    setSearchQuery(query)
  }

  const handleCategorySelect = (category: Category) => {
    setSelectedCategory(category)
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="mb-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Katalog Buku Unggulan
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Temukan koleksi buku terbaik dari Penerbit Terang. Setiap buku adalah
          jendela ilmu pengetahuan dan inspirasi yang siap membuka wawasan Anda.
        </p>
      </div>

      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={handleCategorySelect}
      />

      <FilterBar onSortChange={handleSortChange} onSearch={handleSearch} />

      {isLoading ? (
        <Loader />
      ) : (
        <>
          {filteredBooks.length === 0 ? (
            <div className="text-center py-12">
              <i className="fas fa-book-open text-5xl text-gray-300 mb-4"></i>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Buku tidak ditemukan
              </h3>
              <p className="text-gray-600">
                Coba kata kunci lain atau pilih kategori berbeda
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredBooks.map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default BookCatalog
