import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from '@/styles/pages/product';
import { useRouter } from 'next/router';

export default function Product() {
  const { query } = useRouter();

  return (
    <ProductContainer>
      <ImageContainer></ImageContainer>

      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 79,90</span>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, hic
          maxime, pariatur corporis atque, molestiae nostrum cum repellendus
          deleniti laborum sapiente perferendis! Dolorem rerum sequi optio nam
          magni ratione velit!
        </p>

        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  );
}
