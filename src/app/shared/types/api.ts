export type SearchResult<T> = [
  {
    page: number;
    pages: number;
    per_page: string;
    total: number;
  },
  T[]
];

export type SearchResultError = [
  {
    message: string;
  }
];
