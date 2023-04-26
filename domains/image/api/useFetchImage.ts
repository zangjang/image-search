import { SORT_TYPE } from '@domains/image/constants';
import type { T_SORT_TYPE } from '@domains/image/types';
import kakaoAxios from '@libs/kakaoAxios';
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
  // 무한 스크롤을 위한 쿼리. 페이지 단위 처리 가능
  return useInfiniteQuery(
    [query, sortType],
    async ({ pageParam = 1 }) => {
      const { data } = await kakaoAxios.get<IResponse>('/v2/search/image', {
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
