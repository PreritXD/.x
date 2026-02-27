// Testimonials Section Component
import { motion } from 'framer-motion'
import { useState } from 'react'

const Testimonials = () => {
    const [activeIndex, setActiveIndex] = useState(0)

    const testimonials = [
        {
            name: 'Priya Sharma',
            location: 'Mumbai',
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
            rating: 5,
            text: 'The Banarasi silk saree I purchased from DEEPALI is absolutely stunning! The craftsmanship is impeccable, and I received so many compliments at my sister\'s wedding. Worth every penny!'
        },
        {
            name: 'Anjali Reddy',
            location: 'Hyderabad',
            image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
            rating: 5,
            text: 'DEEPALI has become my go-to for premium sarees. The quality is exceptional, and their customer service is outstanding. The handloom collection is my favorite - each piece is unique and beautiful.'
        },
        {
            name: 'Meera Patel',
            location: 'Ahmedabad',
            image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&q=80',
            rating: 5,
            text: 'I love how DEEPALI preserves traditional weaving techniques while creating contemporary designs. The sarees are not just clothing - they\'re wearable art. Highly recommend!'
        }
    ]

    return (
        <div className="section-container bg-gradient-to-br from-slate-50 to-slate-100">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
            >
                <h2 className="heading-lg mb-4">What Our Customers Say</h2>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                    Join thousands of satisfied customers who trust DEEPALI for their special occasions
                </p>
            </motion.div>

            {/* Testimonial Cards */}
            <div className="max-w-4xl mx-auto">
                <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-3xl shadow-2xl p-8 md:p-12"
                >
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        {/* Customer Image */}
                        <motion.img
                            whileHover={{ scale: 1.05 }}
                            src={testimonials[activeIndex].image}
                            alt={testimonials[activeIndex].name}
                            className="w-24 h-24 rounded-full object-cover ring-4 ring-rani-pink/20"
                        />

                        {/* Testimonial Content */}
                        <div className="flex-1 text-center md:text-left">
                            {/* Star Rating */}
                            <div className="flex justify-center md:justify-start gap-1 mb-4">
                                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                                    <motion.svg
                                        key={i}
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: i * 0.1 }}
                                        className="w-6 h-6 text-gold fill-current"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                    </motion.svg>
                                ))}
                            </div>

                            {/* Testimonial Text */}
                            <p className="text-lg text-slate-700 mb-6 italic leading-relaxed">
                                "{testimonials[activeIndex].text}"
                            </p>

                            {/* Customer Info */}
                            <div>
                                <p className="font-display font-semibold text-xl text-slate-900">
                                    {testimonials[activeIndex].name}
                                </p>
                                <p className="text-slate-600">{testimonials[activeIndex].location}</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Navigation Dots */}
                <div className="flex justify-center gap-3 mt-8">
                    {testimonials.map((_, index) => (
                        <motion.button
                            key={index}
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setActiveIndex(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === activeIndex
                                ? 'bg-rani-pink w-8'
                                : 'bg-slate-300 hover:bg-slate-400'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Testimonials
