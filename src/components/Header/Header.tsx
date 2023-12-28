import Image from 'next/image';
import logotipo from '@/assets/logotipo-ignite-shop.svg';
import { HeaderContainer } from './styles';
import Link from 'next/link';
import Cart from '../Cart';
import { useRouter } from 'next/router';

export default function Header() {
  const { pathname } = useRouter();

  const showCartButton = pathname !== '/success';

  return (
    <HeaderContainer>
      <Link href='/'>
        <Image src={logotipo} alt='Logotipo do ignite shop' />
      </Link>
      {showCartButton && <Cart />}
    </HeaderContainer>
  );
}
