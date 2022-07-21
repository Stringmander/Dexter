import useSWR from "swr";
import { fetcher } from "../";

function useNatDexList() {
  const { data, error } = useSWR("https://pokeapi.co/api/v2/pokemon", fetcher);

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
}

export default useNatDexList;
