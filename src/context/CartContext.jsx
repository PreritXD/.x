// Cart Context - Global State Management for Shopping Cart
import { createContext, useContext, useState, useEffect } from 'react'

const CartContext = createContext()

// Custom hook to use cart context
export const useCart = () => {
    const context = useContext(CartContext)
    if (!context) {
        throw new Error('useCart must be used within a CartProvider')
    }
    return context
}

export const CartProvider = ({ children }) => {
    // Initialize cart from localStorage or empty array
    const [cartItems, setCartItems] = useState(() => {
        const savedCart = localStorage.getItem('deepali-cart')
        return savedCart ? JSON.parse(savedCart) : []
    })

    // Save cart to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('deepali-cart', JSON.stringify(cartItems))
    }, [cartItems])

    // Add item to cart
    const addToCart = (product, quantity = 1) => {
        setCartItems(prevItems => {
            const existingItem = prevItems.find(item => item.id === product.id)

            if (existingItem) {
                // Update quantity if item already exists
                return prevItems.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                )
            } else {
                // Add new item to cart
                return [...prevItems, { ...product, quantity }]
            }
        })
    }

    // Remove item from cart
    const removeFromCart = (productId) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== productId))
    }

    // Update item quantity
    const updateQuantity = (productId, quantity) => {
        if (quantity <= 0) {
            removeFromCart(productId)
            return
        }

        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === productId ? { ...item, quantity } : item
            )
        )
    }

    // Clear entire cart
    const clearCart = () => {
        setCartItems([])
    }

    // Get cart total
    const getCartTotal = () => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)
    }

    // Get total items count
    const getCartCount = () => {
        return cartItems.reduce((count, item) => count + item.quantity, 0)
    }

    const value = {
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getCartTotal,
        getCartCount,
    }

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
