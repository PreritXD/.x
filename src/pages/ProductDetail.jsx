// Product Detail Page - Individual Product View
import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useCart } from '../context/CartContext'
import { getProductById } from '../data/products'

const ProductDetail = () => {
    const { id } = useParams()
    const product = getProductById(id)
    const { addToCart } = useCart()
    const [selectedImage, setSelectedImage] = useState(0)
    const [quantity, setQuantity] = useState(1)
    const [addedToCart, setAddedToCart] = useState(false)

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">Product Not Found</h2>
                    <Link to="/collections">
                        <button className="btn-primary">Back to Collections</button>
                    </Link>
                </div>
            </div>
        )
    }

    const handleAddToCart = () => {
        addToCart(product, quantity)
        setAddedToCart(true)
        setTimeout(() => setAddedToCart(false), 2000)
    }

    const discount = product.originalPrice
        ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
        : 0

    return (
        <div className="page-transition pt-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Breadcrumb */}
                <div className="mb-8 text-sm text-slate-600">
                    <Link to="/" className="hover:text-rani-pink">Home</Link>
                    <span className="mx-2">/</span>
                    <Link to="/collections" className="hover:text-rani-pink">Collections</Link>
                    <span className="mx-2">/</span>
                    <span className="text-slate-900">{product.name}</span>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Image Gallery */}
                    <div>
                        {/* Main Image */}
                        <motion.div
                            key={selectedImage}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                            className="aspect-[3/4] rounded-2xl overflow-hidden mb-4 bg-slate-100"
                        >
                            <img
                                src={product.images[selectedImage]}
                                alt={product.name}
                                className="w-full h-full object-cover"
                            />
                        </motion.div>

                        {/* Thumbnail Gallery */}
                        {product.images.length > 1 && (
                            <div className="grid grid-cols-4 gap-4">
                                {product.images.map((image, index) => (
                                    <motion.button
                                        key={index}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => setSelectedImage(index)}
                                        className={`aspect-square rounded-lg overflow-hidden ${selectedImage === index ? 'ring-4 ring-rani-pink' : ''
                                            }`}
                                    >
                                        <img
                                            src={image}
                                            alt={`${product.name} ${index + 1}`}
                                            className="w-full h-full object-cover"
                                        />
                                    </motion.button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Product Info */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            {/* Category */}
                            <p className="text-teal font-semibold mb-2">{product.category}</p>

                            {/* Product Name */}
                            <h1 className="heading-lg mb-4">{product.name}</h1>

                            {/* Price */}
                            <div className="flex items-center gap-4 mb-6">
                                <span className="text-4xl font-bold text-slate-900">
                                    ₹{product.price.toLocaleString('en-IN')}
                                </span>
                                {product.originalPrice && (
                                    <>
                                        <span className="text-2xl text-slate-400 line-through">
                                            ₹{product.originalPrice.toLocaleString('en-IN')}
                                        </span>
                                        <span className="bg-rani-pink text-white px-3 py-1 rounded-full text-sm font-semibold">
                                            {discount}% OFF
                                        </span>
                                    </>
                                )}
                            </div>

                            {/* Stock Status */}
                            <div className="flex items-center gap-2 mb-6">
                                <div className={`w-3 h-3 rounded-full ${product.inStock ? 'bg-teal' : 'bg-red-500'}`} />
                                <span className={`font-semibold ${product.inStock ? 'text-teal' : 'text-red-500'}`}>
                                    {product.inStock ? 'In Stock' : 'Out of Stock'}
                                </span>
                            </div>

                            {/* Description */}
                            <p className="text-lg text-slate-700 leading-relaxed mb-8">
                                {product.description}
                            </p>

                            {/* Product Details */}
                            <div className="bg-slate-50 rounded-xl p-6 mb-8">
                                <h3 className="font-display font-semibold text-lg mb-4">Product Details</h3>
                                <div className="space-y-3">
                                    <div className="flex justify-between">
                                        <span className="text-slate-600">Fabric:</span>
                                        <span className="font-semibold text-slate-900">{product.fabric}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-slate-600">Work:</span>
                                        <span className="font-semibold text-slate-900">{product.work}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-slate-600">Color:</span>
                                        <span className="font-semibold text-slate-900">{product.color}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-slate-600">Length:</span>
                                        <span className="font-semibold text-slate-900">{product.length}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Quantity Selector */}
                            <div className="mb-6">
                                <label className="block text-sm font-semibold text-slate-900 mb-2">
                                    Quantity
                                </label>
                                <div className="flex items-center gap-4">
                                    <button
                                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                        className="w-10 h-10 rounded-lg bg-slate-100 hover:bg-slate-200 flex items-center justify-center font-semibold"
                                    >
                                        -
                                    </button>
                                    <span className="text-xl font-semibold w-12 text-center">{quantity}</span>
                                    <button
                                        onClick={() => setQuantity(quantity + 1)}
                                        className="w-10 h-10 rounded-lg bg-slate-100 hover:bg-slate-200 flex items-center justify-center font-semibold"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>

                            {/* Add to Cart Button */}
                            <div className="flex gap-4">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={handleAddToCart}
                                    disabled={!product.inStock}
                                    className={`flex-1 py-4 rounded-lg font-semibold text-lg transition-all ${product.inStock
                                            ? 'btn-primary'
                                            : 'bg-slate-300 text-slate-500 cursor-not-allowed'
                                        }`}
                                >
                                    {addedToCart ? '✓ Added to Cart!' : 'Add to Cart'}
                                </motion.button>
                                <Link to="/cart" className="flex-1">
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full btn-outline py-4"
                                    >
                                        View Cart
                                    </motion.button>
                                </Link>
                            </div>

                            {/* Trust Badges */}
                            <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-slate-200">
                                <div className="text-center">
                                    <div className="text-2xl mb-1">✨</div>
                                    <p className="text-xs text-slate-600">100% Authentic</p>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl mb-1">🚚</div>
                                    <p className="text-xs text-slate-600">Free Shipping</p>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl mb-1">🔄</div>
                                    <p className="text-xs text-slate-600">Easy Returns</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail
