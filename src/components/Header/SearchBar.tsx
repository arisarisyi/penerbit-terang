import React, { useState } from "react"
import Button from "../UI/Button"

const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Searching for:", searchTerm)
    // Implement search functionality
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-md">
      <div className="relative flex-grow">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Cari buku, penulis, atau kategori..."
          className="w-full px-4 py-2 pl-10 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        />
        <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
      </div>
      <Button variant="primary" size="md" className="rounded-l-none">
        Cari
      </Button>
    </form>
  )
}

export default SearchBar
