import axios from 'axios';

import { SORT_TYPE } from '@domains/image/constants';
import type { T_SORT_TYPE } from '@domains/image/types';
import { useInfiniteQuery } from '@tanstack/react-query';

interface I_IMAGE_META {
  total_count: number;
  pageable_count: number;
  is_end: boolean;
}

interface I_IMAGE_DOCUMENTS {
  collection: string;
  thumbnail_url: string;
  image_url: string;
  width: number;
  height: number;
  display_sitename: string;
  doc_url: string;
  datetime: string;
}

interface IResponse {
  meta: I_IMAGE_META;
  documents: I_IMAGE_DOCUMENTS[];
}

export default function useFetchImage(query: string, sortType: T_SORT_TYPE = SORT_TYPE.ACCURACY) {
  return useInfiniteQuery(
    [query, sortType],
    async ({ pageParam = 1 }) => {
      const { data } = await axios.get<IResponse>('https://dapi.kakao.com/v2/search/image', {
        headers: { Authorization: 'KakaoAK 8c507d9c4486cff701ddb2bd307fa0c0' },
        params: { query, sort: sortType, page: pageParam, size: 10 },
      });

      return data;
    },
    {
      enabled: !!query,
      getNextPageParam: (lastPage, page) => (lastPage.meta.is_end ? undefined : page.length + 1),
    },
  );
}
