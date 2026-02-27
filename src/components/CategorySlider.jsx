// Category Slider Component
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const CategorySlider = () => {
    const categories = [
        {
            name: 'Varanasi Specials',
            image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&q=80',
            description: 'Authentic Banarasi silk sarees handwoven by master artisans',
            color: 'from-rani-pink to-rani-pink-600'
        },
        {
            name: 'Handloom Collection',
            image: 'https://images.unsplash.com/photo-1610030468706-9a6dbad49b0a?q=80&w=687',
            description: 'Eco-friendly handloom sarees supporting local weavers',
            color: 'from-saffron to-saffron-700'
        },
        {
            name: 'Premium Silk',
            image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=600&q=80',
            description: 'Luxurious silk sarees for special occasions',
            color: 'from-teal to-teal-700'
        },
        {
            name: 'Designer Collection',
            image: 'https://images.unsplash.com/photo-1694243382333-9e3244d9ba04?q=80&w=733&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            description: 'Contemporary designs with traditional craftsmanship',
            color: 'from-gold to-gold-700'
        }
    ]

    return (
        <div className="section-container">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
            >
                <h2 className="heading-lg mb-4">Explore Our Collections</h2>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                    From traditional Banarasi weaves to contemporary designs, discover sarees that celebrate Indian heritage
                </p>
            </motion.div>

            {/* Horizontal Scrolling Container */}
            <div className="relative">
                <div className="flex gap-6 overflow-x-auto hide-scrollbar pb-4 snap-x snap-mandatory">
                    {categories.map((category, index) => (
                        <motion.div
                            key={category.name}
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex-shrink-0 w-80 snap-center"
                        >
                            <Link to="/collections">
                                <motion.div
                                    whileHover={{ y: -8, scale: 1.02 }}
                                    className="relative h-96 rounded-2xl overflow-hidden shadow-xl group cursor-pointer"
                                >
                                    {/* Background Image */}
                                    <img
                                        src={category.image}
                                        alt={category.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />

                                    {/* Gradient Overlay */}
                                    <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-60 group-hover:opacity-70 transition-opacity`} />

                                    {/* Content */}
                                    <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                                        <motion.h3
                                            className="text-2xl font-display font-bold mb-2"
                                            whileHover={{ x: 5 }}
                                        >
                                            {category.name}
                                        </motion.h3>
                                        <p className="text-white/90 text-sm mb-4">
                                            {category.description}
                                        </p>
                                        <motion.div
                                            whileHover={{ x: 5 }}
                                            className="flex items-center gap-2 font-semibold"
                                        >
                                            <span>Explore Now</span>
                                            <svg
                                                className="w-5 h-5 transition-transform group-hover:translate-x-2"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                                />
                                            </svg>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CategorySlider
