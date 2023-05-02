import { ICharacter, ICharactersFilters } from "../../entities/characters";
import { IPagination } from "../interfaces";

export interface IPaginationRequest {
  page?: number;
}

export interface ICharactersRequest extends IPaginationRequest {
  filters?: ICharactersFilters;
}

export interface ICharacterResponse extends IPagination {
  results: ICharacter[];
}
