/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './.storybook/**/*.{vue,js,ts,jsx,tsx}', 
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)', 
  ],
  safelist : [
    't-text-orange',
    't-text-inline-green',
  ],
  prefix: 't-',
  corePlugins: {
    preflight: false,
  },
  theme: {
    fontFamily: {
      'title': ['Poppins', 'Sans Serif'],
      'body': ['Poppins', 'Sans Serif']
    },
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    fontSize: {
      'titlelg': '2.5rem',
      'titlemd': '1.875rem',
      'titlexs': '1.25rem',
      'xxxs': '.25rem',
      'xxs': '.5rem',
      '2xs': '0.625rem',
      'xs': '.75rem',
      'sm': '0.8125rem',
      'tiny': '.8125rem',
      'md': '.875rem',
      'base': '0.9375rem',
      'l': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '2.25xl' : '1.625rem',
      '3xl': '1.875rem',
      '3.3xl': '2rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
      '8xl': '6rem',
      '9xl': '7rem',
      'header-title': 'clamp(1.875rem, 1.6071rem + 1.1905vw, 2.5rem)',
      'header-subtitle': 'clamp(1.25rem, 1.0893rem + 0.7143vw, 1.625rem)',
      '49': '49px'
    },
    borderStyle: {
      default: 'solid', // Set 'solid' as the default border style
    },
    borderColor: theme => ({
      default: '#ddd',
      ...theme('colors'),
      'grey-400': '#aaa',
      'grey-200': '#ddd',
      'grey-100': '#eee',
      'grey-50': '#E4E4E4',
      'secondary': '#ffed4a',
      'danger': '#e3342f',
    }),
    extend: {
      borderRadius: {
        'm' : '0.25rem',
        '4xl' : '28px'
      },
      minHeight: {
        '1em': '1em',
        '2rem': '2rem',
        '8rem': '8rem'
      },
      minWidth: {
        'xs': '22.5rem'
      },
      maxWidth: {
        'xxs': '12rem',
        '3xs': '16.25rem',
        '2xs': '17.5rem',
        's': '22.5rem',
        '26.25': '26.25rem',
        '30': '30rem',
        '500px': '500px',
        '4.5xl': '60rem',
        '7xl': '73rem',
        '8xl': '75rem',
        '640': '640px',
      },
      height: {
        '18': '4.5rem',
      },
      width: {
        'auto': 'auto',
        '3rem': '3rem',
        'full-scrollbar': 'calc(100% + 1rem)',
        '470': '470px',
        '550': '550px',
      },
      lineHeight: {
        'relaxer': '1.75rem',
        'relaxed-2': '1.8rem',
        'heading': '1.3',
        'kp-heading': '2'
      },
      gridTemplateColumns: {
        '1-auto': '1fr auto',
        'auto-1': 'auto 1fr',
        '8': 'repeat(1fr, 8)',
        '3-auto': 'repeat(3, auto)',
        '4-auto': 'repeat(4, auto)',
      },
      gridTemplateRows: {
        '1-auto': '1fr auto',
        'auto-1': 'auto 1fr'
      },
      colors: {
        primary: '#FF385C',
        'primary-light': '#FF607D',
        'primary-dark': '#D9304E',
        blue: '#4c6ef5',
        'blue-green': '#2b9eb3',
        secondary: '#25315A',
        'secondary-light': '#E9EAEE',
        dark: '#434343',
        light: '#f9f8fc',
        white: '#fff',
        green: '#2fca87',
        'dark-green': '#2CA58D',
        'inline-green': '#26A956',
        'bright-green': '#90c40e',
        red: '#EE2B3B',
        orange: '#EA580C',
        yellow: '#FFCC3D',
        purple: '#9C68FF',
        'grey-800': '#444',
        'grey-600': '#777',
        'grey-400': '#AAA',
        'grey-200': '#ddd',
        'grey-50': '#f8f8f8',
        'slate-700': '#B7C1D2',
        'slate-500': '#E9ECF1',
        'slate-100': '#F6F8F9',
        'lgrey': '#F9F8FC',
        'mgrey': '#edeeef',
        'dgrey': '#c7c9d1',
        'kp': '#6F73D2',
        'kp-5': 'rgba(111, 115, 210, 0.05)',
        'kp-10': 'rgba(111, 115, 210, 0.10)',
        'transparent': 'transparent',
      },
      backgroundImage: {
        'gradient-secondary-diagonal': 'linear-gradient(246deg, #25315A 0%, #25315A 63%, #2D3A6A 63%, #2D3A6A 100%)',
        'gradient-secondary-diagonal-reversed': 'linear-gradient(-246deg, #2D3A6A 0%, #2D3A6A 63%, #25315A 63%, #25315A 100%)',
        'gradient-kp': 'linear-gradient(180deg, #6F73D2 0%, rgba(111, 115, 210, 0) 100%)',
        'gradient-kp-10': 'linear-gradient(180deg, #6F73D210 0%, rgba(111, 115, 210, 0) 100%)',
      },
      zIndex: {
        '-10': '-10',
        '1000': '1000',
        '1100': '1100',
        '1600': '1600'
      },
      boxShadow: {
        'fixed-bar': '0 0 12px rgb(0 0 0 / 15%)',
        'bottom-bar': '0 6px 12px rgb(0 0 0 / 15%)',
        '--y-md': '0 -4px 6px -1px rgba(0, 0, 0, 0.1)',
        'swiper-card': '0px 2px 8px rgba(0, 0, 0, 0.2)',
        'hp': '0px 2px 8px rgba(0, 0, 0, 0.2)',
        'hp-soft-xs': '0px 4px 16px rgba(0, 0, 0, 0.05), 0px 8px 28px rgba(0, 0, 0, 0.05)',
        'hp-soft': '0px 4px 16px rgba(0, 0, 0, 0.05), 0px 8px 32px rgba(0, 0, 0, 0.05)',
        'hp-soft-hover': '0px 4px 12px rgba(0, 0, 0, 0.1), 0px 8px 28px rgba(0, 0, 0, 0.1)',
        'swiper-card-hover': '0px 4px 10px rgba(0, 0, 0, 0.3)',
        'swiper-card-h': '0px 4px 10px rgba(0, 0, 0, 0.3)',
        'widget': '0px 4px 4px rgba(0, 0, 0, 0.15)',
        'hp-s': 'rgba(0,0,0, 0.1) 0px 0px 16px',
        'hp-s-hover': 'rgba(0,0,0, 0.175) 0px 0px 16px',
        'hp-m': '0px 4px 16px rgba(0, 0, 0, 0.05), 0px 8px 32px rgba(0, 0, 0, 0.05)',
        'hp-m-hover': '0px 4px 12px rgba(0, 0, 0, 0.1), 0px 8px 28px rgba(0, 0, 0, 0.1)'
      },
      dropShadow: {
        'hp': '0 2px 8px rgba(0, 0, 0, 0.2)',
        'hp-soft': '0px 4px 16px rgba(0, 0, 0, 0.05)'
      },
      gridAutoColumns: {
        '2fr': 'minmax(0, 2fr)',
        '3fr': 'minmax(0, 3fr)',
        '4fr': 'minmax(0, 4fr)',
        '5fr': 'minmax(0, 5fr)',
      },
      margin: {
        '15': '3.75rem',
        '18': '4.5rem',
        '20': '5rem',
        '24': '6rem',
        '28': '7rem',
        '32': '8rem',
        '48': '9rem'
      },
      padding: {
        '18': '4.5rem',
        '20': '5rem',
        '24': '6rem',
        '26': '6.5rem',
        '28': '7rem',
        '30': '7.5rem',
        '32': '8rem',
        '40': '9rem',
        '44': '10rem',
        '48': '9rem'
      },
      gap: {
        '7': '7rem',
        '56': '14rem'
      },
      translate: {
        '1/2': '50%'
      },
      aspect: {
        'video': '16 / 9',
        'square': '1 / 1'
      },
      screens: {
        'l': '992px',
        'xl': '1200px',
      },
      justifyItems: {
        'between': 'space-between'
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-in-right': 'slideInRight 0.4s ease-out forwards',
        'slide-in-bottom': 'slideInBottom 0.4s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(2rem)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInBottom: {
          '0%': { transform: 'translateY(2rem)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['even', 'odd'],
      textColor: ['hover', 'group-hover'],
    }
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
