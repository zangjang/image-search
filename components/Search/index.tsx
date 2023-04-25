import { type ChangeEvent, type FC, type FormEvent, useState } from 'react';

import * as styles from '@components/Search/styles.css';

interface IProps {
  onSearch: (query: string) => void;
}

const Search: FC<IProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const changeQuery = (e: ChangeEvent<HTMLInputElement>) => setQuery(e.target.value);
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form className={styles.container} onSubmit={submit}>
      <input className={styles.input} value={query} onChange={changeQuery} />
      <button className={styles.button} type="submit">
        검색
      </button>
    </form>
  );
};

export default Search;
