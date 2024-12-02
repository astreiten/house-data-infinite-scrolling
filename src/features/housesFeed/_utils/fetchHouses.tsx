import IHouseAPIResponse from "../../../interfaces/IHouseAPIResponse";

const fetchHouses = async (
  page: number,
  perPage: number
): Promise<IHouseAPIResponse> => {
  const params = `?page=${page}&per_page=${perPage}`;
  const response = await fetch(import.meta.env.VITE_HOUSES_API_URL + params);
  const data = await response.json();

  return data;
};

export default fetchHouses;
