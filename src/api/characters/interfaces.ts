import { ICharacter, ICharactersFilters } from "../../entities/characters";
import { IPagination } from "../interfaces";

export interface IPaginationRequest {
  page?: number;
}

export interface ICharactersRequest extends IPaginationRequest {
  filters?: ICharactersFilters;
}

export interface IChracterResponse extends IPagination {
  results: ICharacter[];
}
