import type { FormEvent } from 'react';

import * as styles from '@components/Search/styles.css';

const Search = () => {
  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form className={styles.container} onSubmit={handleOnSubmit}>
      <input className={styles.input} />
      <button className={styles.button} type="submit">
        검색
      </button>
    </form>
  );
};

export default Search;
