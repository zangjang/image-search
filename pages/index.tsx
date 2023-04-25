import { useState } from 'react';

import Search from '@components/Search';
import ImageList from '@domains/image/ImageList';
import { IMAGE_HISTORY_STORAGE, SORT_TYPE } from '@domains/image/constants';
import type { T_SORT_TYPE } from '@domains/image/types';
import useLocalStorage from '@hooks/useLocalStorage';
import * as styles from '@styles/home.css';
import { useQueryClient } from '@tanstack/react-query';

export default function Home() {
  const [query, setQuery] = useState('');
  const [sortType, setSortType] = useState<T_SORT_TYPE>(SORT_TYPE.ACCURACY);
  const queryClient = useQueryClient();
  const { historyList, changeHistoryList, removeAllHistoryList } = useLocalStorage(IMAGE_HISTORY_STORAGE);
  const search = (query: string) => {
    queryClient.invalidateQueries([query, SORT_TYPE.ACCURACY]);
    setQuery(query);
    setSortType(SORT_TYPE.ACCURACY);
    changeHistoryList(query);
  };
  const changeSortType = (sortType: T_SORT_TYPE) => () => {
    queryClient.invalidateQueries([query, sortType]);
    setSortType(sortType);
  };

  return (
    <>
      <header className={styles.header}>
        <Search historyList={historyList} onSearch={search} onRemoveAllHistory={removeAllHistoryList} />
        <div className={styles.sortContainer}>
          <button
            className={styles.button[sortType === SORT_TYPE.ACCURACY ? 'select' : 'normal']}
            onClick={changeSortType(SORT_TYPE.ACCURACY)}
          >
            정확도순
          </button>
          <button
            className={styles.button[sortType === SORT_TYPE.RECENCY ? 'select' : 'normal']}
            onClick={changeSortType(SORT_TYPE.RECENCY)}
          >
            최신순
          </button>
        </div>
      </header>
      <section>
        <ImageList query={query} sortType={sortType} />
      </section>
    </>
  );
}
