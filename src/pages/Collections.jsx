// Collections Page - Browse All Products with Filtering
import { useState } from 'react'
import { motion } from 'framer-motion'
import ProductCard from '../components/ProductCard'
import { products, getProductsByCategory } from '../data/products'

const Collections = () => {
    const [activeCategory, setActiveCategory] = useState('all')

    const categories = [
        { id: 'all', name: 'All Collections' },
        { id: 'Varanasi Specials', name: 'Varanasi Specials' },
        { id: 'Handloom', name: 'Handloom' },
        { id: 'Sarees', name: 'Premium Silk' }
    ]

    const filteredProducts = getProductsByCategory(activeCategory)

    return (
        <div className="page-transition pt-24">
            {/* Header */}
            <section className="bg-gradient-to-r from-rani-pink/10 via-saffron/10 to-teal/10 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="heading-xl mb-4">Our Collections</h1>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                            Explore our curated selection of handcrafted sarees, each a masterpiece of tradition and artistry
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Category Filter */}
            <section className="sticky top-20 z-40 bg-white/95 backdrop-blur-md shadow-md py-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap justify-center gap-4">
                        {categories.map((category) => (
                            <motion.button
                                key={category.id}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setActiveCategory(category.id)}
                                className={`px-6 py-3 rounded-full font-semibold transition-all ${activeCategory === category.id
                                        ? 'bg-gradient-to-r from-rani-pink to-saffron text-white shadow-lg'
                                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                                    }`}
                            >
                                {category.name}
                            </motion.button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Products Grid */}
            <section className="section-container">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                >
                    <div className="mb-6">
                        <p className="text-slate-600">
                            Showing <span className="font-semibold text-slate-900">{filteredProducts.length}</span> products
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>

                    {filteredProducts.length === 0 && (
                        <div className="text-center py-20">
                            <p className="text-2xl text-slate-400">No products found in this category</p>
                        </div>
                    )}
                </motion.div>
            </section>

            {/* Info Banner */}
            <section className="bg-gradient-to-r from-teal to-teal-700 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-8 text-center text-white">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="text-4xl mb-2">🚚</div>
                            <h3 className="font-display font-semibold text-lg mb-2">Free Shipping</h3>
                            <p className="text-white/90">On orders above ₹10,000</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            <div className="text-4xl mb-2">✨</div>
                            <h3 className="font-display font-semibold text-lg mb-2">100% Authentic</h3>
                            <p className="text-white/90">Handwoven by master artisans</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <div className="text-4xl mb-2">🔄</div>
                            <h3 className="font-display font-semibold text-lg mb-2">Easy Returns</h3>
                            <p className="text-white/90">7-day return policy</p>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Collections
