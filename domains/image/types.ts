import type { SORT_TYPE } from '@domains/image/constants';

export type T_SORT_TYPE = (typeof SORT_TYPE)[keyof typeof SORT_TYPE];
