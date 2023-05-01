import { IStarship } from "entities/starships";

export const STARSHIPS_DISPLAY_INFO: Array<keyof IStarship> = [
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
  "hyperdriveRating",
  "MGLT",
  "starshipClass",
  "created",
  "edited",
];
