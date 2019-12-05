
export const CATEGORY_LINKS = [
  ['Recommended', [
    'By Friends',
    'By Curators',
    'Tags',
  ]],
  ['Discovery Queues', [
    'Recommendations',
    'New Releases',
  ]],
  ['Browse Categories', [
    'Top Sellers',
    'Recently Updated',
    'New Releases',
    'Upcoming',
    'Specials',
    'Virtual Reality',
    'Steam Controller',
  ]],
  ['Browse by genre', [
    'Free to Play',
    'Early Access',
    'Action',
    'Adventure',
    'Casual',
    'Indie',
    'Massively Multiplayer',
    'Racing',
    'RPG',
    'Simulation',
    'Sports',
    'Strategy',
  ]],
  ['Recently Viewed', [
    'No Man\'s Sky',
    'Kingdoms and Castles',
  ]],
] as const;

export const NAVBAR_LINKS = [
  'Your store',
  'Game',
  'Software',
  'Hardware',
  'Videos',
  'News',
] as const;

export const HEADER_LINKS = [
  {
    path: '/',
    title: 'Store',
  },
  {
    path: '/',
    title: 'Community',
  },
  {
    path: '/',
    title: 'About',
  },
  {
    path: '/',
    title: 'Support',
  },
] as const;

export const PRODUCTS = [

] as const;

export interface ProductInfo {
  title: string
  tags: string[]
  rate: number
  votes?: number
  description: string
  // price: number
  price: [(number | string), (number | string)]
  imageUrl: string
  releaseDate: string
}