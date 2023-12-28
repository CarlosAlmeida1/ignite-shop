import * as Dialog from '@radix-ui/react-dialog';
import CartButton from '../CartButton';
import {
  CartCloseButton,
  CartContent,
  CartFinishValues,
  CartProduct,
  CartProductDetails,
  CartProductImage,
  FinishValuesDetails,
} from './styles';

import { X } from '@phosphor-icons/react';
import useCart from '@/hook/useCart';
import Image from 'next/image';
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

export default function Cart() {
  const { cartItems, cartTotal, removeFromCartItems } = useCart();

  const formattedCartTotal = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(cartTotal);

  const carQuantity = cartItems.length;

  const [isCreateCheckoutSession, setIsCreateCheckoutSession] = useState(false);
  async function handleCheckout() {
    try {
      setIsCreateCheckoutSession(true);

      const response = await axios.post('/api/checkout', {
        products: cartItems,
      });

      const { checkoutUrl } = response.data;

      window.location.href = checkoutUrl;
    } catch (err) {
      setIsCreateCheckoutSession(false);
      toast.warn('Falha ao direcionar checkout');
    }
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <CartButton />
      </Dialog.Trigger>

      <Dialog.Portal>
        <CartContent>
          <CartCloseButton>
            <X size={24} weight='bold' />
          </CartCloseButton>
          <h2>Sacola de compras </h2>

          <section>
            {cartItems.length <= 0 && <p>Parece que sua sacola está vazio.</p>}
            {cartItems.map((cartItem) => (
              <CartProduct key={cartItem.id}>
                <CartProductImage>
                  <Image
                    width={100}
                    height={93}
                    alt=''
                    src={cartItem.imageUrl}
                  />
                </CartProductImage>
                <CartProductDetails>
                  <p>{cartItem.name}</p>
                  <strong>{cartItem.price}</strong>
                  <button onClick={() => removeFromCartItems(cartItem.id)}>
                    Remover
                  </button>
                </CartProductDetails>
              </CartProduct>
            ))}
          </section>

          <CartFinishValues>
            <FinishValuesDetails>
              <div>
                <span>Quantidade</span>
                <p>
                  {carQuantity} {carQuantity > 1 ? 'itens' : 'item'}
                </p>
              </div>
              <div>
                <span>Valor total</span>
                <p>{formattedCartTotal}</p>
              </div>
              <button
                onClick={handleCheckout}
                disabled={isCreateCheckoutSession || carQuantity <= 0}
              >
                Finalizar Compra
              </button>
            </FinishValuesDetails>
          </CartFinishValues>
        </CartContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
