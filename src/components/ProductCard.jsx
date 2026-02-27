// Product Card Component with Hover Animations
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const ProductCard = ({ product }) => {
    const { addToCart } = useCart()

    const handleAddToCart = (e) => {
        e.preventDefault()
        addToCart(product)
    }

    const discount = product.originalPrice
        ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
        : 0

    return (
        <Link to={`/product/${product.id}`}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -8 }}
                className="card-premium group cursor-pointer"
            >
                {/* Image Container with Hover Zoom */}
                <div className="relative overflow-hidden aspect-[3/4] bg-slate-100">
                    <motion.img
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                    />

                    {/* Discount Badge */}
                    {discount > 0 && (
                        <div className="absolute top-4 left-4 bg-rani-pink text-white px-3 py-1 rounded-full text-sm font-semibold">
                            {discount}% OFF
                        </div>
                    )}

                    {/* Quick Add to Cart Button - Shows on Hover */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileHover={{ opacity: 1, y: 0 }}
                        className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handleAddToCart}
                            className="w-full bg-white text-slate-900 py-3 rounded-lg font-semibold hover:bg-rani-pink hover:text-white transition-colors"
                        >
                            Add to Cart
                        </motion.button>
                    </motion.div>
                </div>

                {/* Product Info */}
                <div className="p-5">
                    {/* Category */}
                    <p className="text-sm text-teal font-medium mb-2">{product.category}</p>

                    {/* Product Name */}
                    <h3 className="text-lg font-display font-semibold text-slate-900 mb-3 line-clamp-2 group-hover:text-rani-pink transition-colors">
                        {product.name}
                    </h3>

                    {/* Price */}
                    <div className="flex items-center gap-3">
                        <span className="text-2xl font-bold text-slate-900">
                            ₹{product.price.toLocaleString('en-IN')}
                        </span>
                        {product.originalPrice && (
                            <span className="text-lg text-slate-400 line-through">
                                ₹{product.originalPrice.toLocaleString('en-IN')}
                            </span>
                        )}
                    </div>

                    {/* Stock Status */}
                    <div className="mt-3 flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${product.inStock ? 'bg-teal' : 'bg-red-500'}`} />
                        <span className={`text-sm ${product.inStock ? 'text-teal' : 'text-red-500'}`}>
                            {product.inStock ? 'In Stock' : 'Out of Stock'}
                        </span>
                    </div>
                </div>
            </motion.div>
        </Link>
    )
}

export default ProductCard
