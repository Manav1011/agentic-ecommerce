import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CreditCard, Check, Shield } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

type ShippingInfo = {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  phone: string;
};

type PaymentInfo = {
  cardNumber: string;
  cardName: string;
  expiryDate: string;
  cvv: string;
};

const CheckoutPage: React.FC = () => {
  const { cart } = useCart();
  const [currentStep, setCurrentStep] = useState<'shipping' | 'payment' | 'confirmation'>('shipping');
  const [shippingInfo, setShippingInfo] = useState<ShippingInfo>({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'United States',
    phone: '',
  });
  const [paymentInfo, setPaymentInfo] = useState<PaymentInfo>({
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
  });
  const [shippingMethod, setShippingMethod] = useState<'standard' | 'express'>('standard');

  const handleShippingInfoChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setShippingInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handlePaymentInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPaymentInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentStep('payment');
    window.scrollTo(0, 0);
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentStep('confirmation');
    window.scrollTo(0, 0);
  };

  const formatCardNumber = (value: string) => {
    return value
      .replace(/\s/g, '')
      .replace(/(\d{4})/g, '$1 ')
      .trim();
  };

  const subtotal = cart.total;
  const tax = subtotal * 0.1;
  const shippingCost = shippingMethod === 'express' ? 15 : 0;
  const total = subtotal + tax + shippingCost;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <Link to="/cart" className="inline-flex items-center text-blue-600 hover:text-blue-800">
          <ArrowLeft size={16} className="mr-2" />
          Back to Cart
        </Link>
      </div>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Checkout</h1>
        <div className="mt-4 flex items-center">
          <div className={`flex items-center ${currentStep === 'shipping' || currentStep === 'payment' || currentStep === 'confirmation' ? 'text-blue-600' : 'text-gray-400'}`}>
            <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center">1</div>
            <span className="ml-2 font-medium">Shipping</span>
          </div>
          <div className="w-12 h-1 mx-2 bg-gray-200">
            <div className={`h-full ${currentStep === 'payment' || currentStep === 'confirmation' ? 'bg-blue-600' : 'bg-gray-200'}`}></div>
          </div>
          <div className={`flex items-center ${currentStep === 'payment' || currentStep === 'confirmation' ? 'text-blue-600' : 'text-gray-400'}`}>
            <div className={`w-8 h-8 rounded-full ${currentStep === 'payment' || currentStep === 'confirmation' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'} flex items-center justify-center`}>2</div>
            <span className="ml-2 font-medium">Payment</span>
          </div>
          <div className="w-12 h-1 mx-2 bg-gray-200">
            <div className={`h-full ${currentStep === 'confirmation' ? 'bg-blue-600' : 'bg-gray-200'}`}></div>
          </div>
          <div className={`flex items-center ${currentStep === 'confirmation' ? 'text-blue-600' : 'text-gray-400'}`}>
            <div className={`w-8 h-8 rounded-full ${currentStep === 'confirmation' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'} flex items-center justify-center`}>3</div>
            <span className="ml-2 font-medium">Confirmation</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {currentStep === 'shipping' && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-6">Shipping Information</h2>
              <form onSubmit={handleShippingSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={shippingInfo.firstName}
                      onChange={handleShippingInfoChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={shippingInfo.lastName}
                      onChange={handleShippingInfoChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={shippingInfo.email}
                    onChange={handleShippingInfoChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                    Street Address *
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={shippingInfo.address}
                    onChange={handleShippingInfoChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                      City *
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={shippingInfo.city}
                      onChange={handleShippingInfoChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                      State/Province *
                    </label>
                    <input
                      type="text"
                      id="state"
                      name="state"
                      value={shippingInfo.state}
                      onChange={handleShippingInfoChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-1">
                      ZIP/Postal Code *
                    </label>
                    <input
                      type="text"
                      id="zipCode"
                      name="zipCode"
                      value={shippingInfo.zipCode}
                      onChange={handleShippingInfoChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                      Country *
                    </label>
                    <select
                      id="country"
                      name="country"
                      value={shippingInfo.country}
                      onChange={handleShippingInfoChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="United States">United States</option>
                      <option value="Canada">Canada</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="Australia">Australia</option>
                      <option value="Germany">Germany</option>
                      <option value="France">France</option>
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={shippingInfo.phone}
                    onChange={handleShippingInfoChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-medium text-gray-800 mb-3">Shipping Method</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="standard"
                        name="shippingMethod"
                        value="standard"
                        checked={shippingMethod === 'standard'}
                        onChange={() => setShippingMethod('standard')}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                      />
                      <label htmlFor="standard" className="ml-3 block text-sm font-medium text-gray-700">
                        Standard Shipping (Free, 5-7 business days)
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="express"
                        name="shippingMethod"
                        value="express"
                        checked={shippingMethod === 'express'}
                        onChange={() => setShippingMethod('express')}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                      />
                      <label htmlFor="express" className="ml-3 block text-sm font-medium text-gray-700">
                        Express Shipping ($15.00, 2-3 business days)
                      </label>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Continue to Payment
                </button>
              </form>
            </div>
          )}

          {currentStep === 'payment' && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-6">Payment Information</h2>
              <form onSubmit={handlePaymentSubmit}>
                <div className="mb-6">
                  <label htmlFor="cardName" className="block text-sm font-medium text-gray-700 mb-1">
                    Name on Card *
                  </label>
                  <input
                    type="text"
                    id="cardName"
                    name="cardName"
                    value={paymentInfo.cardName}
                    onChange={handlePaymentInfoChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">
                    Card Number *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="cardNumber"
                      name="cardNumber"
                      value={paymentInfo.cardNumber}
                      onChange={(e) => {
                        const formattedValue = formatCardNumber(e.target.value.replace(/[^\d]/g, '').slice(0, 16));
                        setPaymentInfo((prev) => ({ ...prev, cardNumber: formattedValue }));
                      }}
                      required
                      placeholder="XXXX XXXX XXXX XXXX"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                    />
                    <CreditCard className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700 mb-1">
                      Expiry Date (MM/YY) *
                    </label>
                    <input
                      type="text"
                      id="expiryDate"
                      name="expiryDate"
                      value={paymentInfo.expiryDate}
                      onChange={(e) => {
                        let value = e.target.value.replace(/[^\d]/g, '').slice(0, 4);
                        if (value.length > 2) {
                          value = value.slice(0, 2) + '/' + value.slice(2);
                        }
                        setPaymentInfo((prev) => ({ ...prev, expiryDate: value }));
                      }}
                      required
                      placeholder="MM/YY"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-1">
                      CVV *
                    </label>
                    <input
                      type="text"
                      id="cvv"
                      name="cvv"
                      value={paymentInfo.cvv}
                      onChange={(e) => {
                        const value = e.target.value.replace(/[^\d]/g, '').slice(0, 3);
                        setPaymentInfo((prev) => ({ ...prev, cvv: value }));
                      }}
                      required
                      placeholder="XXX"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="mb-6 p-4 bg-gray-50 rounded-md border border-gray-200">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <Shield className="h-5 w-5 text-green-500" />
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-gray-700">Secure Payment</h3>
                      <p className="text-xs text-gray-500 mt-1">
                        Your payment information is encrypted and secure. We never store your full card details.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
                  <button
                    type="button"
                    onClick={() => setCurrentStep('shipping')}
                    className="px-6 py-3 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    Back to Shipping
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Complete Order
                  </button>
                </div>
              </form>
            </div>
          )}

          {currentStep === 'confirmation' && (
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Thank You for Your Order!</h2>
              <p className="text-gray-600 mb-6">
                Your order has been placed successfully. We've sent a confirmation email to {shippingInfo.email}.
              </p>
              
              <div className="mb-8 p-6 bg-gray-50 rounded-lg border border-gray-200 text-left">
                <h3 className="text-lg font-medium text-gray-800 mb-4">Order Summary</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Order Number:</span>
                    <span className="font-medium">{Math.floor(Math.random() * 1000000).toString().padStart(6, '0')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Order Date:</span>
                    <span className="font-medium">{new Date().toLocaleDateString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping Method:</span>
                    <span className="font-medium">{shippingMethod === 'standard' ? 'Standard (5-7 days)' : 'Express (2-3 days)'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Payment Method:</span>
                    <span className="font-medium">Credit Card ending in {paymentInfo.cardNumber.slice(-4)}</span>
                  </div>
                </div>
              </div>
              
              <div className="mb-8 p-6 bg-gray-50 rounded-lg border border-gray-200 text-left">
                <h3 className="text-lg font-medium text-gray-800 mb-4">Shipping Address</h3>
                <address className="not-italic text-gray-600">
                  {shippingInfo.firstName} {shippingInfo.lastName}<br />
                  {shippingInfo.address}<br />
                  {shippingInfo.city}, {shippingInfo.state} {shippingInfo.zipCode}<br />
                  {shippingInfo.country}<br />
                  {shippingInfo.phone}
                </address>
              </div>
              
              <Link
                to="/products"
                className="inline-block bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          )}
        </div>

        <div>
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Order Summary</h2>
            
            <div className="mb-4">
              {cart.items.map((item) => (
                <div key={item.product.id} className="flex py-4 border-b border-gray-200">
                  <div className="w-16 h-16 flex-shrink-0 bg-gray-100 rounded-md overflow-hidden mr-4">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-medium text-gray-800">{item.product.name}</h3>
                    <p className="text-sm text-gray-500 mt-1">Qty: {item.quantity}</p>
                  </div>
                  <div className="text-right">
                    <span className="font-medium">${(item.product.price * item.quantity).toFixed(2)}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span>{shippingMethod === 'standard' ? 'Free' : `$${shippingCost.toFixed(2)}`}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="border-t pt-3 mt-3 flex justify-between font-semibold text-gray-800">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
            
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
    </div>
  );
};

export default CheckoutPage;