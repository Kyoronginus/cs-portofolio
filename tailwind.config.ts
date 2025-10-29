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
          'repeating-linear-gradient(to bottom,theme(colors.white) 0px,theme(colors.white) 2px,transparent 2px,transparent 4px)',
      },
    },
  },
  plugins: [],
};
export default config;