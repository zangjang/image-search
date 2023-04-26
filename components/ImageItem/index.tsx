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
      <img ref={imgRef} className={styles.image} src={imgSrc} alt={alt} />
    </div>
  );
};

export default ImageItem;
