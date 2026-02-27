// Hero Section Component with Parallax and Animations
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <div className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image with Parallax Effect */}
            <motion.div
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5 }}
                className="absolute inset-0 z-0"
            >
                <img
                    src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=1920&q=80"
                    alt="DEEPALI Premium Sarees"
                    className="w-full h-full object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />
            </motion.div>

            {/* Floating Decorative Elements */}
            <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-rani-pink/20 to-saffron/20 rounded-full blur-3xl"
            />
            <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-teal/20 to-gold/20 rounded-full blur-3xl"
            />

            {/* Hero Content */}
            <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h1 className="heading-xl text-white mb-6">
                        Handcrafted Heritage,
                        <br />
                        <span className="text-gradient bg-gradient-to-r from-rani-pink via-saffron to-gold bg-clip-text text-transparent">
                            Modern Elegance
                        </span>
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-xl md:text-2xl text-slate-200 mb-10 max-w-3xl mx-auto font-light"
                >
                    Discover exquisite Banarasi sarees woven with tradition and passion in the heart of Varanasi.
                    Each piece tells a story of timeless craftsmanship.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <Link to="/collections">
                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(233, 30, 99, 0.4)" }}
                            whileTap={{ scale: 0.95 }}
                            className="btn-primary px-10 py-4 text-lg"
                        >
                            Explore Collections
                        </motion.button>
                    </Link>
                    <Link to="/about">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="btn-outline border-white text-white hover:bg-white hover:text-slate-900 px-10 py-4 text-lg"
                        >
                            Our Story
                        </motion.button>
                    </Link>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="text-white/80"
                    >
                        <svg
                            className="w-6 h-6 mx-auto"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 14l-7 7m0 0l-7-7m7 7V3"
                            />
                        </svg>
                        <p className="text-sm mt-2">Scroll to explore</p>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}

export default Hero
