// Cart Page - Shopping Cart with State Management
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const Cart = () => {
    const { cartItems, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart()

    const subtotal = getCartTotal()
    const shipping = subtotal > 10000 ? 0 : 500
    const total = subtotal + shipping

    if (cartItems.length === 0) {
        return (
            <div className="page-transition pt-24 min-h-screen flex items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center"
                >
                    <div className="text-8xl mb-6">🛍️</div>
                    <h2 className="heading-lg mb-4">Your Cart is Empty</h2>
                    <p className="text-lg text-slate-600 mb-8">
                        Looks like you haven't added any sarees to your cart yet
                    </p>
                    <Link to="/collections">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="btn-primary"
                        >
                            Start Shopping
                        </motion.button>
                    </Link>
                </motion.div>
            </div>
        )
    }

    return (
        <div className="page-transition pt-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Header */}
                <div className="flex justify-between items-center mb-8">
                    <h1 className="heading-lg">Shopping Cart</h1>
                    <button
                        onClick={clearCart}
                        className="text-red-600 hover:text-red-700 font-semibold"
                    >
                        Clear Cart
                    </button>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Cart Items */}
                    <div className="lg:col-span-2 space-y-4">
                        {cartItems.map((item) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, x: -100 }}
                                className="card-premium p-6"
                            >
                                <div className="flex gap-6">
                                    {/* Product Image */}
                                    <Link to={`/product/${item.id}`} className="flex-shrink-0">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-32 h-32 object-cover rounded-lg"
                                        />
                                    </Link>

                                    {/* Product Info */}
                                    <div className="flex-1">
                                        <Link to={`/product/${item.id}`}>
                                            <h3 className="text-lg font-display font-semibold text-slate-900 mb-2 hover:text-rani-pink transition-colors">
                                                {item.name}
                                            </h3>
                                        </Link>
                                        <p className="text-sm text-teal mb-3">{item.category}</p>

                                        <div className="flex items-center gap-4 mb-4">
                                            <span className="text-2xl font-bold text-slate-900">
                                                ₹{item.price.toLocaleString('en-IN')}
                                            </span>
                                            {item.originalPrice && (
                                                <span className="text-sm text-slate-400 line-through">
                                                    ₹{item.originalPrice.toLocaleString('en-IN')}
                                                </span>
                                            )}
                                        </div>

                                        {/* Quantity Controls */}
                                        <div className="flex items-center gap-4">
                                            <div className="flex items-center gap-3">
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                    className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 flex items-center justify-center font-semibold"
                                                >
                                                    -
                                                </button>
                                                <span className="text-lg font-semibold w-8 text-center">
                                                    {item.quantity}
                                                </span>
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                    className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 flex items-center justify-center font-semibold"
                                                >
                                                    +
                                                </button>
                                            </div>

                                            <button
                                                onClick={() => removeFromCart(item.id)}
                                                className="text-red-600 hover:text-red-700 font-semibold ml-auto"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>

                                    {/* Item Total */}
                                    <div className="text-right">
                                        <p className="text-sm text-slate-600 mb-1">Total</p>
                                        <p className="text-2xl font-bold text-slate-900">
                                            ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Order Summary */}
                    <div className="lg:col-span-1">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="card-premium p-6 sticky top-24"
                        >
                            <h2 className="text-2xl font-display font-semibold mb-6">Order Summary</h2>

                            <div className="space-y-4 mb-6">
                                <div className="flex justify-between text-slate-700">
                                    <span>Subtotal ({cartItems.length} items)</span>
                                    <span className="font-semibold">₹{subtotal.toLocaleString('en-IN')}</span>
                                </div>
                                <div className="flex justify-between text-slate-700">
                                    <span>Shipping</span>
                                    <span className="font-semibold">
                                        {shipping === 0 ? (
                                            <span className="text-teal">FREE</span>
                                        ) : (
                                            `₹${shipping.toLocaleString('en-IN')}`
                                        )}
                                    </span>
                                </div>
                                {subtotal < 10000 && (
                                    <p className="text-sm text-slate-600 bg-teal/10 p-3 rounded-lg">
                                        Add ₹{(10000 - subtotal).toLocaleString('en-IN')} more for FREE shipping!
                                    </p>
                                )}
                                <div className="border-t border-slate-200 pt-4">
                                    <div className="flex justify-between text-xl font-bold">
                                        <span>Total</span>
                                        <span className="text-rani-pink">₹{total.toLocaleString('en-IN')}</span>
                                    </div>
                                </div>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full btn-primary mb-4"
                            >
                                Proceed to Checkout
                            </motion.button>

                            <Link to="/collections">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full btn-outline"
                                >
                                    Continue Shopping
                                </motion.button>
                            </Link>

                            {/* Trust Badges */}
                            <div className="mt-6 pt-6 border-t border-slate-200 space-y-3">
                                <div className="flex items-center gap-3 text-sm text-slate-600">
                                    <span className="text-xl">✨</span>
                                    <span>100% Authentic Products</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-slate-600">
                                    <span className="text-xl">🔒</span>
                                    <span>Secure Payment</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-slate-600">
                                    <span className="text-xl">🔄</span>
                                    <span>7-Day Easy Returns</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
