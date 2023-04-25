import { type FC, useEffect } from 'react';

import { Virtuoso } from 'react-virtuoso';

import ImageItem from '@domains/image/ImageItem';
import * as styles from '@domains/image/ImageList/styles.css';
import useFetchImage from '@domains/image/api/useFetchImage';
import { T_SORT_TYPE } from '@domains/image/types';

interface IProps {
  query: string;
  sortType: T_SORT_TYPE;
}

const ImageList: FC<IProps> = ({ query, sortType }) => {
  const { data: imageList, fetchNextPage, isFetchingNextPage } = useFetchImage(query, sortType);
  const loadMore = () => !isFetchingNextPage && fetchNextPage();

  return (
    <div className={styles.container}>
      {imageList && (
        <Virtuoso
          className={styles.imageList}
          data={imageList.pages}
          endReached={loadMore}
          itemContent={(index, page) => (
            <div className={styles.imageGroup}>
              {page.documents.map(({ image_url }, index) => (
                <ImageItem key={index} src={image_url} />
              ))}
            </div>
          )}
        />
        // <div style={{ display: 'flex', width: '100%' }}>
        //   {imageList.pages[0].documents.map(({ image_url }, index) => (
        //     <ImageItem key={index} src={image_url} />
        //   ))}
        // </div>
      )}
    </div>
  );
};

export default ImageList;
