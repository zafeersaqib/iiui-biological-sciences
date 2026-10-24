/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // User-Requested Biological Greens & Earth Palette
        bio: {
          950: '#0D1F0C',        // Ultra-deep forest night (hero base, dark footer, dark canvas)
          900: '#163013',        // Deep forest shadow (solid dark header, card deep bg)
          850: '#1C3B18',        // Elevated dark surface
          800: '#23491E',        // Deep Hunter Green
          700: '#2D5724',        // Rich Foliage Dark
          600: '#3D6F28',        // Evergreen
          500: '#55883B',        // USER COLOR: Rich Forest Green (Primary Brand)
          400: '#75A857',        // Mid Foliage
          300: '#99C87B',        // Soft Green Leaf
          200: '#C1E899',        // USER COLOR: Fresh Sprout Lime (High-Impact Highlight / Accent)
          100: '#D5ECC0',        // Pastel Leaf
          50: '#E6F0DC',         // USER COLOR: Soft Pastel Sage / Pistachio Mist (Light Canvas)
          amber: '#9A6735',      // USER COLOR: Warm Earth / Amber Brown (Quranic Tagline & Accent)
          'amber-light': '#F6EFE7',
          'amber-dark': '#7A4F26',
        },
        forest: {
          50: '#E6F0DC',
          100: '#D5ECC0',
          200: '#C1E899',
          300: '#99C87B',
          400: '#75A857',
          500: '#55883B',
          600: '#3D6F28',
          700: '#2D5724',
          800: '#23491E',
          900: '#163013',
          950: '#0D1F0C',
        },
        gold: {
          50: '#FBF8F3',
          100: '#F6EFE7',
          200: '#EADBCB',
          300: '#D6BEA4',
          400: '#B89063',
          500: '#9A6735', // Warm Earth Amber
          600: '#845427',
          700: '#6D431D',
          800: '#563415',
          900: '#40260E',
        },
        sand: {
          50: '#FDFDFC',
          100: '#E6F0DC', // Soft pistachio canvas
          200: '#DDE9D0',
          300: '#D0DEC0',
          400: '#A7B995',
          500: '#7F936C',
          600: '#5F724C',
          700: '#465636',
          800: '#323E26',
          900: '#212B18',
        },
        night: {
          950: '#0D1F0C',
          900: '#163013',
          850: '#1C3B18',
          800: '#23491E',
          700: '#2D5724',
        }
      },
      fontFamily: {
        sans: ['"Work Sans"', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        serif: ['"Source Serif 4"', 'Georgia', 'serif'],
        display: ['"Work Sans"', 'system-ui', 'sans-serif'],
        editorial: ['"Source Serif 4"', 'Georgia', 'serif'],
        condensed: ['"Oswald"', 'sans-serif'],
        arabic: ['Amiri', 'Scheherazade New', 'serif'],
      },
      maxWidth: {
        '8xl': '88rem',
      },
      borderRadius: {
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        'jhu': '-10px 28px 30px 0px rgba(13, 31, 12, 0.28)',
        'jhu-lg': '-15px 35px 40px 0px rgba(13, 31, 12, 0.35)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
