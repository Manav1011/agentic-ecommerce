import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User, Menu, X, Search } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';

const Navbar: React.FC = () => {
  const { cart } = useCart();
  const { user, isAuthenticated, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo and desktop navigation */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="font-bold text-xl">ShopEase</span>
            </Link>
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              <Link
                to="/"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium hover:text-blue-200"
              >
                Home
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium hover:text-blue-200"
              >
                Products
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium hover:text-blue-200"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Desktop search, cart, and user */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <button
              onClick={toggleSearch}
              className="p-2 rounded-full hover:bg-blue-700 focus:outline-none"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            <Link
              to="/cart"
              className="p-2 rounded-full hover:bg-blue-700 focus:outline-none relative"
              aria-label="Shopping cart"
            >
              <ShoppingCart size={20} />
              {cart.items.length > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                  {cart.items.reduce((total, item) => total + item.quantity, 0)}
                </span>
              )}
            </Link>
            {isAuthenticated ? (
              <div className="relative ml-3">
                <div className="flex items-center">
                  <button
                    className="flex text-sm rounded-full focus:outline-none"
                    aria-label="User menu"
                  >
                    <span className="sr-only">Open user menu</span>
                    <div className="h-8 w-8 rounded-full bg-blue-400 flex items-center justify-center">
                      <span className="text-xs font-medium">
                        {user?.name.charAt(0).toUpperCase()}
                      </span>
                    </div>
                  </button>
                  <span className="ml-2">{user?.name}</span>
                  <button
                    onClick={logout}
                    className="ml-4 px-3 py-1 text-sm bg-blue-700 rounded hover:bg-blue-800"
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <Link
                to="/login"
                className="flex items-center text-sm px-3 py-1 rounded hover:bg-blue-700"
              >
                <User size={18} className="mr-1" />
                Login
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleSearch}
              className="p-2 rounded-full hover:bg-blue-700 focus:outline-none"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            <Link
              to="/cart"
              className="p-2 rounded-full hover:bg-blue-700 focus:outline-none relative mx-2"
              aria-label="Shopping cart"
            >
              <ShoppingCart size={20} />
              {cart.items.length > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                  {cart.items.reduce((total, item) => total + item.quantity, 0)}
                </span>
              )}
            </Link>
            <button
              onClick={toggleMenu}
              className="p-2 rounded-full hover:bg-blue-700 focus:outline-none"
              aria-label="Open menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="block pl-3 pr-4 py-2 text-base font-medium hover:bg-blue-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/products"
              className="block pl-3 pr-4 py-2 text-base font-medium hover:bg-blue-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <Link
              to="/contact"
              className="block pl-3 pr-4 py-2 text-base font-medium hover:bg-blue-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
            {isAuthenticated ? (
              <>
                <div className="pl-3 pr-4 py-2 text-base font-medium">
                  Signed in as {user?.name}
                </div>
                <button
                  onClick={() => {
                    logout();
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left pl-3 pr-4 py-2 text-base font-medium hover:bg-blue-700"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="block pl-3 pr-4 py-2 text-base font-medium hover:bg-blue-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}

      {/* Search bar */}
      {isSearchOpen && (
        <div className="px-4 pb-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full p-2 pl-10 text-gray-900 bg-white rounded-md focus:outline-none"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={18} className="text-gray-400" />
            </div>
            <button
              onClick={toggleSearch}
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
            >
              <X size={18} className="text-gray-400" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;