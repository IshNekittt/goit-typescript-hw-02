import axios from "axios";
import { SearchResponse } from "../types/SearchResponse";

const fetchResult = async (
  query: string,
  page = 1
): Promise<SearchResponse> => {
  const { data } = await axios.get<Record<string, unknown>>(
    "https://api.unsplash.com/search/photos",
    {
      params: {
        client_id: "9tiSGexhPeRBScFYbo4bJQMVfTPrRX_gQ6fU6IW9PqQ",
        query,
        page,
      },
    }
  );
  return data;
};
export default fetchResult;
