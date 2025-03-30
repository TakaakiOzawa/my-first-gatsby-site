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
                    '"ü‡ÉSÉVÉbÉN"',
                    '"Yu Gothic"',
                    '"ü‡ÉSÉVÉbÉNëÃ"',
                    '"YuGothic"',
                    '"ÉqÉâÉMÉmäpÉS Pro W3"',
                    '"Hiragino Kaku Gothic Pro"',
                    '"Meiryo UI"',
                    '"ÉÅÉCÉäÉI"',
                    'Meiryo',
                    '"ÇlÇr ÇoÉSÉVÉbÉN"',
                    '"MS PGothic"',
                    'sans-serif',
                ],
            },
        },
    },
    plugins: [
        require('daisyui'),
        require("@tailwindcss/typography"),
    ],
}