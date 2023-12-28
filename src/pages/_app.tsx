import { globalStyles } from '@/styles/global';
import { AppProps } from 'next/app';
import { Container } from '@/styles/pages/app';
import Header from '@/components/Header/Header';
import CartContextProvider from '@/contexts/CartContext';
import 'react-toastify/dist/ReactToastify.css';
import { Slide, ToastContainer } from 'react-toastify';

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartContextProvider>
      <Container>
        <Header />
        <Component {...pageProps} />
        <ToastContainer
          position='top-center'
          autoClose={2500}
          transition={Slide}
          pauseOnHover={false}
          closeOnClick={true}
          toastStyle={{ zIndex: 9999, background: 'none', color: 'white' }}
        />
      </Container>
    </CartContextProvider>
  );
}
