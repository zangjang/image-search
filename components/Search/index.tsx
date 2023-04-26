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
  const [historyTopPosition, setHistoryTopPosition] = useState(0);
  const [isFocus, setIsFocus] = useState(false);
  const changeQuery = (e: ChangeEvent<HTMLInputElement>) => setQuery(e.target.value);
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(query);
    setIsFocus(false);
  };
  const focusInput = () => setIsFocus(true);
  const clickHistory = (history: string) => () => {
    onSearch(history);
    setQuery(history);
    setIsFocus(false);
  };
  const removeAllHistory = () => {
    onRemoveAllHistory();
    setIsFocus(false);
  };
  const filteredHistory = historyList.filter((item) => item.includes(query));

  useClickAway(inputWrapperRef, () => setIsFocus(false));

  useEffect(() => {
    inputRef.current && setHistoryTopPosition(inputRef.current.clientHeight);
  }, []);

  return (
    <form className={styles.container} onSubmit={submit}>
      <div ref={inputWrapperRef} className={styles.inputWrapper}>
        <input ref={inputRef} className={styles.input} value={query} onChange={changeQuery} onFocus={focusInput} />
        {isFocus && filteredHistory.length > 0 && (
          <div className={styles.history} style={{ top: `${historyTopPosition}px` }}>
            <div className={styles.historyContent}>
              {filteredHistory.map((item, index) => (
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
