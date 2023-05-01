import axiosInstance from "config/axios";
import { ICharacter } from "entities/characters";
import { insertIfObj } from "utils/insertIfObj";
import { ICharactersRequest, IChracterResponse } from "./interfaces";

export const fetchCharacters = async ({
  filters,
  page,
}: ICharactersRequest): Promise<IChracterResponse> => {
  const response = await axiosInstance.get<IChracterResponse>("people", {
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
