import axiosInstance from "config/axios";
import { ISpecie } from "entities/species";

export const fetchSpecie = async (id: string): Promise<ISpecie> => {
  const response = await axiosInstance.get<ISpecie>(`species/${id}`);

  return response.data;
};
