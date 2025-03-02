import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ShoppingCart, Heart, Share2, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../contexts/CartContext';
import ReviewList from '../components/ReviewList';
import ReviewForm from '../components/ReviewForm';
import ProductCard from '../components/ProductCard';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const [product, setProduct] = useState(products.find((p) => p.id === id));
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  
  // Get related products (same category)
  const relatedProducts = products
    .filter((p) => p.category === product?.category && p.id !== product?.id)
    .slice(0, 4);

  useEffect(() => {
    // If product not found, redirect to products page
    if (!product) {
      navigate('/products');
    }
    
    // Update product when id changes
    setProduct(products.find((p) => p.id === id));
    
    // Reset quantity when product changes
    setQuantity(1);
    
    // Scroll to top when product changes
    window.scrollTo(0, 0);
  }, [id, navigate, product]);

  if (!product) {
    return null; // Will redirect in useEffect
  }

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (value > 0) {
      setQuantity(value);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    // Add product to cart multiple times based on quantity
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
  };

  const handleReviewSubmit = (review: { rating: number; comment: string }) => {
    // In a real app, this would send the review to a backend
    console.log('Review submitted:', review);
    
    // For demo purposes, we'll just show an alert
    alert('Thank you for your review! In a real app, this would be saved to a database.');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumbs */}
      <nav className="flex mb-6 text-sm text-gray-500">
        <a href="/" className="hover:text-blue-600">Home</a>
        <span className="mx-2">/</span>
        <a href="/products" className="hover:text-blue-600">Products</a>
        <span className="mx-2">/</span>
        <a href={`/products?category=${product.category.toLowerCase()}`} className="hover:text-blue-600">
          {product.category}
        </a>
        <span className="mx-2">/</span>
        <span className="text-gray-700">{product.name}</span>
      </nav>

      {/* Product details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Product image */}
        <div className="bg-white rounded-lg overflow-hidden shadow-md">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Product info */}
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">{product.name}</h1>
          
          {/* Rating */}
          <div className="flex items-center mb-4">
            <div className="flex items-center text-yellow-500 mr-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'}
                  className={i < Math.floor(product.rating) ? 'text-yellow-500' : 'text-gray-300'}
                />
              ))}
            </div>
            <span className="text-gray-600">
              {product.rating.toFixed(1)} ({product.reviews.length} reviews)
            </span>
          </div>
          
          {/* Price */}
          <div className="text-2xl font-bold text-blue-600 mb-4">
            ${product.price.toFixed(2)}
          </div>
          
          {/* Short description */}
          <p className="text-gray-600 mb-6">{product.description}</p>
          
          {/* Quantity selector */}
          <div className="mb-6">
            <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-2">
              Quantity
            </label>
            <div className="flex">
              <button
                onClick={decrementQuantity}
                className="bg-gray-200 text-gray-600 px-3 py-2 rounded-l-md hover:bg-gray-300"
              >
                <ChevronLeft size={18} />
              </button>
              <input
                type="number"
                id="quantity"
                name="quantity"
                min="1"
                value={quantity}
                onChange={handleQuantityChange}
                className="w-16 text-center border-t border-b border-gray-300 py-2"
              />
              <button
                onClick={incrementQuantity}
                className="bg-gray-200 text-gray-600 px-3 py-2 rounded-r-md hover:bg-gray-300"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
          
          {/* Add to cart button */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <button
              onClick={handleAddToCart}
              className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center"
            >
              <ShoppingCart size={20} className="mr-2" />
              Add to Cart
            </button>
            <button className="sm:flex-none bg-gray-200 text-gray-700 py-3 px-6 rounded-md hover:bg-gray-300 transition-colors">
              <Heart size={20} />
            </button>
            <button className="sm:flex-none bg-gray-200 text-gray-700 py-3 px-6 rounded-md hover:bg-gray-300 transition-colors">
              <Share2 size={20} />
            </button>
          </div>
          
          {/* Stock status */}
          <div className="mb-6">
            <span className="text-sm font-medium text-gray-700">Availability: </span>
            {product.inStock ? (
              <span className="text-green-600">In Stock</span>
            ) : (
              <span className="text-red-600">Out of Stock</span>
            )}
          </div>
          
          {/* Category */}
          <div>
            <span className="text-sm font-medium text-gray-700">Category: </span>
            <a
              href={`/products?category=${product.category.toLowerCase()}`}
              className="text-blue-600 hover:underline"
            >
              {product.category}
            </a>
          </div>
        </div>
      </div>

      {/* Tabs for description and reviews */}
      <div className="mb-12">
        <div className="border-b border-gray-200">
          <nav className="flex -mb-px">
            <button
              onClick={() => setActiveTab('description')}
              className={`py-4 px-6 font-medium text-sm border-b-2 ${
                activeTab === 'description'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Description
            </button>
            <button
              onClick={() => setActiveTab('reviews')}
              className={`py-4 px-6 font-medium text-sm border-b-2 ${
                activeTab === 'reviews'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Reviews ({product.reviews.length})
            </button>
          </nav>
        </div>
        
        <div className="py-6">
          {activeTab === 'description' ? (
            <div className="prose max-w-none">
              <p className="text-gray-700">{product.description}</p>
              {/* Additional description content would go here */}
              <p className="text-gray-700 mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <ul className="list-disc pl-5 mt-4 text-gray-700">
                <li>High-quality materials</li>
                <li>Durable construction</li>
                <li>Easy to use</li>
                <li>1-year warranty</li>
              </ul>
            </div>
          ) : (
            <div>
              <ReviewForm productId={product.id} onSubmit={handleReviewSubmit} />
              <ReviewList reviews={product.reviews} />
            </div>
          )}
        </div>
      </div>

      {/* Related products */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Related Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;