import axios from "axios";
const fetchResult = async (query, page = 1) => {
  const { data } = await axios.get("https://api.unsplash.com/search/photos", {
    params: {
      client_id: "9tiSGexhPeRBScFYbo4bJQMVfTPrRX_gQ6fU6IW9PqQ",
      query,
      page,
    },
  });
  return data;
};
export default fetchResult;
