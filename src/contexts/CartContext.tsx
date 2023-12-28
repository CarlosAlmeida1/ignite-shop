import { ReactNode, createContext, useState } from 'react';
import { toast } from 'react-toastify';

export interface IProduct {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  numberPrice: number;
  description: string;
  defaultPriceId: string;
}

interface CartContextData {
  cartItems: IProduct[];
  cartTotal: number;
  removeFromCartItems: (productId: IProduct) => void;
  addToCartItems: (product: IProduct) => void;
  verifyIfItemAlreadyExists: (productId: string) => boolean;
}

interface CartContextProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextData);

export default function CartContextProvider({
  children,
}: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<IProduct[]>([]);

  const cartTotal = cartItems.reduce((total, product) => {
    return total + product.numberPrice;
  }, 0);

  function addToCartItems(product: IProduct) {
    setCartItems((state) => [...state, product]);
  }

  function removeFromCartItems(productId: string) {
    setCartItems((state) => state.filter((item) => item.id !== productId));
  }

  function verifyIfItemAlreadyExists(productId: string) {
    return cartItems.some((product) => product.id === productId);
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCartItems,
        verifyIfItemAlreadyExists,
        cartTotal,
        removeFromCartItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
