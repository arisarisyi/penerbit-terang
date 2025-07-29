export interface Book {
  id: number
  title: string
  author: string
  coverImage: string
  description: string
  price: number
  category: string
  rating: number
  pages: number
  publishDate: string
  isFeatured: boolean
  isNewRelease: boolean
}

export type Category =
  | "Semua"
  | "Fiksi"
  | "Non-Fiksi"
  | "Sains"
  | "Teknologi"
  | "Bisnis"
  | "Sejarah"
  | "Self-Help"
