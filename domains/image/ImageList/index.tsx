import type { FC } from 'react';

import { Virtuoso } from 'react-virtuoso';

import ImageItem from '@components/ImageItem';
import * as styles from '@domains/image/ImageList/styles.css';
import useFetchImage from '@domains/image/api/useFetchImage';
import { T_SORT_TYPE } from '@domains/image/types';

interface IProps {
  query: string;
  sortType: T_SORT_TYPE;
}

const ImageList: FC<IProps> = ({ query, sortType }) => {
  const { data: imageList, fetchNextPage, hasNextPage, isFetchingNextPage } = useFetchImage(query, sortType);
  const loadMore = () => hasNextPage && !isFetchingNextPage && fetchNextPage();

  return (
    <div className={styles.container}>
      {imageList && (
        <Virtuoso
          className={styles.imageList}
          data={imageList.pages}
          endReached={loadMore}
          itemContent={(_, page) => (
            <div className={styles.imageGroup}>
              {page.documents.map(({ image_url, display_sitename }, index) => (
                <div key={index} className={styles.imageItem}>
                  <ImageItem src={image_url} alt={display_sitename} />
                  <div className={styles.imageText}>출처 : {display_sitename}</div>
                </div>
              ))}
            </div>
          )}
        />
      )}
    </div>
  );
};

export default ImageList;
