/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        fontFamily: {
            body: 'Manrope, sans-serif',
        },
        extend: {
            colors: {
                nude: {
                    100: '#FBAF85',
                    200: '#D87D4A',
                },

                offBlack: {
                    100: '#101010',
                    200: '#191919',
                },
                offWhite: {
                    100: '#F1F1F1',
                    200: '#FAFAFA',
                },
            },
            fontSize: {
                link: [
                    '13px',
                    {
                        lineHeight: '25px',
                        letterSpacing: '2px',
                        fontWeight: '700',
                    },
                ],
                p: [
                    '15px',
                    {
                        lineHeight: '25px',
                        fontWeight: '500',
                    },
                ],
                menu: [
                    '15px',
                    {
                        lineHeight: '20px',
                        letterSpacing: '1.071px',
                        fontWeight: '700',
                    },
                ],
                shop: [
                    '13px',
                    {
                        lineHeight: '18px',
                        letterSpacing: '1px',
                        fontWeight: '700',
                    },
                ],
                newProduct: [
                    '14px',
                    {
                        lineHeight: '19px',
                        letterSpacing: '10px',
                        fontWeight: '400',
                    },
                ],
                mobileHeader: [
                    '36px',
                    {
                        lineHeight: '40px',
                        letterSpacing: '1.286px',
                        fontWeight: '700',
                    },
                ],
                desktopHeader: [
                    '56px',
                    {
                        lineHeight: '58px',
                        letterSpacing: '2px',
                        fontWeight: '700',
                    },
                ],
            },
        },
    },
    plugins: [],
}
