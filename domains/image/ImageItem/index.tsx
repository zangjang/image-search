import type { FC } from 'react';

import * as styles from '@domains/image/ImageItem/styles.css';

interface IProps {
  description?: string;
  src: string;
}

const ImageItem: FC<IProps> = ({ description, src }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <img className={styles.image} src={src} alt={description} />
      </div>
    </div>
  );
};

export default ImageItem;
