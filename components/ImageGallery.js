import Image from 'next/image';
import { useState } from 'react';

const ImageGallery = () => {
  const [images] = useState([
    '/images/image1.png',
    '/images/image2.png',
    '/images/image3.png',
    '/images/image4.png',
    '/images/image5.png',
    '/images/image6.png',
    '/images/image7.png',
    '/images/image8.png',
    '/images/image9.png',
    '/images/image10.png',
    '/images/image11.png',
    '/images/image12.png',

    
  ]);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px', padding: '20px' }}>
      {images.map((src, index) => (
        <Image key={index} src={src} alt={`Gallery Image ${index + 1}`} width={200} height={200} />
      ))}
    </div>
  );
};

export default ImageGallery;
