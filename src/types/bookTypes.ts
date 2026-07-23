export interface Book {
  id: number
  slug: string
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

// Helper function to create slug from title
export const createSlug = (title: string): string => {
  return title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "") // Remove accents
    .replace(/[^\w\s-]/g, "") // Remove special chars except spaces and hyphens
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/-+/g, "-") // Replace multiple hyphens with single
    .trim()
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
