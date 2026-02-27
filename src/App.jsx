// DEEPALI - Main App Component with Routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import About from './pages/About'
import Collections from './pages/Collections'
import ProductDetail from './pages/ProductDetail'
import Contact from './pages/Contact'
import Cart from './pages/Cart'

function App() {
  return (
    <CartProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col smooth-scroll">
          {/* Sticky Navbar */}
          <Navbar />

          {/* Main Content */}
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/collections" element={<Collections />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </main>

          {/* Footer */}
          <Footer />
        </div>
      </Router>
    </CartProvider>
  )
}

export default App
