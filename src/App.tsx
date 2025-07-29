import React from "react"
import Header from "./components/Header/Header"
import HomePage from "./pages/HomePage"
import Footer from "./components/Footer/Footer"
import "./App.css"

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow pt-24">
        <HomePage />
      </main>
      <Footer />
    </div>
  )
}

export default App
