import { ICharacter } from "entities/characters";
import { IFilm } from "entities/films";
import { ISpecie } from "entities/species";
import { IStarship } from "entities/starships";
import { IVehicle } from "entities/vehicles";

export enum ErrorMessages {
  CharacterDetails = "Unable to load character details",
}

export interface ICharacterDetailsState {
  character?: ICharacter;
  isLoading: boolean;
  error?: string;
  films: {
    data?: IFilm[];
    isLoading: boolean;
  };
  species: {
    data?: ISpecie[];
    isLoading: boolean;
  };
  starships: {
    data?: IStarship[];
    isLoading: boolean;
  };
  vehicles: {
    data?: IVehicle[];
    isLoading: boolean;
  };
}
