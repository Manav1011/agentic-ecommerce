import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Star } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../contexts/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
      <Link to={`/products/${product.id}`} className="block">
        <div className="relative pb-[56.25%]">
          <img
            src={product.image}
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover"
          />
          {product.featured && (
            <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">
              Featured
            </span>
          )}
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-1 line-clamp-1">
            {product.name}
          </h3>
          <div className="flex items-center mb-2">
            <div className="flex items-center text-yellow-500 mr-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'}
                  className={i < Math.floor(product.rating) ? 'text-yellow-500' : 'text-gray-300'}
                />
              ))}
            </div>
            <span className="text-sm text-gray-600">({product.reviews.length})</span>
          </div>
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
            {product.description}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-blue-600 font-bold">${product.price.toFixed(2)}</span>
            <button
              onClick={handleAddToCart}
              className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors"
              aria-label="Add to cart"
            >
              <ShoppingCart size={18} />
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;