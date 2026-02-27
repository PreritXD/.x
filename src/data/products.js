// Sample Product Data for DEEPALI
export const products = [
    {
        id: 1,
        name: "Banarasi Silk Saree - Royal Rani",
        category: "Varanasi Specials",
        price: 24999,
        originalPrice: 34999,
        description: "Exquisite Banarasi silk saree handwoven with intricate gold zari work. This masterpiece features traditional Mughal motifs and takes 45 days to craft by skilled artisans.",
        image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&q=80",
            "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=800&q=80",
            "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=800&q=80"
        ],
        fabric: "Pure Banarasi Silk",
        work: "Handwoven Zari",
        color: "Rani Pink with Gold",
        length: "6.5 meters with blouse piece",
        inStock: true,
        featured: true
    },
    {
        id: 2,
        name: "Handloom Cotton Saree - Saffron Dreams",
        category: "Handloom",
        price: 8999,
        originalPrice: 12999,
        description: "Lightweight handloom cotton saree perfect for daily elegance. Features traditional temple border and pallu design with natural dyes.",
        image: "https://images.unsplash.com/photo-1583391733981-15d7b1b8b7c0?w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1583391733981-15d7b1b8b7c0?w=800&q=80",
            "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&q=80"
        ],
        fabric: "Pure Cotton Handloom",
        work: "Temple Border",
        color: "Saffron Orange",
        length: "6.3 meters with blouse piece",
        inStock: true,
        featured: true
    },
    {
        id: 3,
        name: "Patola With Premium Handwork",
        category: "Sarees",
        price: 19500,
        originalPrice: 28750,
        description: "Premium Patola silk saree with contrasting borders. Rich teal body with gold zari work and traditional peacock motifs.",
        image: "https://ibb.co/xtx6XqG8",
        images: [
            "https://ibb.co/xtx6XqG8",
            "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=800&q=80",
            "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=800&q=80"
        ],
        fabric: "Pure Patola Silk",
        work: "Zari with Peacock Motifs",
        color: "Teal with Gold Border",
        length: "6.5 meters with blouse piece",
        inStock: true,
        featured: true
    },
    {
        id: 4,
        name: "Chanderi Silk - Golden Heritage",
        category: "Sarees",
        price: 15999,
        originalPrice: 21999,
        description: "Lightweight Chanderi silk saree with delicate gold butis. Perfect blend of tradition and contemporary style.",
        image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=800&q=80"
        ],
        fabric: "Chanderi Silk",
        work: "Gold Buti Work",
        color: "Cream with Gold",
        length: "6.3 meters with blouse piece",
        inStock: true,
        featured: false
    },
    {
        id: 5,
        name: "Varanasi Brocade - Midnight Blue",
        category: "Varanasi Specials",
        price: 28999,
        originalPrice: 38999,
        description: "Luxurious Varanasi brocade saree with all-over floral jaal pattern. Handcrafted by master weavers of Varanasi.",
        image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&q=80"
        ],
        fabric: "Brocade Silk",
        work: "Jaal Pattern",
        color: "Midnight Blue with Silver",
        length: "6.5 meters with blouse piece",
        inStock: true,
        featured: false
    },
    {
        id: 6,
        name: "Tussar Silk - Natural Elegance",
        category: "Handloom",
        price: 11999,
        originalPrice: 16999,
        description: "Eco-friendly Tussar silk saree with hand-painted tribal art. Each piece is unique and supports local artisans.",
        image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=800&q=80"
        ],
        fabric: "Tussar Silk",
        work: "Hand Painted",
        color: "Natural Beige",
        length: "6.3 meters with blouse piece",
        inStock: true,
        featured: false
    }
]

// Get product by ID
export const getProductById = (id) => {
    return products.find(product => product.id === parseInt(id))
}

// Get products by category
export const getProductsByCategory = (category) => {
    if (category === 'all') return products
    return products.filter(product => product.category === category)
}

// Get featured products
export const getFeaturedProducts = () => {
    return products.filter(product => product.featured)
}
