import { type ChangeEvent, type FC, type FormEvent, useEffect, useRef, useState } from 'react';

import * as styles from '@components/Search/styles.css';

interface IProps {
  historyList?: string[];
  onSearch: (query: string) => void;
}

const Search: FC<IProps> = ({ historyList = [], onSearch }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState('');
  const [top, setTop] = useState(0);
  const [focus, setFocus] = useState(false);
  const changeQuery = (e: ChangeEvent<HTMLInputElement>) => setQuery(e.target.value);
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(query);
  };
  const focusInput = () => setFocus(true);
  const blurInput = () => setFocus(false);

  useEffect(() => {
    if (inputRef.current) {
      setTop(inputRef.current.clientHeight);
    }
  }, []);

  return (
    <form className={styles.container} onSubmit={submit}>
      <div className={styles.inputWrapper}>
        <input
          ref={inputRef}
          className={styles.input}
          value={query}
          onChange={changeQuery}
          onFocus={focusInput}
          onBlur={blurInput}
        />
        {!query && focus && historyList.length && (
          <div className={styles.history} style={{ top }}>
            {historyList.map((item, index) => (
              <div key={index}>{item}</div>
            ))}
          </div>
        )}
      </div>
      <button className={styles.button} type="submit">
        검색
      </button>
    </form>
  );
};

export default Search;
