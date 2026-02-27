// Contact Page - Contact Form
import { useState } from 'react'
import { motion } from 'framer-motion'
import axios from 'axios'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })
    const [status, setStatus] = useState({ type: '', message: '' })
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        setStatus({ type: '', message: '' })

        try {
            const apiUrl = import.meta.env.VITE_API_URL || '';
            const response = await axios.post(`${apiUrl}/api/contact`, formData)
            setStatus({
                type: 'success',
                message: 'Thank you for your message! We\'ll get back to you soon.'
            })
            setFormData({ name: '', email: '', message: '' })
        } catch (error) {
            setStatus({
                type: 'error',
                message: 'Something went wrong. Please try again later.'
            })
        } finally {
            setIsSubmitting(false)
        }
    }

    const contactInfo = [
        {
            icon: '📍',
            title: 'Visit Us',
            details: ['DEEPALI Showroom', 'Varanasi, Uttar Pradesh', 'India - 221001']
        },
        {
            icon: '📞',
            title: 'Call Us',
            details: ['+91 98398 45230', '+91 98390 45230', 'Mon-Sat: 10 AM - 7 PM']
        },
        {
            icon: '✉️',
            title: 'Email Us',
            details: ['support@deepali.com', 'We reply within 24 hours']
        }
    ]

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
                        <h1 className="heading-xl mb-4">Get in Touch</h1>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Info Cards */}
            <section className="section-container">
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {contactInfo.map((info, index) => (
                        <motion.div
                            key={info.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="card-premium p-8 text-center"
                        >
                            <div className="text-5xl mb-4">{info.icon}</div>
                            <h3 className="text-xl font-display font-semibold mb-3 text-slate-900">
                                {info.title}
                            </h3>
                            {info.details.map((detail, i) => (
                                <p key={i} className="text-slate-600">
                                    {detail}
                                </p>
                            ))}
                        </motion.div>
                    ))}
                </div>

                {/* Contact Form */}
                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="card-premium p-8 md:p-12"
                    >
                        <h2 className="heading-md mb-8 text-center">Send Us a Message</h2>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Name Field */}
                            <div>
                                <label htmlFor="name" className="block text-sm font-semibold text-slate-900 mb-2">
                                    Your Name *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-rani-pink focus:outline-none transition-colors"
                                    placeholder="Enter your name"
                                />
                            </div>

                            {/* Email Field */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">
                                    Your Email *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-rani-pink focus:outline-none transition-colors"
                                    placeholder="Enter your email"
                                />
                            </div>

                            {/* Message Field */}
                            <div>
                                <label htmlFor="message" className="block text-sm font-semibold text-slate-900 mb-2">
                                    Your Message *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={6}
                                    className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-rani-pink focus:outline-none transition-colors resize-none"
                                    placeholder="Tell us how we can help you..."
                                />
                            </div>

                            {/* Status Message */}
                            {status.message && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`p-4 rounded-lg ${status.type === 'success'
                                        ? 'bg-teal/10 text-teal border border-teal/20'
                                        : 'bg-red-50 text-red-600 border border-red-200'
                                        }`}
                                >
                                    {status.message}
                                </motion.div>
                            )}

                            {/* Submit Button */}
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full py-4 rounded-lg font-semibold text-lg transition-all ${isSubmitting
                                    ? 'bg-slate-300 text-slate-500 cursor-not-allowed'
                                    : 'btn-primary'
                                    }`}
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </section>

            {/* Map Section (Placeholder) */}
            <section className="bg-slate-100 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-slate-200 rounded-2xl h-96 flex items-center justify-center">
                        <div className="text-center">
                            <div className="text-6xl mb-4">📍</div>
                            <p className="text-xl text-slate-600">DEEPALI Showroom</p>
                            <p className="text-slate-500">Varanasi, Uttar Pradesh, India</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact
