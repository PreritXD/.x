// About Page - DEEPALI's Story and Heritage
import { motion } from 'framer-motion'

const About = () => {
    const values = [
        {
            title: 'Authenticity',
            description: 'Every saree is 100% handwoven by skilled artisans using traditional techniques passed down through generations.',
            icon: '🎨'
        },
        {
            title: 'Quality',
            description: 'We use only the finest silk and materials, ensuring each piece meets our exacting standards of excellence.',
            icon: '⭐'
        },
        {
            title: 'Sustainability',
            description: 'Supporting local artisans and eco-friendly practices to preserve both craft and environment.',
            icon: '🌿'
        },
        {
            title: 'Heritage',
            description: 'Celebrating and preserving the rich cultural legacy of Varanasi\'s legendary weaving tradition.',
            icon: '🏛️'
        }
    ]

    const timeline = [
        {
            year: '1975',
            title: 'The Beginning',
            description: 'Founded by Shyam Das Gujrati in the heart of Varanasi.'
        },
        {
            year: '1990',
            title: 'Growing Legacy',
            description: 'Expanded to work with dealers from Ahemdabad, Mumbai, Delhi, and focusing on preserving traditional Banarasi weaving techniques.'
        },
        {
            year: '2010',
            title: 'Modern Vision',
            description: 'Launched DEEPALI brand to bring Varanasi\'s heritage to the global stage with contemporary designs.'
        },
        {
            year: '2025',
            title: 'Today',
            description: 'Supporting 200+ artisan families, shipping worldwide, and setting new standards in premium handloom sarees.'
        }
    ]

    return (
        <div className="page-transition">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=1920&q=80"
                        alt="DEEPALI Heritage"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10 text-center px-4"
                >
                    <h1 className="heading-xl text-white mb-6">Our Story</h1>
                    <p className="text-xl text-white/90 max-w-2xl mx-auto">
                        A journey of passion, tradition, and timeless elegance
                    </p>
                </motion.div>
            </section>

            {/* Mission Section */}
            <section className="section-container">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="heading-lg mb-6">Preserving Heritage, Crafting Dreams</h2>
                        <p className="text-lg text-slate-700 leading-relaxed mb-6">
                            DEEPALI was born from a simple yet powerful vision: to preserve the magnificent art of
                            Banarasi weaving while empowering the artisan communities of Varanasi. For over five decades,
                            we have been the bridge between ancient craftsmanship and modern elegance.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Each DEEPALI saree is a labor of love, taking 30-45 days to complete. Our artisans pour
                            their heart and soul into every thread, creating not just garments, but heirlooms that
                            carry forward India's rich textile legacy.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Values Section */}
            <section className="bg-gradient-to-br from-slate-50 to-slate-100 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="heading-lg mb-4">Our Values</h2>
                        <p className="text-lg text-slate-600">The principles that guide everything we do</p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -8 }}
                                className="bg-white rounded-2xl p-8 shadow-lg text-center"
                            >
                                <div className="text-5xl mb-4">{value.icon}</div>
                                <h3 className="text-xl font-display font-semibold mb-3 text-slate-900">
                                    {value.title}
                                </h3>
                                <p className="text-slate-600 leading-relaxed">
                                    {value.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="section-container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="heading-lg mb-4">Our Journey</h2>
                    <p className="text-lg text-slate-600">Five decades of weaving excellence</p>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    {timeline.map((item, index) => (
                        <motion.div
                            key={item.year}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative pl-8 pb-12 border-l-4 border-rani-pink last:pb-0"
                        >
                            <div className="absolute -left-4 top-0 w-8 h-8 bg-rani-pink rounded-full flex items-center justify-center">
                                <div className="w-3 h-3 bg-white rounded-full" />
                            </div>
                            <div className="bg-white rounded-xl p-6 shadow-lg ml-8">
                                <span className="inline-block bg-gradient-to-r from-rani-pink to-saffron text-white px-4 py-1 rounded-full text-sm font-semibold mb-3">
                                    {item.year}
                                </span>
                                <h3 className="text-2xl font-display font-semibold mb-2 text-slate-900">
                                    {item.title}
                                </h3>
                                <p className="text-slate-600 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Artisan Section */}
            <section className="bg-gradient-to-r from-rani-pink via-saffron to-teal py-20">
                <div className="max-w-4xl mx-auto text-center px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="heading-lg text-white mb-6">
                            Supporting 200+ Artisan Families
                        </h2>
                        <p className="text-xl text-white/90 mb-8">
                            Every purchase directly supports the livelihoods of skilled weavers and their families,
                            ensuring this beautiful craft continues for generations to come.
                        </p>
                        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
                            <div className="text-center">
                                <p className="text-5xl font-display font-bold text-white mb-2">200+</p>
                                <p className="text-white/90">Artisan Families</p>
                            </div>
                            <div className="text-center">
                                <p className="text-5xl font-display font-bold text-white mb-2">50+</p>
                                <p className="text-white/90">Years Legacy</p>
                            </div>
                            <div className="text-center">
                                <p className="text-5xl font-display font-bold text-white mb-2">45</p>
                                <p className="text-white/90">Days per Saree</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

export default About
