import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ShoppingBag, Truck, Shield, Clock } from "lucide-react";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

const HomePage: React.FC = () => {
  // Get featured products
  const featuredProducts = products.filter((product) => product.featured);

  // Get latest products (could be based on date in a real app)
  const latestProducts = [...products]
    .sort(() => 0.5 - Math.random())
    .slice(0, 4);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-22">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Shop the Latest Trends
              </h1>
              <p className="text-lg md:text-xl mb-8 text-blue-100">
                Discover quality products at competitive prices. Free shipping
                on orders over $50.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/products"
                  className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-md hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
                >
                  Shop Now
                  <ArrowRight size={18} className="ml-2" />
                </Link>
                <Link
                  to="/products?category=featured"
                  className="bg-transparent border-2 border-white text-white font-semibold px-6 py-3 rounded-md hover:bg-white/10 transition-colors inline-flex items-center justify-center"
                >
                  View Featured
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="w-full h-full">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" className="w-full max-w-4xl">
        {/* Title and description */}
        {/* <title>Modern Tech Devices Illustration</title>
        <desc>An illustration of various modern technology devices including a laptop, smartphone, camera, headphones, smartwatch, and wireless earbuds.</desc> */}
        
        {/* Background with subtle gradient */}
        <rect width="800" height="600" fill="transparent" rx="12" ry="12"/>
        <defs>
          <linearGradient id="bg-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f0f4f8" />
            <stop offset="100%" stopColor="#d9e2ec" />
          </linearGradient>

          {/* Glossy effect for devices */}
          <linearGradient id="screen-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#333" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#111" stopOpacity="0.9" />
          </linearGradient>
          
          <linearGradient id="metal-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#e2e8f0" />
            <stop offset="50%" stopColor="#f8fafc" />
            <stop offset="100%" stopColor="#cbd5e1" />
          </linearGradient>
          
          <linearGradient id="gold-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#fef3c7" />
            <stop offset="50%" stopColor="#fbbf24" />
            <stop offset="100%" stopColor="#d97706" />
          </linearGradient>
          
          {/* New gradients */}
          <linearGradient id="accent-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#0ea5e9" />
          </linearGradient>
          
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        
        {/* Laptop in center */}
        <g transform="translate(300, 280)">
          {/* Laptop base */}
          <rect x="-150" y="10" width="300" height="200" rx="10" ry="10" fill="url(#metal-gradient)" />
          <rect x="-145" y="15" width="290" height="190" rx="8" ry="8" fill="#1e293b" />
          <rect x="-140" y="20" width="280" height="180" rx="6" ry="6" fill="#0f172a" />
          
          {/* Keyboard */}
          <rect x="-130" y="60" width="260" height="130" rx="4" ry="4" fill="#111827" />
          {/* Touchpad */}
          <rect x="-50" y="130" width="100" height="60" rx="4" ry="4" fill="#1f2937" />
          
          {/* Keyboard keys (simplified) */}
          <g fill="#334155" opacity="0.8">
            <rect x="-120" y="70" width="20" height="15" rx="2" ry="2" />
            <rect x="-95" y="70" width="20" height="15" rx="2" ry="2" />
            <rect x="-70" y="70" width="20" height="15" rx="2" ry="2" />
            <rect x="-45" y="70" width="20" height="15" rx="2" ry="2" />
            <rect x="-20" y="70" width="20" height="15" rx="2" ry="2" />
            <rect x="5" y="70" width="20" height="15" rx="2" ry="2" />
            <rect x="30" y="70" width="20" height="15" rx="2" ry="2" />
            <rect x="55" y="70" width="20" height="15" rx="2" ry="2" />
            <rect x="80" y="70" width="20" height="15" rx="2" ry="2" />
            
            <rect x="-120" y="90" width="20" height="15" rx="2" ry="2" />
            <rect x="-95" y="90" width="20" height="15" rx="2" ry="2" />
            <rect x="-70" y="90" width="20" height="15" rx="2" ry="2" />
            <rect x="-45" y="90" width="20" height="15" rx="2" ry="2" />
            <rect x="-20" y="90" width="20" height="15" rx="2" ry="2" />
            <rect x="5" y="90" width="20" height="15" rx="2" ry="2" />
            <rect x="30" y="90" width="20" height="15" rx="2" ry="2" />
            <rect x="55" y="90" width="20" height="15" rx="2" ry="2" />
            <rect x="80" y="90" width="20" height="15" rx="2" ry="2" />
            
            <rect x="-120" y="110" width="20" height="15" rx="2" ry="2" />
            <rect x="-95" y="110" width="20" height="15" rx="2" ry="2" />
            <rect x="-70" y="110" width="20" height="15" rx="2" ry="2" />
            <rect x="-45" y="110" width="20" height="15" rx="2" ry="2" />
            <rect x="-20" y="110" width="20" height="15" rx="2" ry="2" />
            <rect x="5" y="110" width="20" height="15" rx="2" ry="2" />
            <rect x="30" y="110" width="20" height="15" rx="2" ry="2" />
            <rect x="55" y="110" width="20" height="15" rx="2" ry="2" />
            <rect x="80" y="110" width="20" height="15" rx="2" ry="2" />
          </g>
          
          {/* Laptop screen */}
          <g>
            <rect x="-160" y="-190" width="320" height="200" rx="8" ry="8" fill="url(#metal-gradient)" />
            <rect x="-150" y="-180" width="300" height="180" rx="4" ry="4" fill="url(#screen-gradient)" />
            {/* Screen content */}
            <rect x="-135" y="-165" width="270" height="25" rx="3" ry="3" fill="#2563eb" />
            <rect x="-135" y="-130" width="80" height="80" rx="3" ry="3" fill="#3b82f6" />
            <rect x="-45" y="-130" width="80" height="80" rx="3" ry="3" fill="#60a5fa" />
            <rect x="45" y="-130" width="80" height="80" rx="3" ry="3" fill="#93c5fd" />
            <rect x="-135" y="-40" width="270" height="25" rx="3" ry="3" fill="#2563eb" opacity="0.8" />
            
            {/* Camera */}
            <circle cx="0" cy="-170" r="3" fill="#000" />
            <circle cx="0" cy="-170" r="1" fill="#64748b" />
          </g>
          
          {/* Laptop hinge */}
          <rect x="-160" y="-10" width="320" height="20" rx="10" ry="10" fill="#0f172a" />
        </g>
        
        {/* Smartphone on bottom left */}
        <g transform="translate(150, 350)">
          {/* Phone body */}
          <rect x="-40" y="-80" width="80" height="160" rx="12" ry="12" fill="#334155" />
          <rect x="-35" y="-75" width="70" height="150" rx="6" ry="6" fill="url(#screen-gradient)" />
          
          {/* Phone content */}
          <rect x="-30" y="-70" width="60" height="20" rx="3" ry="3" fill="#3b82f6" />
          <rect x="-30" y="-45" width="26" height="26" rx="3" ry="3" fill="#60a5fa" />
          <rect x="0" y="-45" width="26" height="26" rx="3" ry="3" fill="#93c5fd" />
          <rect x="-30" y="-15" width="26" height="26" rx="3" ry="3" fill="#38bdf8" />
          <rect x="0" y="-15" width="26" height="26" rx="3" ry="3" fill="#7dd3fc" />
          <rect x="-30" y="15" width="60" height="54" rx="3" ry="3" fill="#0284c7" />
          
          {/* Camera array */}
          <rect x="-20" y="-65" width="18" height="10" rx="5" ry="5" fill="#000" opacity="0.6" />
          
          {/* Home button */}
          <circle cx="0" cy="65" r="10" fill="#1e293b" />
          <circle cx="0" cy="65" r="8" fill="#475569" />
        </g>
        
        {/* Camera on bottom right */}
        <g transform="translate(600, 380)">
          {/* Camera body */}
          <rect x="-60" y="-40" width="120" height="80" rx="8" ry="8" fill="#1e293b" />
          <rect x="-30" y="-45" width="60" height="10" rx="3" ry="3" fill="#334155" />
          
          {/* Lens */}
          <circle cx="0" cy="0" r="35" fill="#0f172a" />
          <circle cx="0" cy="0" r="30" fill="#1e293b" />
          <circle cx="0" cy="0" r="25" fill="#000" />
          <circle cx="0" cy="0" r="20" fill="#000" />
          <circle cx="0" cy="0" r="15" fill="#111" />
          <circle cx="0" cy="0" r="10" fill="#000" />
          
          {/* Flash */}
          <circle cx="-40" cy="-20" r="5" fill="#f1f5f9" />
          <circle cx="-40" cy="-20" r="3" fill="#f8fafc" />
          
          {/* Buttons */}
          <rect x="30" y="-30" width="20" height="5" rx="2" ry="2" fill="#64748b" />
          <rect x="30" y="-20" width="20" height="5" rx="2" ry="2" fill="#64748b" />
          
          {/* Display */}
          <rect x="-50" y="25" width="40" height="10" rx="1" ry="1" fill="#334155" />
        </g>
        
        {/* Headphones at top */}
        <g transform="translate(120, 150)">
          {/* Headband */}
          <path d="M-50,0 C-50,-40 50,-40 50,0" fill="none" stroke="#334155" strokeWidth="8" />
          
          {/* Left earpiece */}
          <g transform="translate(-60, 10)">
            <ellipse cx="0" cy="0" rx="30" ry="40" fill="#1e293b" />
            <ellipse cx="0" cy="0" rx="22" ry="32" fill="#334155" />
            <ellipse cx="0" cy="0" rx="18" ry="28" fill="#0f172a" />
          </g>
          
          {/* Right earpiece */}
          <g transform="translate(60, 10)">
            <ellipse cx="0" cy="0" rx="30" ry="40" fill="#1e293b" />
            <ellipse cx="0" cy="0" rx="22" ry="32" fill="#334155" />
            <ellipse cx="0" cy="0" rx="18" ry="28" fill="#0f172a" />
          </g>
        </g>
        
        {/* Smartwatch at top right */}
        <g transform="translate(600, 200)">
          {/* Watch band (top) */}
          <path d="M-20,-40 C-20,-60 20,-60 20,-40" fill="#334155" />
          
          {/* Watch body */}
          <rect x="-40" y="-40" width="80" height="80" rx="16" ry="16" fill="url(#metal-gradient)" />
          <rect x="-35" y="-35" width="70" height="70" rx="12" ry="12" fill="#0f172a" />
          
          {/* Watch screen */}
          <rect x="-30" y="-30" width="60" height="60" rx="6" ry="6" fill="url(#screen-gradient)" />
          
          {/* Watch content */}
          <rect x="-25" y="-25" width="50" height="10" rx="2" ry="2" fill="#3b82f6" />
          <rect x="-25" y="-10" width="20" height="20" rx="10" ry="10" fill="#0284c7" opacity="0.8" />
          <rect x="5" y="-10" width="20" height="20" rx="2" ry="2" fill="#38bdf8" opacity="0.8" />
          <rect x="-25" y="15" width="50" height="10" rx="2" ry="2" fill="#0ea5e9" opacity="0.8" />
          
          {/* Watch crown */}
          <rect x="40" y="-10" width="10" height="20" rx="5" ry="5" fill="#64748b" />
          
          {/* Watch band (bottom) */}
          <path d="M-20,40 C-20,60 20,60 20,40" fill="#334155" />
        </g>
        
        {/* Wireless earbuds case top center */}
        <g transform="translate(400, 150)">
          {/* Case */}
          <ellipse cx="0" cy="0" rx="30" ry="20" fill="#1e293b" />
          <line x1="-30" y1="0" x2="30" y2="0" stroke="#0f172a" strokeWidth="1" />
          
          {/* Case lid (open) */}
          <path d="M-30,0 C-30,-20 30,-20 30,0" fill="#334155" stroke="#0f172a" strokeWidth="1" />
          
          {/* Earbuds */}
          <g>
            {/* Left earbud */}
            <ellipse cx="-10" cy="5" rx="10" ry="7" fill="#475569" />
            <ellipse cx="-10" cy="5" rx="6" ry="4" fill="#94a3b8" />
            
            {/* Right earbud */}
            <ellipse cx="10" cy="5" rx="10" ry="7" fill="#475569" />
            <ellipse cx="10" cy="5" rx="6" ry="4" fill="#94a3b8" />
          </g>
          
          {/* LED indicator */}
          <circle cx="0" cy="-10" r="3" fill="#7dd3fc">
            <animate attributeName="fill" values="#7dd3fc;#0ea5e9;#7dd3fc" dur="3s" repeatCount="indefinite" />
          </circle>
        </g>
        
        {/* Dynamic elements */}
        {/* Pulsing circles to add energy to the composition */}
        <circle cx="400" cy="300" r="200" fill="none" stroke="#60a5fa" strokeWidth="2" opacity="0.2">
          <animate attributeName="r" values="200;220;200" dur="4s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.2;0.1;0.2" dur="4s" repeatCount="indefinite" />
        </circle>
        
        <circle cx="400" cy="300" r="250" fill="none" stroke="#3b82f6" strokeWidth="1" opacity="0.1">
          <animate attributeName="r" values="250;270;250" dur="5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.1;0.05;0.1" dur="5s" repeatCount="indefinite" />
        </circle>
        
        {/* Small decorative tech elements */}
        <circle cx="250" cy="200" r="5" fill="#38bdf8" opacity="0.7" />
        <circle cx="550" cy="250" r="3" fill="#0ea5e9" opacity="0.7" />
        <circle cx="480" cy="180" r="4" fill="#0284c7" opacity="0.7" />
        <circle cx="320" cy="450" r="3" fill="#38bdf8" opacity="0.7" />
        <circle cx="530" cy="400" r="5" fill="#0ea5e9" opacity="0.7" />
        
        {/* NEW ADDITIONS */}
        
        {/* Tablet device at bottom center */}
        <g transform="translate(400, 450)">
          {/* Tablet body */}
          <rect x="-70" y="-50" width="140" height="100" rx="8" ry="8" fill="#334155" />
          <rect x="-65" y="-45" width="130" height="90" rx="5" ry="5" fill="url(#screen-gradient)" />
          
          {/* Tablet content */}
          <rect x="-60" y="-40" width="120" height="15" rx="2" ry="2" fill="#3b82f6" />
          <rect x="-60" y="-20" width="35" height="30" rx="2" ry="2" fill="#60a5fa" />
          <rect x="-20" y="-20" width="35" height="30" rx="2" ry="2" fill="#38bdf8" />
          <rect x="20" y="-20" width="35" height="30" rx="2" ry="2" fill="#0284c7" />
          <rect x="-60" y="15" width="120" height="25" rx="2" ry="2" fill="#0ea5e9" opacity="0.8" />
          
          {/* Tablet camera */}
          <circle cx="0" cy="-40" r="2" fill="#000" />
          
          {/* Home button */}
          <circle cx="0" cy="40" r="5" fill="#1e293b" />
        </g>
        
        {/* Smart speaker at top left */}
        <g transform="translate(180, 480)">
          {/* Speaker body */}
          <rect x="-25" y="-40" width="50" height="80" rx="5" ry="5" fill="url(#metal-gradient)" />
          <rect x="-20" y="-35" width="40" height="70" rx="3" ry="3" fill="#1e293b" />
          
          {/* Speaker grille */}
          <circle cx="0" cy="-15" r="15" fill="#0f172a" />
          <circle cx="0" cy="15" r="15" fill="#0f172a" />
          
          {/* LED lights */}
          <circle cx="0" cy="-15" r="12" fill="#1e293b" />
          <circle cx="0" cy="15" r="12" fill="#1e293b" />
          
          {/* Active indicator */}
          <circle cx="0" cy="-15" r="8" fill="url(#accent-gradient)">
            <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite" />
          </circle>
        </g>
        
        {/* Gaming controller at bottom right */}
        <g transform="translate(700, 500)">
          {/* Controller body */}
          <path d="M-40,-20 C-45,-5 -45,5 -40,20 L-20,25 C-10,30 10,30 20,25 L40,20 C45,5 45,-5 40,-20 L20,-25 C10,-30 -10,-30 -20,-25 Z" fill="#334155" />
          
          {/* D-pad */}
          <rect x="-30" y="0" width="15" height="5" rx="1" ry="1" fill="#1e293b" />
          <rect x="-25" y="-5" width="5" height="15" rx="1" ry="1" fill="#1e293b" />
          
          {/* Buttons */}
          <circle cx="20" cy="-5" r="5" fill="#3b82f6" />
          <circle cx="30" cy="0" r="5" fill="#0ea5e9" />
          <circle cx="20" cy="5" r="5" fill="#0284c7" />
          <circle cx="10" cy="0" r="5" fill="#38bdf8" />
          
          {/* Analog sticks */}
          <circle cx="-10" cy="-10" r="7" fill="#1e293b" />
          <circle cx="-10" cy="-10" r="5" fill="#334155" />
          <circle cx="10" cy="10" r="7" fill="#1e293b" />
          <circle cx="10" cy="10" r="5" fill="#334155" />
        </g>
        
        {/* Connection lines showing device connectivity */}
        <g stroke="url(#accent-gradient)" strokeWidth="1" opacity="0.4" fill="none">
          <path d="M300,280 C350,250 380,230 400,150" strokeDasharray="5,3">
            <animate attributeName="strokeDashoffset" from="0" to="16" dur="3s" repeatCount="indefinite" />
          </path>
          <path d="M300,280 C250,250 200,200 150,350" strokeDasharray="5,3">
            <animate attributeName="strokeDashoffset" from="0" to="16" dur="4s" repeatCount="indefinite" />
          </path>
          <path d="M300,280 C350,300 450,330 400,450" strokeDasharray="5,3">
            <animate attributeName="strokeDashoffset" from="0" to="16" dur="3.5s" repeatCount="indefinite" />
          </path>
          <path d="M300,280 C400,300 500,350 600,380" strokeDasharray="5,3">
            <animate attributeName="strokeDashoffset" from="0" to="16" dur="4.5s" repeatCount="indefinite" />
          </path>
          <path d="M300,280 C400,250 500,230 600,200" strokeDasharray="5,3">
            <animate attributeName="strokeDashoffset" from="0" to="16" dur="5s" repeatCount="indefinite" />
          </path>
        </g>
        
        {/* Floating data/cloud icons */}
        <g transform="translate(470, 280)">
          <path d="M-20,-10 C-20,-17 -14,-22 -8,-22 C-8,-27 -3,-30 2,-30 C7,-30 12,-27 12,-22 C18,-22 24,-17 24,-10 C24,-3 18,2 12,2 L-8,2 C-14,2 -20,-3 -20,-10 Z" fill="#60a5fa" opacity="0.5" filter="url(#glow)" />
        </g>
        
        <g transform="translate(230, 300)">
          <path d="M-15,-8 C-15,-13 -11,-17 -6,-17 C-6,-20 -3,-23 1,-23 C5,-23 9,-20 9,-17 C14,-17 18,-13 18,-8 C18,-3 14,1 9,1 L-6,1 C-11,1 -15,-3 -15,-8 Z" fill="#38bdf8" opacity="0.5" filter="url(#glow)" />
        </g>
        
      </svg>
              </div>

              {/* <img
                src="https://images.unsplash.com/photo-1607082350899-7e105aa886ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Shopping"
                className="rounded-lg shadow-xl"
              /> */}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-start">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <Truck className="text-blue-600" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">
                  Free Shipping
                </h3>
                <p className="text-gray-600 text-sm">On orders over $50</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-start">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <Shield className="text-blue-600" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">
                  Secure Payment
                </h3>
                <p className="text-gray-600 text-sm">
                  100% secure transactions
                </p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-start">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <Clock className="text-blue-600" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">
                  24/7 Support
                </h3>
                <p className="text-gray-600 text-sm">
                  Dedicated customer service
                </p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-start">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <ShoppingBag className="text-blue-600" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">
                  Easy Returns
                </h3>
                <p className="text-gray-600 text-sm">30-day return policy</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800">
              Featured Products
            </h2>
            <Link
              to="/products?category=featured"
              className="text-blue-600 hover:text-blue-800 flex items-center"
            >
              View All <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Latest Products Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800">
              Latest Arrivals
            </h2>
            <Link
              to="/products"
              className="text-blue-600 hover:text-blue-800 flex items-center"
            >
              View All <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {latestProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="mb-6 text-blue-100">
              Stay updated with our latest products and exclusive offers.
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-2 rounded-md text-gray-900 focus:outline-none"
                required
              />
              <button
                type="submit"
                className="bg-white text-blue-600 font-semibold px-6 py-2 rounded-md hover:bg-blue-50 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
