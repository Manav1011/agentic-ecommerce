// Product interface
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  reviews: Review[];
  inStock: boolean;
  featured?: boolean;
}

// Review interface
export interface Review {
  id: string;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

// Category interface
export interface Category {
  id: string;
  name: string;
  description: string;
}

// Filter options interface
export interface FilterOptions {
  category: string;
  minPrice: number;
  maxPrice: number;
  minRating: number;
  searchQuery: string;
}