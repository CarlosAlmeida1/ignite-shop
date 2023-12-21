import { globalStyles } from '@/styles/global';
import { AppProps } from 'next/app';
import logotipo from '@/assets/logotipo-ignite-shop.svg';
import { Container, Header } from '@/styles/pages/app';
import Image from 'next/image';

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logotipo} alt='Logotipo do ignite shop' />
      </Header>
      <Component {...pageProps} />
    </Container>
  );
}
