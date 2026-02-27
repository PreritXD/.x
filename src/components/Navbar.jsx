// Sticky Animated Navbar Component
import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useCart } from '../context/CartContext'

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const { getCartCount } = useCart()
    const location = useLocation()

    // Handle scroll effect for navbar
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false)
    }, [location])

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Collections', path: '/collections' },
        { name: 'Contact', path: '/contact' },
    ]

    const cartCount = getCartCount()

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-white/95 backdrop-blur-md shadow-lg'
                : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="text-3xl font-display font-bold"
                        >
                            <span className="text-[#fb8500]">DEEPALI</span>
                        </motion.div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`relative font-medium transition-colors duration-200 ${location.pathname === link.path
                                    ? 'text-white drop-shadow-lg'
                                    : isScrolled
                                        ? 'text-slate-700 hover:text-rani-pink'
                                        : 'text-white hover:text-amber-200 drop-shadow-lg'
                                    }`}
                            >
                                {link.name}
                                {location.pathname === link.path && (
                                    <motion.div
                                        layoutId="navbar-indicator"
                                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-rani-pink to-saffron"
                                    />
                                )}
                            </Link>
                        ))}
                    </div>

                    {/* Cart & Mobile Menu Button */}
                    <div className="flex items-center space-x-4">
                        {/* Cart Icon */}
                        <Link to="/cart" className="relative">
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                className={`p-2 rounded-full transition-colors ${isScrolled
                                    ? 'hover:bg-slate-100'
                                    : 'hover:bg-white/20'
                                    }`}
                            >
                                <svg
                                    className={`w-6 h-6 ${isScrolled ? 'text-slate-700' : 'text-white drop-shadow-lg'}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                                    />
                                </svg>
                                {cartCount > 0 && (
                                    <motion.span
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        className="absolute -top-1 -right-1 bg-rani-pink text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center"
                                    >
                                        {cartCount}
                                    </motion.span>
                                )}
                            </motion.button>
                        </Link>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className={`md:hidden p-2 rounded-lg transition-colors ${isScrolled ? 'hover:bg-slate-100' : 'hover:bg-white/20'
                                }`}
                        >
                            <svg
                                className={`w-6 h-6 ${isScrolled ? 'text-slate-700' : 'text-white drop-shadow-lg'}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                {isMobileMenuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-white border-t border-slate-200"
                    >
                        <div className="px-4 py-4 space-y-3">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={`block py-2 px-4 rounded-lg font-medium transition-colors ${location.pathname === link.path
                                        ? 'bg-rani-pink text-white'
                                        : 'text-slate-700 hover:bg-slate-100'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    )
}

export default Navbar
