/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        cerebri: ["CerebriSans", "sans-serif"],
      },
      backgroundImage: {
        "hero-pattern":
          "url('https://printify.com/pfh/media/clothes-mobile-Q6UN6X6P.webp')",
        "connect-store":
          "url('https://printify.com/pfh/media/stores-background-QSGENTOX.svg')",
        "store-1":
          "url('https://printify.com/pfh/media/big-commerce-EGSGKPYX.svg')",
        "store-2":
          "url('https://printify.com/pfh/media/squarespace-FIBF2RIF.svg')",
        "store-3": "url('https://printify.com/pfh/media/wix-MWZCZDTE.svg')",
        "store-4": "url('https://printify.com/pfh/media/woo-PGFAG65X.svg')",
        "store-5": "url('https://printify.com/pfh/media/etsy-MXXFYORZ.svg')",
        "store-6": "url('https://printify.com/pfh/media/shopify-3NAPXPBF.svg')",
        "store-7": "url('https://printify.com/pfh/media/presta-54F6AYUU.svg')",
        icon: "url('https://printify.com/pfh/media/printify-E3TBSF5R.svg')",
      },
    },
  },
  plugins: [],
};
