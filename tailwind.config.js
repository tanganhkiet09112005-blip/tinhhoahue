/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        hue: {
          // 1. Tím mận sâu: Nền nhấn, story section, footer
          plum: {
            DEFAULT: '#352044',
            dark: '#261432',
            deep: '#1D0D26',
            surface: '#2C1938',
          },
          // 2. Tím thương hiệu: Nút chính, điều hướng, trạng thái chọn
          purple: {
            DEFAULT: '#4B2A7B',
            hover: '#3D1F68',
            deep: '#352044',
            soft: '#EFE7F6',
            whisper: '#FAF6FD',
          },
          // 3. Giấy ngà: Nền chủ đạo toàn trang
          parchment: {
            DEFAULT: '#F6EEDD', // Giấy ngà nền chính
            light: '#FAF4E8',
            deep: '#ECE0CA',
          },
          ivory: {
            DEFAULT: '#F6EEDD',
            light: '#FAF4E8',
            deep: '#ECE0CA',
          },
          // 4. Kem sáng: Bề mặt thẻ, card, ô trưng bày
          cream: {
            DEFAULT: '#FFFCF5', // Kem sáng bề mặt
            card: '#FFFCF5',
            surface: '#FFFFFF',
          },
          // 5. Vàng đồng: Đường nét trang trí, viền ô cửa, họa tiết
          brass: {
            DEFAULT: '#AD8648', // Vàng đồng
            light: '#C7A265',
            dark: '#8C6831',
            muted: '#D4C09A',
            border: '#E0CDAB',
          },
          // 6. Nâu mực: Chữ nội dung, tiêu đề, calligraphic ink
          ink: {
            DEFAULT: '#352B29', // Nâu mực chữ chính
            heading: '#231B19',
            body: '#423735',
            muted: '#6F605D',
            light: '#9E8E8A',
          },
          // Hairline dividers và đường kẻ mảnh
          hairline: {
            DEFAULT: '#E6DBC6',
            light: '#F0E7D6',
            dark: '#D4C6AB',
          },
          // Vàng thương hiệu trên logo (giữ nguyên gốc)
          logoGold: '#F2B705',
          sale: '#9C2A20',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'Cambria', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      letterSpacing: {
        'editorial': '0.04em',
        'loose-caps': '0.12em',
      },
      boxShadow: {
        'subtle': '0 1px 3px rgba(34, 22, 43, 0.04)',
        'float': '0 12px 32px -4px rgba(34, 22, 43, 0.08)',
        'menu': '0 20px 40px -8px rgba(34, 22, 43, 0.12)',
      }
    },
  },
  plugins: [],
}
