import React from "react"
import { Book } from "../../types/bookTypes"
import Button from "../UI/Button"
import Rating from "../UI/Rating"

interface BookCardProps {
  book: Book
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const handleBuyClick = () => {
    const message = `Halo, PenerbitTerang. Saya tertarik membeli buku '${book.title}'. Apakah bukunya tersedia? Jika ada, mohon infokan harga. Terima kasih banyak!`
    const whatsappUrl = `https://api.whatsapp.com/send?phone=62895379143698&text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
      <div className="relative">
        <div className="overflow-hidden">
          <img
            src={book.coverImage}
            alt={book.title}
            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="absolute top-3 right-3 flex flex-col gap-2">
          {book.isNewRelease && (
            <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
              Baru!
            </span>
          )}
          {book.isFeatured && (
            <span className="bg-yellow-500 text-gray-900 text-xs font-bold px-3 py-1 rounded-full">
              Unggulan
            </span>
          )}
        </div>
      </div>

      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-gray-900 line-clamp-2 h-14">
            {book.title}
          </h3>
          <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-2 py-1 rounded">
            {book.category}
          </span>
        </div>

        <p className="text-gray-600 text-sm mb-3">Oleh: {book.author}</p>

        <div className="flex items-center mb-4">
          <Rating value={book.rating} />
          <span className="text-gray-500 text-sm ml-2">
            • {book.pages} halaman
          </span>
        </div>

        <p className="text-gray-700 mb-4">
          {book.description}
        </p>

        <div className="flex justify-end">
          <Button variant="primary" icon="fas fa-shopping-cart" onClick={handleBuyClick}>
            Beli
          </Button>
        </div>
      </div>
    </div>
  )
}

export default BookCard
