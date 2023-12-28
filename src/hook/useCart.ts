import { CartContext } from '@/contexts/CartContext';
import { useContext } from 'react';

export default function useCart() {
  return useContext(CartContext);
}
