export const allProducts = [
  {
    id: 1,
    name: 'Business Cards',
    description: 'High-quality, full-color business cards available in various finishes. Make a lasting first impression.',
    imageUrl: 'https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg?auto=compress&cs=tinysrgb&w=600',
    productImage: '/images/business-card-sample.png',
    options: {
      sizes: [
        { value: 'standard', label: 'Standard (2" x 3.5")' },
        { value: 'square', label: 'Square (2.5" x 2.5")' },
      ],
      papers: [
        { value: 'gloss', label: '14 pt. Gloss Cover' },
        { value: 'matte', label: '16 pt. Premium Matte' },
      ],
      quantities: [100, 250, 500],
    },
    pricing: {
      basePrices: { 100: 25, 250: 50, 500: 80 },
      multipliers: {
        sizes: { standard: 1, square: 1.2 },
        papers: { gloss: 1, matte: 1.5 },
      },
    },
  },
  {
    id: 2,
    name: 'Postcards & Flyers',
    description: 'Perfect for promotions, invitations, and mailers. Vibrant printing on durable cardstock.',
    imageUrl: 'https://images.pexels.com/photos/5926393/pexels-photo-5926393.jpeg?auto=compress&cs=tinysrgb&w=600',
    productImage: '/images/flyer-sample.png',
    options: {
      sizes: [
        { value: '4x6', label: '4" x 6"' },
        { value: '5x7', label: '5" x 7"' },
      ],
      papers: [
        { value: '14pt', label: '14 pt. Cardstock' },
        { value: '100lb', label: '100 lb. Gloss Book' },
      ],
      quantities: [50, 100, 200],
    },
    pricing: {
      basePrices: { 50: 30, 100: 55, 200: 90 },
      multipliers: {
        sizes: { '4x6': 1, '5x7': 1.3 },
        papers: { '14pt': 1, '100lb': 0.9 },
      },
    },
  },
  {
    id: 3,
    name: 'Custom T-Shirts',
    description: 'High-quality screen printing on comfortable, durable 100% cotton t-shirts.',
    imageUrl: 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=600',
    productImage: '/images/tshirt-sample.png',
    options: {
      sizes: [
        { value: 's', label: 'Small' },
        { value: 'm', label: 'Medium' },
        { value: 'l', label: 'Large' },
        { value: 'xl', label: 'X-Large' },
      ],
      colors: [
        { value: 'white', label: 'White' },
        { value: 'black', label: 'Black' },
        { value: 'blue', label: 'Royal Blue' },
      ],
      quantities: [1, 5, 10],
    },
    pricing: {
      basePrices: { 1: 20, 5: 90, 10: 150 },
      multipliers: {
        sizes: { s: 1, m: 1, l: 1, xl: 1.1 },
        colors: { white: 1, black: 1.1, blue: 1.1 },
      },
    },
  },
  {
    id: 4,
    name: 'Stickers & Labels',
    description: 'Durable, waterproof vinyl stickers in any shape and size. Perfect for branding and fun.',
    imageUrl: 'https://images.pexels.com/photos/57690/pexels-photo-57690.jpeg?auto=compress&cs=tinysrgb&w=600',
    productImage: '/images/sticker-sample.png',
    options: {
      shapes: [
        { value: 'circle', label: 'Circle' },
        { value: 'square', label: 'Square' },
        { value: 'custom', label: 'Custom Die-Cut' },
      ],
      finishes: [
        { value: 'glossy', label: 'Glossy' },
        { value: 'matte', label: 'Matte' },
      ],
      quantities: [50, 100, 250],
    },
    pricing: {
      basePrices: { 50: 22, 100: 40, 250: 75 },
      multipliers: {
        shapes: { circle: 1, square: 1, custom: 1.4 },
        finishes: { glossy: 1, matte: 1.1 },
      },
    },
  },
];