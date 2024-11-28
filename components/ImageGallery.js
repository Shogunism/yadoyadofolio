import Image from 'next/image';
import { useState } from 'react';

const ImageGallery = () => {
  const [images] = useState([
    '/images/image1.png',
    '/images/image2.png',

    // 他の画像を追加
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
