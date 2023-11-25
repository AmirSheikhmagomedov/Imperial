import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        'main-blue': '#007AFF',
        'blue-hover': '#005EC5',
      },
      colors: {
        'blue-text': '#007AFF',
      },
      borderColor: {
        'grey-border-color': '#BABABA',
      },
    },
    container: {
      center: true,
      padding: '20px',
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
}
export default config
