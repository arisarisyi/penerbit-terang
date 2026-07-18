import React, { useEffect, useState } from "react"

interface WelcomeScreenProps {
  onComplete: () => void
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          // Start fade out animation
          setTimeout(() => {
            setFadeOut(true)
            setTimeout(() => {
              onComplete()
            }, 500) // Wait for fade out animation
          }, 300)
          return 100
        }
        return prev + 2 // Increment by 2% every tick
      })
    }, 20) // Update every 20ms

    return () => clearInterval(interval)
  }, [onComplete])

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-indigo-900 via-indigo-700 to-purple-800 transition-opacity duration-500 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="text-center">
        {/* Logo */}
        <div className="mb-8 animate-bounce">
          <img
            src="/img/penerbit-terang.png"
            alt="Penerbit Terang"
            className="h-24 mx-auto"
          />
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Penerbit <span className="text-yellow-400">Terang</span>
        </h1>
        <p className="text-indigo-200 text-lg mb-8">
          Menebarkan ilmu pengetahuan...
        </p>

        {/* Loading Bar */}
        <div className="w-64 mx-auto">
          <div className="h-2 bg-indigo-900/50 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full transition-all duration-20 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-indigo-300 text-sm mt-2">{progress}%</p>
        </div>

        {/* Book icons animation */}
        <div className="flex justify-center gap-4 mt-8">
          <div className="animate-pulse">
            <i className="fas fa-book text-yellow-400 text-2xl"></i>
          </div>
          <div className="animate-pulse" style={{ animationDelay: "0.2s" }}>
            <i className="fas fa-book-open text-yellow-400 text-2xl"></i>
          </div>
          <div className="animate-pulse" style={{ animationDelay: "0.4s" }}>
            <i className="fas fa-book-reader text-yellow-400 text-2xl"></i>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-yellow-400/10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 rounded-full bg-purple-400/10 blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full bg-indigo-400/10 blur-3xl animate-pulse"></div>
      </div>
    </div>
  )
}

export default WelcomeScreen
