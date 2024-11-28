import Image from 'next/image';

const Header = () => (
  <header style={{ textAlign: 'center', padding: '20px' }}>
    <Image src="/header.jpeg" alt="Header" width={600} height={150} />
  </header>
);

export default Header;
