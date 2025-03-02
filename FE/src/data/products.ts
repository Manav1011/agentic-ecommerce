import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    description: 'Experience crystal-clear sound with our premium wireless headphones. Features noise cancellation, 30-hour battery life, and comfortable over-ear design.',
    price: 249.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    category: 'Electronics',
    rating: 4.8,
    reviews: [
      {
        id: 'r1',
        userId: 'u1',
        userName: 'Alex Johnson',
        rating: 5,
        comment: 'Best headphones I\'ve ever owned! The sound quality is amazing and they\'re so comfortable.',
        date: '2023-05-15'
      },
      {
        id: 'r2',
        userId: 'u2',
        userName: 'Sarah Miller',
        rating: 4.5,
        comment: 'Great sound and battery life. The noise cancellation is excellent for travel.',
        date: '2023-06-02'
      }
    ],
    inStock: true,
    featured: true
  },
  {
    id: '2',
    name: 'Smart Fitness Watch',
    description: 'Track your fitness goals with our advanced smart watch. Features heart rate monitoring, GPS tracking, sleep analysis, and 7-day battery life.',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    category: 'Electronics',
    rating: 4.6,
    reviews: [
      {
        id: 'r3',
        userId: 'u3',
        userName: 'Michael Chen',
        rating: 5,
        comment: 'This watch has transformed my fitness routine. The tracking is accurate and the app is intuitive.',
        date: '2023-04-28'
      }
    ],
    inStock: true,
    featured: true
  },
  {
    id: '3',
    name: 'Ergonomic Office Chair',
    description: 'Work in comfort with our ergonomic office chair. Features adjustable height, lumbar support, breathable mesh back, and smooth-rolling casters.',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1489269637500-aa0e75768394?q=80&w=2041&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    category: 'Furniture',
    rating: 4.7,
    reviews: [
      {
        id: 'r4',
        userId: 'u4',
        userName: 'Emily Rodriguez',
        rating: 4.5,
        comment: 'Finally found a chair that doesn\'t hurt my back after long work days. Worth every penny!',
        date: '2023-03-15'
      },
      {
        id: 'r5',
        userId: 'u5',
        userName: 'David Kim',
        rating: 5,
        comment: 'Excellent quality and very comfortable for long periods of sitting.',
        date: '2023-05-22'
      }
    ],
    inStock: true
  },
  {
    id: '4',
    name: 'Professional DSLR Camera',
    description: 'Capture stunning photos with our professional DSLR camera. Features 24.2MP sensor, 4K video recording, and comes with an 18-55mm lens kit.',
    price: 899.99,
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    category: 'Electronics',
    rating: 4.9,
    reviews: [
      {
        id: 'r6',
        userId: 'u6',
        userName: 'Jessica Taylor',
        rating: 5,
        comment: 'Amazing camera for both beginners and professionals. The image quality is outstanding.',
        date: '2023-06-10'
      }
    ],
    inStock: true,
    featured: true
  },
  {
    id: '5',
    name: 'Stainless Steel Cookware Set',
    description: 'Upgrade your kitchen with our premium 10-piece stainless steel cookware set. Includes pots, pans, and lids with heat-resistant handles.',
    price: 349.99,
    image: 'https://images.unsplash.com/photo-1556909172-8c2f041fca1e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    category: 'Kitchen',
    rating: 4.7,
    reviews: [
      {
        id: 'r7',
        userId: 'u7',
        userName: 'Robert Wilson',
        rating: 4.5,
        comment: 'High-quality cookware that heats evenly. Easy to clean and looks great in my kitchen.',
        date: '2023-04-05'
      },
      {
        id: 'r8',
        userId: 'u8',
        userName: 'Lisa Martinez',
        rating: 5,
        comment: 'Worth the investment! These pots and pans will last for years.',
        date: '2023-05-30'
      }
    ],
    inStock: true
  },
  {
    id: '6',
    name: 'Leather Messenger Bag',
    description: 'Carry your essentials in style with our genuine leather messenger bag. Features multiple compartments, adjustable strap, and fits laptops up to 15 inches.',
    price: 159.99,
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    category: 'Fashion',
    rating: 4.6,
    reviews: [
      {
        id: 'r9',
        userId: 'u9',
        userName: 'Thomas Brown',
        rating: 4.5,
        comment: 'Beautiful craftsmanship and very functional. Gets better with age.',
        date: '2023-03-22'
      }
    ],
    inStock: true
  },
  {
    id: '7',
    name: 'Smart Home Security System',
    description: 'Protect your home with our comprehensive security system. Includes HD cameras, motion sensors, and smartphone integration for 24/7 monitoring.',
    price: 399.99,
    image: 'https://images.unsplash.com/photo-1528312635006-8ea0bc49ec63?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    category: 'Electronics',
    rating: 4.8,
    reviews: [
      {
        id: 'r10',
        userId: 'u10',
        userName: 'Jennifer Lee',
        rating: 5,
        comment: 'Easy to install and the app works great. Gives me peace of mind when I\'m away from home.',
        date: '2023-06-15'
      },
      {
        id: 'r11',
        userId: 'u11',
        userName: 'Daniel Clark',
        rating: 4.5,
        comment: 'Great system with clear video quality and reliable notifications.',
        date: '2023-05-18'
      }
    ],
    inStock: true,
    featured: true
  },
  {
    id: '8',
    name: 'Organic Cotton Bedding Set',
    description: 'Sleep in luxury with our 100% organic cotton bedding set. Includes duvet cover, fitted sheet, and pillowcases in a variety of colors.',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    category: 'Home',
    rating: 4.7,
    reviews: [
      {
        id: 'r12',
        userId: 'u12',
        userName: 'Sophia Garcia',
        rating: 5,
        comment: 'So soft and comfortable! The quality is excellent and they wash well.',
        date: '2023-04-12'
      }
    ],
    inStock: true
  }
];

export const categories = [
  { id: 'all', name: 'All Products', description: 'Browse all our products' },
  { id: 'electronics', name: 'Electronics', description: 'Gadgets and devices for modern living' },
  { id: 'furniture', name: 'Furniture', description: 'Stylish and functional pieces for your home' },
  { id: 'kitchen', name: 'Kitchen', description: 'Essential tools and appliances for cooking' },
  { id: 'fashion', name: 'Fashion', description: 'Trendy accessories and apparel' },
  { id: 'home', name: 'Home', description: 'Decor and essentials for comfortable living' }
];