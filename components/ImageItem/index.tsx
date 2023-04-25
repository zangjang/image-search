import Image from 'next/image';

import type { FC } from 'react';

import * as styles from '@components/ImageItem/styles.css';

interface IProps {
  alt?: string;
  src: string;
}

const ImageItem: FC<IProps> = ({ alt = '', src }) => {
  return (
    <div className={styles.imageWrapper}>
      <Image
        src={src}
        alt={alt}
        blurDataURL="/images/placeholder.png"
        placeholder="blur"
        sizes="20%,
          (max-width: 1024px) 50%,
          (max-width: 512px) 100%"
        fill
      />
    </div>
  );
};

export default ImageItem;
