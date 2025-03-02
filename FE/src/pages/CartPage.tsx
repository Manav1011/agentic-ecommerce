import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

const CartPage: React.FC = () => {
  const { cart, updateQuantity, removeFromCart } = useCart();

  const handleQuantityChange = (productId: string, quantity: number) => {
    updateQuantity(productId, quantity);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Shopping Cart</h1>

      {cart.items.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-lg shadow-md">
          <div className="flex justify-center mb-4">
            <ShoppingBag size={64} className="text-gray-300" />
          </div>
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Your cart is empty</h2>
          <p className="text-gray-500 mb-6">
            Looks like you haven't added any products to your cart yet.
          </p>
          <Link
            to="/products"
            className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
          >
            Start Shopping <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="hidden sm:grid sm:grid-cols-6 bg-gray-50 p-4 text-sm font-medium text-gray-500">
                <div className="sm:col-span-3">Product</div>
                <div className="text-center">Price</div>
                <div className="text-center">Quantity</div>
                <div className="text-right">Total</div>
              </div>

              <div className="divide-y divide-gray-200">
                {cart.items.map((item) => (
                  <div key={item.product.id} className="p-4 sm:grid sm:grid-cols-6 sm:gap-4 sm:items-center">
                    {/* Product info */}
                    <div className="sm:col-span-3 flex items-center mb-4 sm:mb-0">
                      <div className="w-20 h-20 flex-shrink-0 bg-gray-100 rounded-md overflow-hidden mr-4">
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-base font-medium text-gray-800">
                          <Link to={`/products/${item.product.id}`} className="hover:text-blue-600">
                            {item.product.name}
                          </Link>
                        </h3>
                        <p className="text-sm text-gray-500 mt-1">
                          Category: {item.product.category}
                        </p>
                        <button
                          onClick={() => removeFromCart(item.product.id)}
                          className="text-red-500 hover:text-red-700 text-sm flex items-center mt-2 sm:hidden"
                        >
                          <Trash2 size={16} className="mr-1" />
                          Remove
                        </button>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="text-center mb-4 sm:mb-0">
                      <span className="sm:hidden text-gray-500 mr-2">Price:</span>
                      <span className="font-medium">${item.product.price.toFixed(2)}</span>
                    </div>

                    {/* Quantity */}
                    <div className="text-center mb-4 sm:mb-0">
                      <span className="sm:hidden text-gray-500 mr-2">Quantity:</span>
                      <div className="inline-flex items-center">
                        <button
                          onClick={() => handleQuantityChange(item.product.id, item.quantity - 1)}
                          className="text-gray-500 hover:text-gray-700 focus:outline-none"
                        >
                          -
                        </button>
                        <input
                          type="number"
                          min="1"
                          value={item.quantity}
                          onChange={(e) =>
                            handleQuantityChange(item.product.id, parseInt(e.target.value) || 1)
                          }
                          className="w-12 text-center border border-gray-300 mx-2 py-1 rounded"
                        />
                        <button
                          onClick={() => handleQuantityChange(item.product.id, item.quantity + 1)}
                          className="text-gray-500 hover:text-gray-700 focus:outline-none"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* Total */}
                    <div className="text-right">
                      <span className="sm:hidden text-gray-500 mr-2">Total:</span>
                      <span className="font-medium">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </span>
                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="text-red-500 hover:text-red-700 ml-4 hidden sm:inline-flex items-center"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Order summary */}
          <div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Order Summary</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>${cart.total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Tax</span>
                  <span>${(cart.total * 0.1).toFixed(2)}</span>
                </div>
                <div className="border-t pt-3 mt-3 flex justify-between font-semibold text-gray-800">
                  <span>Total</span>
                  <span>${(cart.total * 1.1).toFixed(2)}</span>
                </div>
              </div>
              
              <Link
                to="/checkout"
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center"
              >
                Proceed to Checkout <ArrowRight size={18} className="ml-2" />
              </Link>
              
              <div className="mt-6">
                <h3 className="text-sm font-medium text-gray-700 mb-2">We Accept</h3>
                <div className="flex space-x-2">
                  <div className="bg-gray-100 p-2 rounded">
                    <span className="text-xs">Visa</span>
                  </div>
                  <div className="bg-gray-100 p-2 rounded">
                    <span className="text-xs">Mastercard</span>
                  </div>
                  <div className="bg-gray-100 p-2 rounded">
                    <span className="text-xs">PayPal</span>
                  </div>
                  <div className="bg-gray-100 p-2 rounded">
                    <span className="text-xs">Apple Pay</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;