// import { AxiosError } from "axios";
import axiosInstance from "config/axios";
import { IFilm } from "entities/films";

export const fetchFilm = async (id: string): Promise<IFilm | null> => {
  const response = await axiosInstance.get<IFilm>(`films/${id}`);

  return response.data;
};
