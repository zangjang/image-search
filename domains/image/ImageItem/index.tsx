import type { FC } from 'react';

import * as styles from '@domains/image/ImageItem/styles.css';

interface IProps {
  description?: string;
  src: string;
}

const ImageItem: FC<IProps> = ({ description, src }) => {
  return (
    <li className={styles.item}>
      <img className={styles.image} style={{ backgroundImage: `url(${src})` }} alt={description} />
    </li>
  );
};

export default ImageItem;
