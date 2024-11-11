// CartContext.tsx

import React, { createContext, useContext, useState, ReactNode } from 'react';

// Définir l'état du panier avec un nombre d'articles et un tableau d'articles
type CartContextType = {
  cartCount: number;
  addToCart: () => void;
};

// Définir les types des props pour CartProvider, en incluant children
type CartProviderProps = {
  children: ReactNode;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
    setCartCount(cartCount + 1); // Ajout d'un article au panier
  };

  return (
    <CartContext.Provider value={{ cartCount, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Exporter useCart comme un hook par défaut
const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export default useCart;
