import { useEffect, useState } from "react";
import { Character } from "../../@types/character";
import api, { GetCharactersResponse } from "../../lib/api";

export const useHome = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [characters, setCharacters] = useState<Character[]>([]);
  const [responseInfo, setResponseInfo] = useState<
    GetCharactersResponse["info"]
  >({} as GetCharactersResponse["info"]);

  const fetchMoreCharacters = async () => {
    setLoading(true);
    const data = await api.characters.getAll(responseInfo.next);
    if (!data) return;
    setResponseInfo(data.info);
    setCharacters([...characters, ...data.results]);
    setLoading(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await api.characters.getAll();
      if (!data) return;
      setResponseInfo(data.info);
      setCharacters(data.results);
      setLoading(false);
    };

    fetchData();
  }, []);

  return { characters, fetchMoreCharacters, loading };
};
