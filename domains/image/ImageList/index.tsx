import ImageItem from '@domains/image/ImageItem';
import * as styles from '@domains/image/ImageList/styles.css';

const ImageList = () => {
  return (
    <ul className={styles.imageList}>
      <ImageItem />
      <ImageItem />
      <ImageItem />
    </ul>
  );
};

export default ImageList;
