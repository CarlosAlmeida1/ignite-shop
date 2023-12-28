import { styled } from '@/styles';
import * as Dialog from '@radix-ui/react-dialog';

export const CartContent = styled(Dialog.Content, {
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  width: '30rem',
  background: '$gray800',
  padding: '3rem',
  paddingTop: '4.5rem',
  boxShadow: '-4px 0px 30px rgba(0, 0, 0, 0.8)',
  display: 'flex',
  flexDirection: 'column',

  h2: {
    fontWeight: 700,
    fontSize: '$lg',
    color: '$gray100',
    marginBottom: '2rem',
  },

  '> section': {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    flex: 1,
    overflowY: 'auto',
  },
});

export const CartCloseButton = styled(Dialog.Close, {
  background: 'none',
  border: 'none',
  position: 'absolute',
  top: '1.25rem',
  right: '1.25rem',
  color: '$gray500',
});

export const CartProduct = styled('div', {
  width: '100%',
  display: 'flex',
  gap: '1.25rem',
  alignContent: 'center',
  height: '5.8125rem',
});

export const CartProductImage = styled('div', {
  width: '5.8125rem',
  height: '5.8125rem',
  borderRadius: 8,
  background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  },
});

export const CartProductDetails = styled('div', {
  height: '100%',
  display: 'flex',
  flexDirection: 'column',

  p: {
    color: '$gray300',
    fontSize: '$md',
  },

  strong: {
    fontSize: '$md',
    fontWeight: 700,
    color: '$gray100',
  },

  button: {
    marginTop: 'auto',
    width: 'max-content',
    background: 'none',
    border: 'none',
    color: '$green500',
    fontSize: '1rem',
    fontWeight: 700,
  },
});

export const CartFinishValues = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginTop: 'auto',

  button: {
    width: '100%',
    background: '$green500',
    color: '$white',
    fontSize: '$md',
    height: '4.3125rem',
    border: 'none',
    borderRadius: 8,
    fontWeight: 700,

    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed',
    },

    '&:not(:disabled):hover': {
      backgroundColor: '$green300',
    },
  },
});

export const FinishValuesDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
  marginBottom: 55,

  div: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    p: {
      fontSize: '$md',
      color: '$gray300',
    },

    '&:last-of-type': {
      fontWeight: 'bold',

      span: {
        fontSize: '$md',
      },

      p: {
        color: '$gray100',
        fontSize: '$xl',
      },
    },
  },
});
