import React from "react"
import { Category } from "../../types/bookTypes"

interface CategoryFilterProps {
  categories: Category[]
  selectedCategory: Category
  onSelectCategory: (category: Category) => void
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
}) => {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
            selectedCategory === category
              ? "bg-indigo-600 text-white shadow-md"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  )
}

export default CategoryFilter
