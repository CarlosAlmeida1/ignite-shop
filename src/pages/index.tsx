import { styled } from '@/styles';

const Button = styled('button', {
  backgroundColor: '$green500',
  borderRadius: '5px',
  border: 'none',
  padding: '10px 20px',

  span: {
    fontWeight: 'bold',
  },

  '&:hover': {
    color: 'blue',
    fill: 'BurlyWood',
    backgroundColor: '#cc00ff',
  },
});

export default function Home() {
  return (
    <Button>
      <span>Teste </span>
      enviar
    </Button>
  );
}
