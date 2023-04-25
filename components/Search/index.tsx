import { type ChangeEvent, type FC, type FormEvent, useEffect, useRef, useState } from 'react';

import * as styles from '@components/Search/styles.css';
import useClickAway from '@hooks/useClickAway';

interface IProps {
  historyList?: string[];
  onSearch: (query: string) => void;
  onRemoveAllHistory?: () => void;
}

const Search: FC<IProps> = ({ historyList = [], onSearch, onRemoveAllHistory = () => undefined }) => {
  const inputWrapperRef = useRef<HTMLDivElement>(null);
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
  const clickHistory = (history: string) => () => {
    onSearch(history);
    setFocus(false);
  };
  const removeAllHistory = () => {
    onRemoveAllHistory();
    setFocus(false);
  };

  useClickAway(inputWrapperRef, () => setFocus(false));

  useEffect(() => {
    inputRef.current && setTop(inputRef.current.clientHeight);
  }, []);

  return (
    <form className={styles.container} onSubmit={submit}>
      <div ref={inputWrapperRef} className={styles.inputWrapper}>
        <input ref={inputRef} className={styles.input} value={query} onChange={changeQuery} onFocus={focusInput} />
        {!query && focus && historyList.length > 0 && (
          <div className={styles.history} style={{ top }}>
            <div className={styles.historyContent}>
              {historyList.map((item, index) => (
                <div className={styles.historyItem} key={index} onClick={clickHistory(item)}>
                  {item}
                </div>
              ))}
            </div>
            <div className={styles.historyFooter}>
              <button className={styles.historyDeleteButton} onClick={removeAllHistory}>
                최근 검색어 삭제
              </button>
            </div>
          </div>
        )}
      </div>
      <button className={styles.searchButton} type="submit">
        검색
      </button>
    </form>
  );
};

export default Search;
