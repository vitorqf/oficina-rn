import axios, { AxiosError } from "axios";
import { Character } from "../@types/character";

const BASE_URL = "https://rickandmortyapi.com/api";

const client = axios.create({
  baseURL: BASE_URL,
});

type BaseResponse = {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string;
  };
};

export interface GetCharactersResponse extends BaseResponse {
  results: Character[];
}

const getAllCharacters = async (url?: string) => {
  try {
    const response = await client.get<GetCharactersResponse>(
      url ?? "/character/"
    );
    return response.data;
  } catch (error: AxiosError | any) {
    console.error(error.message);
  }
};

const api = {
  characters: {
    getAll: getAllCharacters,
  },
};

export default api;
