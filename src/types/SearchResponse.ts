// exported type has all fields not required

type SearchData = {
  results: Array<object>;
  total_pages: number;
  [field: string]: any;
};

export type SearchResponse = Partial<SearchData>;
