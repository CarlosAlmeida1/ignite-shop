import React from 'react';
import { Handbag } from '@phosphor-icons/react';
import { CartButtonContainer } from './styles';
import { ButtonHTMLAttributes, forwardRef } from 'react';
import useCart from '@/hook/useCart';

interface CartButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  quantity?: number;
  showQuantity: boolean;
}

const CartButton = forwardRef<HTMLButtonElement, CartButtonProps>(
  function CartButton({ showQuantity = true, ...rest }, ref) {
    const { cartItems } = useCart();

    const quantity = cartItems.length;

    return (
      <CartButtonContainer {...rest} ref={ref}>
        {showQuantity && quantity > 0 && <span>{quantity}</span>}
        <Handbag weight='bold' size={20} />
      </CartButtonContainer>
    );
  }
);

CartButton.displayName = 'CartButton';

export default CartButton;
