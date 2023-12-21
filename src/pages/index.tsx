import { HomeContainer, Product } from '@/styles/pages/home';

import { useKeenSlider } from 'keen-slider/react';

import Image from 'next/image';

import 'keen-slider/keen-slider.min.css';
import { stripe } from '@/lib/stripe';
import { GetServerSideProps } from 'next';

interface HomeProps {
  product: {
    id: string;
    name: string;
    description: string;
    imageUrl: string;
    price: number;
  }[];
}

export default function Home({ product }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  });

  return (
    <HomeContainer ref={sliderRef} className='keen-slider'>
      {product.map((product) => {
        return (
          <Product key={product.id} className='keen-slider__slide'>
            <Image src={product.imageUrl} width={520} height={480} alt='' />

            <footer>
              <strong>{product.name}</strong>
              <span>{product.price}</span>
            </footer>
          </Product>
        );
      })}
    </HomeContainer>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  });

  const product = response.data.map((product) => {
    const price = product.default_price as Stripe.Price;

    return {
      id: product.id,
      name: product.name,
      description: product.description,
      imageUrl: product.images[0],
      price: price.unit_amount / 100,
    };
  });

  return {
    props: {
      product,
    },
  };
};
