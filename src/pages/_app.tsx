import { globalStyles } from '@/styles/global';
import { AppProps } from 'next/app';
import logotipo from '@/assets/logotipo-ignite-shop.svg';
import { Container, Header } from '@/styles/pages/app';

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <img src={logotipo.src} alt='Logotipo do ignite shop' />
      </Header>
      <Component {...pageProps} />
    </Container>
  );
}
