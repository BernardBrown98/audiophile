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
                    200: 'rgba(216,125,74,1)',
                },

                offBlack: {
                    100: '#101010',
                    200: '#191919',
                },
                offWhite: {
                    100: '#F1F1F1',
                    200: '#FAFAFA',
                    300: '#F1F1F1',
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
                subHeader: [
                    '28px',
                    {
                        lineHeight: '38px',
                        letterSpacing: '2px',
                        fontWeight: '700',
                    },
                ],
                tabletSubHeader: [
                    '40px',
                    {
                        lineHeight: '44px',
                        letterSpacing: '1.429px',
                        fontWeight: '700',
                    },
                ],
                price: [
                    '18px',
                    {
                        lineHeight: '25px',
                        letterSpacing: '1.286px',
                        fontWeight: '700',
                    },
                ],
                mobileSubheader: [
                    '24px',
                    {
                        lineHeight: '36px',
                        letterSpacing: '0.875px',
                        fontWeight: '700',
                    },
                ],
                desktopSubheader: [
                    '32px',
                    {
                        lineHeight: '36px',
                        letterSpacing: '1.143px',
                        fontWeight: '700',
                    },
                ],
                recommendation: [
                    '24px',
                    {
                        lineHeight: '33px',
                        letterSpacing: '1.714px',
                        fontWeight: '700',
                    },
                ],
            },
        },
        variants: {
            fill: ['hover', 'focus'],
        },
    },
    plugins: [],
}
