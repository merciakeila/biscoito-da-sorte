import { api } from "../config";
import { RANDOM_COOKIE, GET_COOKIE } from "../endpoints";

interface IRandomCookie {
  slip_id: number;
  advice: string;
}

const getRandomCookie = async () => {
  const response = await api.get(RANDOM_COOKIE);
  console.log(response);
  return response.data.slip as IRandomCookie;
};

const getCookie = async (id: number) => {
  const response = await api.get(GET_COOKIE(id));
  console.log(response);
  return response.data.slip as IRandomCookie;
};

export default {
  getRandomCookie,
  getCookie,
};
