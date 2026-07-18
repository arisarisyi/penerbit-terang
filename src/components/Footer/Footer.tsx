import React from "react"
import Button from "../UI/Button"

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
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
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <i className="fab fa-facebook-f text-xl"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <i className="fab fa-linkedin-in text-xl"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Kategori Buku</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Fiksi
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Non-Fiksi
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Sains & Teknologi
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Bisnis & Ekonomi
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Sejarah & Budaya
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Pengembangan Diri
                </a>
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

          <div>
            <h4 className="text-lg font-semibold mb-4">
              Berlangganan Newsletter
            </h4>
            <p className="text-gray-400 mb-4">
              Dapatkan informasi terbaru tentang buku-buku terbaru dan promo
              menarik.
            </p>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Email Anda"
                className="px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <Button variant="primary">Berlangganan</Button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Penerbit Terang. Hak Cipta Dilindungi.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <img
              src="https://via.placeholder.com/50x30?text=VISA"
              alt="Visa"
              className="h-8"
            />
            <img
              src="https://via.placeholder.com/50x30?text=MC"
              alt="Mastercard"
              className="h-8"
            />
            <img
              src="https://via.placeholder.com/50x30?text=PayPal"
              alt="PayPal"
              className="h-8"
            />
            <img
              src="https://via.placeholder.com/50x30?text=Gopay"
              alt="Gopay"
              className="h-8"
            />
            <img
              src="https://via.placeholder.com/50x30?text=OVO"
              alt="OVO"
              className="h-8"
            />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
