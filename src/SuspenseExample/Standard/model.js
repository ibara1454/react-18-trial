import { selector } from "recoil";
import useSWR from "swr";
import { fetchItemDetail } from "../data";

const fetcher = async () => {
  const detail = await fetchItemDetail();
  return detail;
};

export const useFetch = () => {
  const { data, error } = useSWR("/endpoint", fetcher);
  return { data, error };
};
