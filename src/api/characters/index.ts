import axiosInstance from "config/axios";
import { ICharacter } from "entities/characters";
import { insertIfObj } from "utils/insertIfObj";
import { ICharactersRequest, ICharacterResponse } from "./interfaces";

export const fetchCharacters = async ({
  filters,
  page,
}: ICharactersRequest): Promise<ICharacterResponse> => {
  const response = await axiosInstance.get<ICharacterResponse>("people", {
    params: {
      ...insertIfObj(Boolean(page), {
        page,
      }),
      ...insertIfObj(Boolean(filters?.name), {
        search: filters?.name,
      }),
    },
  });

  return response.data;
};

export const fetchCharacterDetails = async (
  id: string
): Promise<ICharacter> => {
  const response = await axiosInstance.get<ICharacter>(`people/${id}`);

  return response.data;
};
