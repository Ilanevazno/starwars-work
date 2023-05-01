import axiosInstance from "config/axios";
import { IVehicle } from "entities/vehicles";

export const fetchVehicle = async (id: string): Promise<IVehicle> => {
  const response = await axiosInstance.get<IVehicle>(`vehicles/${id}`);

  return response.data;
};
