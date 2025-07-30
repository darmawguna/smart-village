import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
import preset from "./vendor/filament/support/tailwind.config.preset";

/** @type {import('tailwindcss').Config} */
export default {
    preset: [preset],
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
        "./app/Filament/**/*.php",
        "./resources/views/filament/**/*.blade.php",
        "./vendor/filament/**/*.blade.php",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                color1: "#004B23", // Contoh warna custom
                color2: "#006400",
                color3: "#007200",
                color4: "#008000",
                color5: "#38B000",
                color6: "#70E000",
                color7: "#9EF01A",
                color8: "#CCFF33",
            },
            backgroundImage: {
                "img1": "url('/assets/images/background1.jpg')",
                "bg-video": "url('/assets/videos/pengejaran.mp4')",
            },
            screens: {
                ssm: { max: '550px' },
                sm: { max: '715px' },  // Semua ukuran <= 639px
                md: { max: '850px' },  // Semua ukuran <= 767px
                lg: { max: '1023px' }, // Semua ukuran <= 1023px
                xl: { max: '1279px' }, // Semua ukuran <= 1279px
              },
        },
    },

    plugins: [forms],
};
