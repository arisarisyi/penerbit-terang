import React, { useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { books } from "../data/books"
import Button from "../components/UI/Button"
import Rating from "../components/UI/Rating"

const BookDetailsPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()

  // Scroll to top when component mounts or slug changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [slug])

  const book = books.find((b) => b.slug === slug)

  const handleBuyClick = () => {
    if (!book) return
    const message = `Halo, PenerbitTerang. Saya tertarik membeli buku '${book.title}'. Apakah bukunya tersedia? Jika ada, mohon inforkan harga. Terima kasih banyak!`
    const whatsappUrl = `https://api.whatsapp.com/send?phone=62895379143698&text=${encodeURIComponent(
      message
    )}`
    window.open(whatsappUrl, "_blank")
  }

  if (!book) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Buku tidak ditemukan
          </h1>
          <Button variant="primary" onClick={() => navigate("/")}>
            Kembali ke Beranda
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button
          onClick={() => navigate("/")}
          className="mb-6 flex items-center text-indigo-600 hover:text-indigo-800 transition-colors"
        >
          <span className="mr-2">←</span>
          Kembali ke Katalog
        </button>

        {/* Book Details */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="md:flex">
            {/* Book Cover */}
            <div className="md:w-1/3">
              <div className="relative h-96 md:h-full">
                <img
                  src={book.coverImage}
                  alt={book.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  {book.isNewRelease && (
                    <span className="bg-green-500 text-white text-sm font-bold px-4 py-2 rounded-full">
                      Baru!
                    </span>
                  )}
                  {book.isFeatured && (
                    <span className="bg-yellow-500 text-gray-900 text-sm font-bold px-4 py-2 rounded-full">
                      Unggulan
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Book Info */}
            <div className="md:w-2/3 p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-indigo-100 text-indigo-800 text-sm font-semibold px-3 py-1 rounded-full">
                  {book.category}
                </span>
                <Rating value={book.rating} />
              </div>

              <h1 className="text-4xl font-bold text-gray-900 mb-3">
                {book.title}
              </h1>

              <p className="text-xl text-gray-600 mb-6">Oleh: {book.author}</p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-500 text-sm">Halaman</p>
                  <p className="text-lg font-semibold text-gray-900">
                    {book.pages} halaman
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-500 text-sm">Terbit</p>
                  <p className="text-lg font-semibold text-gray-900">
                    {new Date(book.publishDate).toLocaleDateString("id-ID", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-3">
                  Deskripsi
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {book.description || "Deskripsi buku belum tersedia."}
                </p>
              </div>

              <div className="flex gap-4">
                <Button
                  variant="primary"
                  icon="fas fa-shopping-cart"
                  onClick={handleBuyClick}
                  className="flex-1"
                >
                  Beli Sekarang
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Related Books Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Buku Serupa
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {books
              .filter((b) => b.category === book.category && b.id !== book.id)
              .slice(0, 4)
              .map((relatedBook) => (
                <div
                  key={relatedBook.id}
                  onClick={() => navigate(`/book/${relatedBook.slug}`)}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group"
                >
                  <div className="overflow-hidden">
                    <img
                      src={relatedBook.coverImage}
                      alt={relatedBook.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-900 line-clamp-2 h-12 mb-2">
                      {relatedBook.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {relatedBook.author}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookDetailsPage
