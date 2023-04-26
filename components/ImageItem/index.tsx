// import Image from 'next/image';
import { type FC, useEffect, useRef, useState } from 'react';

import * as styles from '@components/ImageItem/styles.css';

interface IProps {
  alt?: string;
  src: string;
}

const ImageItem: FC<IProps> = ({ alt = '', src }) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const [imgSrc, setImgSrc] = useState<string>('/images/placeholder.png');

  useEffect(() => {
    if (!imgRef.current) {
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      // 현재 화면에 보여지면 src 세팅
      if (entries[0]?.isIntersecting) {
        setImgSrc(src);
        observer.disconnect();
      }
    });
    observer.observe(imgRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.imageWrapper}>
      {/* Next Image를 사용. */}
      {/* <Image
        src={src}
        alt={alt}
        blurDataURL="/images/placeholder.png"
        placeholder="blur"
        sizes="20%,
          (max-width: 1024px) 50%,
          (max-width: 512px) 100%"
        fill
      /> */}
      <img referrerPolicy="no-referrer" ref={imgRef} className={styles.image} src={imgSrc} alt={alt} />
    </div>
  );
};

export default ImageItem;
