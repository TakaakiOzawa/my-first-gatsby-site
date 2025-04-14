/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                custom: [
                    'Avenir',
                    'Arial',
                    '"游ゴシック"',
                    '"Yu Gothic"',
                    '"游ゴシック体"',
                    '"YuGothic"',
                    '"ヒラギノ角ゴ Pro W3"',
                    '"Hiragino Kaku Gothic Pro"',
                    '"Meiryo UI"',
                    '"メイリオ"',
                    'Meiryo',
                    '"ＭＳ Ｐゴシック"',
                    '"MS PGothic"',
                    'sans-serif',
                ],
            },
            keyframes: {
                slideDown: {
                    '0%': { opacity: '0', transform: 'translateY(-50%)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
            },
            animation: {
                slideDown: 'slideDown 0.25s ease-out forwards',
            },
        },
    },
    plugins: [
        require('daisyui'),
        require("@tailwindcss/typography"),
    ],
}