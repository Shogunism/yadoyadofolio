import Image from 'next/image';

const Header = () => (
  <header style={{ textAlign: 'center', padding: '20px' }}>
    <Image src="/header.png" alt="Header" width={600} height={150} />
  </header>
);

export default Header;
