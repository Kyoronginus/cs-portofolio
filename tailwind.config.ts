import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        // デフォルトで入っているグラデーション
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',

        // ★私たちが追加した縞模様
        'scanline-white':
          "bg-[repeating-linear-gradient(135deg,#333333_0px,#333333_2px,transparent_2px,transparent_4px)]",
        'header-texture': "url('/images/header_texture.png')",
      },
    },
  },
  plugins: [],
};
export default config;
