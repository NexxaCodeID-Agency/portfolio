

// Define interface biar TS nggak pusing
export interface Product {
  title: string;
  link: string;
  thumbnail: string[]; // Karena lu pake logic carousel, ini harus array string
  location?: string;   // Tambahan buat Card di page "Recent Work" nanti
  dev?: string;
}
export const products: Product[] = [
  {
    title: "AikoCare",
    link: "https://aikocare.vercel.app/",
    thumbnail: ["/aikocare.png"], // Gue bikin array string biar aman
    location: "Indonesia",
    dev: "Fang Xiao",
  },
  {
    title: "ThunderAi",
    link: "https://chat-ai-sigma.vercel.app/",
    thumbnail: ["/thunderAi.png"],
    location: "Indonesia",
    dev: "Fang Xiao",
  },
  {
    title: "YayasanNivara",
    link: "https://yayasan-nivara-indonesia.vercel.app/",
    thumbnail: ["/yayasannivara.png"],
    location: "Indonesia",
    dev: "Fang Xiao",
  },
  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail: [
      "https://www.aceternity.com/images/products/thumbnails/new/editorially.png",
    ],
    location: "Global",
    dev: "NexxaCodeTim",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail: [
      "https://www.aceternity.com/images/products/thumbnails/new/editrix.png",
    ],
    location: "Global",
    dev: "NexxaCodeTim",
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail: [
      "https://www.aceternity.com/images/products/thumbnails/new/smartbridge.png",
    ],
    location: "Global",
    dev: "NexxaCodeTim",
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail: [
      "https://www.aceternity.com/images/products/thumbnails/new/renderwork.png",
    ],
    location: "Global",
    dev: "NexxaCodeTim",
  },

  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail: [
      "https://www.aceternity.com/images/products/thumbnails/new/cremedigital.png",
    ],
    location: "Global",
    dev: "NexxaCodeTim",
  },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail: [
      "https://www.aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
    ],
    location: "Global",
    dev: "NexxaCodeTim",
  },
];