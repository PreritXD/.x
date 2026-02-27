// Tailwind CSS Configuration for DEEPALI Premium Saree Brand
/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            // DEEPALI Brand Colors - Luxury Indian Heritage Palette
            colors: {
                // Primary Brand Colors
                'rani-pink': {
                    DEFAULT: '#E91E63',
                    50: '#FCE4EC',
                    100: '#F8BBD0',
                    200: '#F48FB1',
                    300: '#F06292',
                    400: '#EC407A',
                    500: '#E91E63',
                    600: '#D81B60',
                    700: '#C2185B',
                    800: '#AD1457',
                    900: '#880E4F',
                },
                'saffron': {
                    DEFAULT: '#FF6F00',
                    50: '#FFF3E0',
                    100: '#FFE0B2',
                    200: '#FFCC80',
                    300: '#FFB74D',
                    400: '#FFA726',
                    500: '#FF9800',
                    600: '#FB8C00',
                    700: '#F57C00',
                    800: '#EF6C00',
                    900: '#E65100',
                },
                'teal': {
                    DEFAULT: '#00897B',
                    50: '#E0F2F1',
                    100: '#B2DFDB',
                    200: '#80CBC4',
                    300: '#4DB6AC',
                    400: '#26A69A',
                    500: '#009688',
                    600: '#00897B',
                    700: '#00796B',
                    800: '#00695C',
                    900: '#004D40',
                },
                'gold': {
                    DEFAULT: '#FFD700',
                    50: '#FFFEF7',
                    100: '#FFFAEB',
                    200: '#FFF5D6',
                    300: '#FFEDB3',
                    400: '#FFE380',
                    500: '#FFD700',
                    600: '#E6C200',
                    700: '#CCAD00',
                    800: '#B39900',
                    900: '#998500',
                },
                'slate': {
                    DEFAULT: '#64748B',
                    50: '#F8FAFC',
                    100: '#F1F5F9',
                    200: '#E2E8F0',
                    300: '#CBD5E1',
                    400: '#94A3B8',
                    500: '#64748B',
                    600: '#475569',
                    700: '#334155',
                    800: '#1E293B',
                    900: '#0F172A',
                },
            },
            // Premium Typography
            fontFamily: {
                'display': ['Anton SC', 'sans-serif'], // For DEEPALI brand name
                'sans': ['Montserrat', 'system-ui', 'sans-serif'], // For body text
            },
            // Custom Animations
            animation: {
                'fade-in': 'fadeIn 0.6s ease-in-out',
                'slide-up': 'slideUp 0.6s ease-out',
                'slide-down': 'slideDown 0.6s ease-out',
                'zoom-in': 'zoomIn 0.4s ease-out',
                'float': 'float 3s ease-in-out infinite',
                'shimmer': 'shimmer 2s linear infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                slideDown: {
                    '0%': { transform: 'translateY(-20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                zoomIn: {
                    '0%': { transform: 'scale(0.95)', opacity: '0' },
                    '100%': { transform: 'scale(1)', opacity: '1' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                shimmer: {
                    '0%': { backgroundPosition: '-1000px 0' },
                    '100%': { backgroundPosition: '1000px 0' },
                },
            },
            // Custom Spacing for luxury feel
            spacing: {
                '128': '32rem',
                '144': '36rem',
            },
            // Custom Border Radius
            borderRadius: {
                '4xl': '2rem',
            },
        },
    },
    plugins: [],
}
