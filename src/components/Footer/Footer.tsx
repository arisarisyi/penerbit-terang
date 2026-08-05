import React from "react"
import { Category } from "../../types/bookTypes"

interface FooterProps {
  onCategoryClick?: (category: Category) => void
}

const Footer: React.FC<FooterProps> = ({ onCategoryClick }) => {
  const currentYear = new Date().getFullYear()

  const handleCategoryClick = (categoryName: string) => {
    // Map footer category names to actual category values
    const categoryMap: Record<string, Category> = {
      Fiksi: "Fiksi",
      "Non-Fiksi": "Non-Fiksi",
      "Sains & Teknologi": "Teknologi",
      "Bisnis & Ekonomi": "Bisnis",
      "Sejarah & Budaya": "Sejarah",
      "Pengembangan Diri": "Self-Help",
    }

    const category = categoryMap[categoryName]
    if (category && onCategoryClick) {
      onCategoryClick(category)
    }
  }

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <h3 className="text-xl font-bold">
                Penerbit <span className="text-yellow-400">Terang</span>
              </h3>
            </div>
            <p className="text-gray-400 mb-4">
              Menebarkan ilmu pengetahuan melalui buku-buku berkualitas yang
              menginspirasi dan mencerahkan.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/penerbitterang/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <i className="fab fa-instagram text-xl"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Kategori Buku</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleCategoryClick("Fiksi")}
                  className="text-gray-400 hover:text-white transition-colors text-left w-full"
                >
                  Fiksi
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleCategoryClick("Non-Fiksi")}
                  className="text-gray-400 hover:text-white transition-colors text-left w-full"
                >
                  Non-Fiksi
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleCategoryClick("Sains & Teknologi")}
                  className="text-gray-400 hover:text-white transition-colors text-left w-full"
                >
                  Sains & Teknologi
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleCategoryClick("Bisnis & Ekonomi")}
                  className="text-gray-400 hover:text-white transition-colors text-left w-full"
                >
                  Bisnis & Ekonomi
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleCategoryClick("Sejarah & Budaya")}
                  className="text-gray-400 hover:text-white transition-colors text-left w-full"
                >
                  Sejarah & Budaya
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleCategoryClick("Pengembangan Diri")}
                  className="text-gray-400 hover:text-white transition-colors text-left w-full"
                >
                  Pengembangan Diri
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Tautan Penting</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Tentang Kami
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Kebijakan Privasi
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Syarat & Ketentuan
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Karir
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col items-center text-gray-500 text-sm text-center">
            <p>
              &copy; {currentYear} Penerbit Terang. Hak Cipta Dilindungi.
            </p>
            <p className="mt-2">
              Created by{" "}
              <a
                href="https://www.alarisyi.web.id"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                alarisyi
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
