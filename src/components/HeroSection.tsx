import React from "react"
import Button from "./UI/Button"

const HeroSection: React.FC = () => {
  const scrollToCatalog = () => {
    const catalogElement = document.getElementById("katalog-buku")
    if (catalogElement) {
      catalogElement.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleBuyClick = () => {
    const bookTitle = "Mata Harumi"
    const message = `Halo, PenerbitTerang. Saya tertarik membeli buku '${bookTitle}'. Apakah bukunya tersedia? Jika ada, mohon infokan harga. Terima kasih banyak!`
    const whatsappUrl = `https://api.whatsapp.com/send?phone=62895379143698&text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="relative bg-gradient-to-r from-indigo-900 to-indigo-700 text-white pt-32 pb-20 overflow-x-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/10 to-black/30"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-indigo-900/80 to-transparent"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 rounded-full bg-indigo-600/20 blur-3xl"></div>
        <div className="absolute top-20 right-1/4 w-32 h-32 rounded-full bg-purple-600/20 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-indigo-800/30 backdrop-blur-sm border border-indigo-600 rounded-full px-4 py-1 mb-4">
              <span className="text-sm">Buku Terbaru Tersedia!</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Temukan <span className="text-yellow-400">Inspirasi</span> Tanpa
              Batas di Setiap Halaman
            </h1>
            <p className="text-lg text-indigo-100 mb-8 max-w-2xl">
              Penerbit Terang menghadirkan karya-karya terbaik dari penulis
              berbakat yang siap membuka wawasan dan menginspirasi perubahan
              dalam hidup Anda.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                variant="primary"
                size="lg"
                icon="fas fa-book-open"
                onClick={scrollToCatalog}
              >
                Jelajahi Katalog
              </Button>
            </div>
          </div>

          {/* Featured Book - Desktop with decorative border */}
          <div className="hidden lg:block relative">
            <div className="relative">
              <div className="absolute -top-8 -right-8 w-full h-full border-4 border-yellow-400 rounded-2xl"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-1">
                  <div className="bg-gray-900 p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold">Mata Harumi</h3>
                        <p className="text-indigo-400">Ahmad Taufik</p>
                      </div>
                      <span className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-bold">
                        Baru!
                      </span>
                    </div>

                    <div className="mb-4">
                      <div className="flex text-yellow-400 mb-1">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                      </div>
                      <p className="text-gray-400 text-sm">
                        320 halaman • Sejarah
                      </p>
                    </div>

                    <p className="text-gray-300 mb-6">
                      Sebuah kisah inspiratif tentang perjuangan melawan
                      kegelapan dan menemukan harapan di tempat tak terduga.
                      Novel ini mengajarkan kita tentang ketangguhan manusia
                      dalam menghadapi tantangan hidup.
                    </p>

                    <div className="flex justify-end">
                      <Button
                        variant="primary"
                        size="sm"
                        icon="fas fa-shopping-cart"
                        onClick={handleBuyClick}
                      >
                        Beli Sekarang
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Book - Mobile (simplified without decorative border) */}
          <div className="lg:hidden mt-8">
            <div className="rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-indigo-500 to-purple-600 p-1">
              <div className="bg-gray-900 p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold">Mata Harumi</h3>
                    <p className="text-indigo-400">Ahmad Taufik</p>
                  </div>
                  <span className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-bold">
                    Baru!
                  </span>
                </div>

                <div className="mb-4">
                  <div className="flex text-yellow-400 mb-1">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                  </div>
                  <p className="text-gray-400 text-sm">
                    320 halaman • Sejarah
                  </p>
                </div>

                <p className="text-gray-300 mb-6">
                  Sebuah kisah inspiratif tentang perjuangan melawan
                  kegelapan dan menemukan harapan di tempat tak terduga.
                  Novel ini mengajarkan kita tentang ketangguhan manusia
                  dalam menghadapi tantangan hidup.
                </p>

                <div className="flex justify-end">
                  <Button
                    variant="primary"
                    size="sm"
                    icon="fas fa-shopping-cart"
                    onClick={handleBuyClick}
                  >
                    Beli Sekarang
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
