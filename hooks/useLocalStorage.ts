import { useEffect, useState } from 'react';

export default function useLocalStorage(key: string) {
  const [historyList, setHistoryList] = useState<string[]>([]);
  const changeHistoryList = (history: string) => {
    const newHistoryList = [history, ...historyList.filter((item) => item !== history)];
    setHistoryList(newHistoryList);
    localStorage.setItem(key, JSON.stringify(newHistoryList));
  };
  const removeAllHistoryList = () => {
    setHistoryList([]);
    localStorage.removeItem(key);
  };

  useEffect(() => {
    const historyListText = localStorage.getItem(key);
    let historyList: string[] = [];

    if (historyListText) {
      try {
        const tmpHistoryList = JSON.parse(historyListText);

        if (Array.isArray(tmpHistoryList)) {
          historyList = tmpHistoryList;
        }
      } catch {
        historyList = [];
      }
    }

    setHistoryList(historyList);
  }, []);

  return {
    historyList,
    changeHistoryList,
    removeAllHistoryList,
  };
}
