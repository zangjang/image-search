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
  // 검색
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(query);
    setIsFocus(false);
  };
  // 포커스 설정
  const focusInput = () => setIsFocus(true);
  // 히스토리 클릭
  const clickHistory = (history: string) => () => {
    onSearch(history);
    setQuery(history);
    setIsFocus(false);
  };
  // 히스토리 전체 삭제
  const removeAllHistory = () => {
    onRemoveAllHistory();
    setIsFocus(false);
  };
  const filteredHistory = historyList.filter((item) => item.includes(query));

  // 히스토리 영역이 있을 때, 히스토리 영역 외를 클릭 했을 때에 대한 처리
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
