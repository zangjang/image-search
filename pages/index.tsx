import { useState } from 'react';

import Search from '@components/Search';
import ImageList from '@domains/image/ImageList';
import { SORT_TYPE } from '@domains/image/constants';
import type { T_SORT_TYPE } from '@domains/image/types';
import * as styles from '@styles/home.css';

export default function Home() {
  const [query, setQuery] = useState('');
  const [sortType, setSortType] = useState<T_SORT_TYPE>(SORT_TYPE.ACCURACY);
  const search = (query: string) => setQuery(query);
  const changeSortType = (sortType: T_SORT_TYPE) => setSortType(sortType);

  return (
    <>
      <header className={styles.header}>
        <Search onSearch={search} />
      </header>
      <section>
        <ImageList query={query} sortType={sortType} />
      </section>
    </>
  );
}
