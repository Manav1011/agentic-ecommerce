import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import ProductFilter from '../components/ProductFilter';
import { products } from '../data/products';
import { FilterOptions, Product } from '../types';

const ProductsPage: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const categoryParam = queryParams.get('category');

  const [filters, setFilters] = useState<FilterOptions>({
    category: categoryParam || 'all',
    minPrice: 0,
    maxPrice: 1000,
    minRating: 0,
    searchQuery: '',
  });

  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [sortOption, setSortOption] = useState<string>('featured');

  useEffect(() => {
    // Apply filters
    let result = [...products];

    // Filter by category
    if (filters.category && filters.category !== 'all') {
      result = result.filter(
        (product) => product.category.toLowerCase() === filters.category.toLowerCase()
      );
    }

    // Filter by price range
    result = result.filter(
      (product) => product.price >= filters.minPrice && product.price <= filters.maxPrice
    );

    // Filter by rating
    result = result.filter((product) => product.rating >= filters.minRating);

    // Filter by search query
    if (filters.searchQuery) {
      const query = filters.searchQuery.toLowerCase();
      result = result.filter(
        (product) =>
          product.name.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query)
      );
    }

    // Apply sorting
    switch (sortOption) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'featured':
      default:
        // Featured products first, then sort by rating
        result.sort((a, b) => {
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          return b.rating - a.rating;
        });
        break;
    }

    setFilteredProducts(result);
  }, [filters, sortOption]);

  const handleFilterChange = (newFilters: FilterOptions) => {
    setFilters(newFilters);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(e.target.value);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Products</h1>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar with filters */}
        <div className="lg:w-1/4">
          <ProductFilter onFilterChange={handleFilterChange} initialFilters={filters} />
        </div>

        {/* Product grid */}
        <div className="lg:w-3/4">
          {/* Sort and results count */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
            <p className="text-gray-600 mb-2 sm:mb-0">
              Showing <span className="font-medium">{filteredProducts.length}</span> results
            </p>
            <div className="flex items-center">
              <label htmlFor="sort" className="text-gray-600 mr-2">
                Sort by:
              </label>
              <select
                id="sort"
                value={sortOption}
                onChange={handleSortChange}
                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>

          {/* Products grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                No products found matching your criteria.
              </p>
              <button
                onClick={() => {
                  setFilters({
                    category: 'all',
                    minPrice: 0,
                    maxPrice: 1000,
                    minRating: 0,
                    searchQuery: '',
                  });
                }}
                className="mt-4 text-blue-600 hover:text-blue-800"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;