import { type FC, useEffect, useRef } from 'react';

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
  const containerRef = useRef<HTMLDivElement>();
  const { data: imageList, isFetching, fetchNextPage, hasNextPage } = useFetchImage(query, sortType);
  const loadMore = () => hasNextPage && !isFetching && fetchNextPage();

  useEffect(() => {
    if (isFetching || !containerRef.current) {
      return;
    }

    const { scrollHeight, scrollTop, clientHeight } = containerRef.current;

    // 큰 화면에서 스크롤이 없을 때 화면 꽉채우기 위한 api 호출
    if (scrollTop === scrollHeight - clientHeight) {
      loadMore();
    }
  }, [isFetching]);

  return (
    <div className={styles.container}>
      {imageList && (
        <Virtuoso
          scrollerRef={(e) => e instanceof HTMLDivElement && (containerRef.current = e)}
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
          // onScroll={(e) => {
          //   const { scrollHeight, scrollTop, clientHeight } = e.currentTarget;

          //   if (scrollTop >= scrollHeight - clientHeight) {
          //     loadMore();
          //   }
          // }}
        />
      )}
    </div>
  );
};

export default ImageList;
