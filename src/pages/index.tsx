import { HomeContainer, Product } from '@/styles/pages/home';

import camisa1 from '@/assets/1.png';
import camisa2 from '@/assets/2.png';
import camisa3 from '@/assets/3.png';
import Image from 'next/image';

export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image src={camisa1} width={520} height={480} />

        <footer>
          <strong>Camisa X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product>
        <Image src={camisa2} width={520} height={480} />

        <footer>
          <strong>Camisa Y</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  );
}
