import React, { useState } from "react"
import Button from "../UI/Button"

interface FilterBarProps {
  onSortChange: (sortOption: string) => void
  onSearch: (query: string) => void
}

const FilterBar: React.FC<FilterBarProps> = ({ onSortChange, onSearch }) => {
  const [sortOption, setSortOption] = useState("terbaru")
  const [searchQuery, setSearchQuery] = useState("")

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const option = e.target.value
    setSortOption(option)
    onSortChange(option)
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(searchQuery)
  }

  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
      <form onSubmit={handleSearch} className="flex w-full md:w-auto">
        <div className="relative flex-grow">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari buku..."
            className="w-full px-4 py-2 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
          <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
        </div>
        <Button variant="primary" className="ml-2">
          Cari
        </Button>
      </form>

      <div className="flex items-center">
        <span className="mr-2 text-gray-700">Urutkan:</span>
        <select
          value={sortOption}
          onChange={handleSortChange}
          className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        >
          <option value="terbaru">Terbaru</option>
          <option value="termurah">Harga Terendah</option>
          <option value="termahal">Harga Tertinggi</option>
          <option value="rating">Rating Tertinggi</option>
        </select>
      </div>
    </div>
  )
}

export default FilterBar
