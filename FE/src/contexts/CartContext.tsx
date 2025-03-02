import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { Product } from '../types';

// Define the shape of a cart item
interface CartItem {
  product: Product;
  quantity: number;
}

// Define the shape of the cart state
interface CartState {
  items: CartItem[];
  total: number;
}

// Define the types of actions that can be performed on the cart
type CartAction =
  | { type: 'ADD_TO_CART'; payload: Product }
  | { type: 'REMOVE_FROM_CART'; payload: string }
  | { type: 'UPDATE_QUANTITY'; payload: { id: string; quantity: number } }
  | { type: 'CLEAR_CART' };

// Define the shape of the context
interface CartContextType {
  cart: CartState;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
}

// Create the context
const CartContext = createContext<CartContextType | undefined>(undefined);

// Initial state for the cart
const initialState: CartState = {
  items: [],
  total: 0,
};

// Reducer function to handle cart actions
const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const existingItemIndex = state.items.findIndex(
        (item) => item.product.id === action.payload.id
      );

      if (existingItemIndex >= 0) {
        // If the item already exists in the cart, increase its quantity
        const updatedItems = [...state.items];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + 1,
        };

        return {
          ...state,
          items: updatedItems,
          total: calculateTotal(updatedItems),
        };
      } else {
        // If the item doesn't exist in the cart, add it
        const updatedItems = [
          ...state.items,
          { product: action.payload, quantity: 1 },
        ];

        return {
          ...state,
          items: updatedItems,
          total: calculateTotal(updatedItems),
        };
      }
    }

    case 'REMOVE_FROM_CART': {
      const updatedItems = state.items.filter(
        (item) => item.product.id !== action.payload
      );

      return {
        ...state,
        items: updatedItems,
        total: calculateTotal(updatedItems),
      };
    }

    case 'UPDATE_QUANTITY': {
      const { id, quantity } = action.payload;

      if (quantity <= 0) {
        // If quantity is 0 or negative, remove the item from the cart
        return cartReducer(state, { type: 'REMOVE_FROM_CART', payload: id });
      }

      const updatedItems = state.items.map((item) =>
        item.product.id === id ? { ...item, quantity } : item
      );

      return {
        ...state,
        items: updatedItems,
        total: calculateTotal(updatedItems),
      };
    }

    case 'CLEAR_CART':
      return initialState;

    default:
      return state;
  }
};

// Helper function to calculate the total price of items in the cart
const calculateTotal = (items: CartItem[]): number => {
  return items.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );
};

// Provider component
export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (product: Product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  const removeFromCart = (productId: string) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: productId });
  };

  const updateQuantity = (productId: string, quantity: number) => {
    dispatch({
      type: 'UPDATE_QUANTITY',
      payload: { id: productId, quantity },
    });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the cart context
export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};