// Home Page - Main Landing Page
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import CategorySlider from '../components/CategorySlider'
import ProductCard from '../components/ProductCard'
import Testimonials from '../components/Testimonials'
import { getFeaturedProducts } from '../data/products'

const Home = () => {
    const featuredProducts = getFeaturedProducts()

    return (
        <div className="page-transition">
            {/* Hero Section */}
            <Hero />

            {/* Category Slider */}
            <CategorySlider />

            {/* Featured Products Section */}
            <section className="section-container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="heading-lg mb-4">Featured Collection</h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Handpicked masterpieces showcasing the finest craftsmanship from our artisans
                    </p>
                </motion.div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {featuredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                {/* View All Button */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <Link to="/collections">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="btn-primary"
                        >
                            View All Collections
                        </motion.button>
                    </Link>
                </motion.div>
            </section>

            {/* Heritage Section */}
            <section className="bg-gradient-to-br from-rani-pink/5 to-saffron/5 py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="heading-md mb-6">
                                Weaving Dreams Since Generations
                            </h2>
                            <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                                DEEPALI is more than a brand - it's a celebration of India's rich textile heritage.
                                Rooted in the ancient city of Varanasi, we work directly with master weavers who have
                                inherited their craft through generations.
                            </p>
                            <p className="text-lg text-slate-700 mb-8 leading-relaxed">
                                Every saree tells a story of dedication, artistry, and cultural pride. When you choose
                                DEEPALI, you're not just buying a saree - you're preserving a timeless tradition.
                            </p>
                            <Link to="/about">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="btn-secondary"
                                >
                                    Discover Our Story
                                </motion.button>
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=800&q=80"
                                alt="Artisan weaving"
                                className="rounded-2xl shadow-2xl"
                            />
                            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
                                <p className="text-4xl font-display font-bold text-rani-pink mb-1">45+</p>
                                <p className="text-slate-600">Days of Craftsmanship</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <Testimonials />

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-rani-pink via-saffron to-teal py-20">
                <div className="max-w-4xl mx-auto text-center px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="heading-lg text-white mb-6">
                            Ready to Experience Luxury?
                        </h2>
                        <p className="text-xl text-white/90 mb-8">
                            Explore our exclusive collection and find the perfect saree for your special moments
                        </p>
                        <Link to="/collections">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-white text-rani-pink px-10 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl transition-all"
                            >
                                Shop Now
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

export default Home
