import { IVehicle } from "entities/vehicles";

export const VEHICLES_DISPLAY_INFO: Array<keyof IVehicle> = [
  "name",
  "model",
  "manufacturer",
  "costInCredits",
  "length",
  "maxAtmospheringSpeed",
  "crew",
  "passengers",
  "cargoCapacity",
  "consumables",
  "vehicleClass",
  "created",
  "edited",
];
