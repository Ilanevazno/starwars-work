import axiosInstance from "config/axios";
import { IStarship } from "entities/starships";

export const fetchStarship = async (id: string): Promise<IStarship> => {
  const response = await axiosInstance.get<IStarship>(`starships/${id}`);

  return response.data;
};
