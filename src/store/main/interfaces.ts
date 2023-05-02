import { IPagination } from "api/interfaces";
import { ICharacter } from "entities/characters";

export enum ErrorMessages {
  CharactersList = "Unable to load characters list",
}

export interface MainPageState {
  characters?: ICharacter[];
  isLoading: boolean;
  paginationMeta?: IPagination;
  error?: string;
}
