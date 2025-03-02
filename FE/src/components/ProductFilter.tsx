import React, { useState, useEffect } from 'react';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import { FilterOptions } from '../types';
import { categories } from '../data/products';

interface ProductFilterProps {
  onFilterChange: (filters: FilterOptions) => void;
  initialFilters?: FilterOptions;
}

const ProductFilter: React.FC<ProductFilterProps> = ({
  onFilterChange,
  initialFilters,
}) => {
  const [filters, setFilters] = useState<FilterOptions>({
    category: initialFilters?.category || 'all',
    minPrice: initialFilters?.minPrice || 0,
    maxPrice: initialFilters?.maxPrice || 1000,
    minRating: initialFilters?.minRating || 0,
    searchQuery: initialFilters?.searchQuery || '',
  });

  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    onFilterChange(filters);
  }, [filters, onFilterChange]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    
    setFilters((prev) => ({
      ...prev,
      [name]: name === 'minPrice' || name === 'maxPrice' || name === 'minRating'
        ? Number(value)
        : value,
    }));
  };

  const handleReset = () => {
    setFilters({
      category: 'all',
      minPrice: 0,
      maxPrice: 1000,
      minRating: 0,
      searchQuery: '',
    });
  };

  const toggleFilters = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-6">
      {/* Search bar - always visible */}
      <div className="relative mb-4">
        <input
          type="text"
          name="searchQuery"
          value={filters.searchQuery}
          onChange={handleInputChange}
          placeholder="Search products..."
          className="w-full p-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search size={18} className="text-gray-400" />
        </div>
      </div>

      {/* Filter toggle button */}
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={toggleFilters}
          className="flex items-center text-blue-600 hover:text-blue-800"
        >
          <SlidersHorizontal size={18} className="mr-1" />
          {isFilterOpen ? 'Hide Filters' : 'Show Filters'}
        </button>
        {isFilterOpen && (
          <button
            onClick={handleReset}
            className="text-sm text-gray-600 hover:text-gray-800"
          >
            Reset Filters
          </button>
        )}
      </div>

      {/* Filter options - collapsible */}
      {isFilterOpen && (
        <div className="space-y-4">
          {/* Categories */}
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
              Category
            </label>
            <select
              id="category"
              name="category"
              value={filters.category}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          {/* Price Range */}
          <div>
            <div className="flex justify-between mb-1">
              <label className="block text-sm font-medium text-gray-700">
                Price Range
              </label>
              <span className="text-sm text-gray-500">
                ${filters.minPrice} - ${filters.maxPrice}
              </span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="minPrice" className="sr-only">
                  Minimum Price
                </label>
                <input
                  type="number"
                  id="minPrice"
                  name="minPrice"
                  value={filters.minPrice}
                  onChange={handleInputChange}
                  min="0"
                  max={filters.maxPrice}
                  placeholder="Min"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="maxPrice" className="sr-only">
                  Maximum Price
                </label>
                <input
                  type="number"
                  id="maxPrice"
                  name="maxPrice"
                  value={filters.maxPrice}
                  onChange={handleInputChange}
                  min={filters.minPrice}
                  placeholder="Max"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Rating */}
          <div>
            <div className="flex justify-between mb-1">
              <label htmlFor="minRating" className="block text-sm font-medium text-gray-700">
                Minimum Rating
              </label>
              <span className="text-sm text-gray-500">{filters.minRating}+ stars</span>
            </div>
            <input
              type="range"
              id="minRating"
              name="minRating"
              value={filters.minRating}
              onChange={handleInputChange}
              min="0"
              max="5"
              step="0.5"
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>Any</span>
              <span>5 Stars</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductFilter;