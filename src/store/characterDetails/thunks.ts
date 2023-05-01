import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "api";
import { IFilm } from "entities/films";
import { ISpecie } from "entities/species";
import { IStarship } from "entities/starships";
import { IVehicle } from "entities/vehicles";
import { extractIdFromUrl } from "utils/extractIdFromUrl";
import { ErrorMessages } from "./interfaces";

export const getFilmsDetailsList = createAsyncThunk(
  "GET_FILM_DETAILS_LIST",
  async (listIds: string[]) => {
    try {
      const promises = listIds.map((url: string) => {
        const filmId = extractIdFromUrl(url);

        return filmId ? api.films.fetchFilm(filmId) : undefined;
      });

      return (await Promise.all(promises)) as IFilm[];
    } catch (error) {
      console.log(error);

      return [];
    }
  }
);

export const getSpeciesDetailsList = createAsyncThunk(
  "GET_SPECIES_DETAILS_LIST",
  async (listIds: string[]) => {
    try {
      const promises = listIds.map((url: string) => {
        const specieId = extractIdFromUrl(url);

        return specieId ? api.species.fetchSpecie(specieId) : undefined;
      });

      return (await Promise.all(promises)) as ISpecie[];
    } catch (error) {
      console.log(error);

      return [];
    }
  }
);

export const getStarshipsDetailsList = createAsyncThunk(
  "GET_STARSHIPS_DETAILS_LIST",
  async (listIds: string[]) => {
    try {
      const promises = listIds.map((url: string) => {
        const starshipId = extractIdFromUrl(url);

        return starshipId ? api.starships.fetchStarship(starshipId) : undefined;
      });

      return (await Promise.all(promises)) as IStarship[];
    } catch (error) {
      console.log(error);

      return [];
    }
  }
);

export const getVehiclesDetailsList = createAsyncThunk(
  "GET_VEHICLES_DETAILS_LIST",
  async (listIds: string[]) => {
    try {
      const promises = listIds.map((url: string) => {
        const vehicleId = extractIdFromUrl(url);

        return vehicleId ? api.vehicles.fetchVehicle(vehicleId) : undefined;
      });

      return (await Promise.all(promises)) as IVehicle[];
    } catch (error) {
      console.log(error);

      return [];
    }
  }
);

export const getCharacterDetails = createAsyncThunk(
  "GET_CHARACTER_DETAILS",
  async (id: string, { dispatch }) => {
    try {
      const response = await api.characters.fetchCharacterDetails(id);

      dispatch(getFilmsDetailsList(response.films));
      dispatch(getSpeciesDetailsList(response.species));
      dispatch(getStarshipsDetailsList(response.starships));
      dispatch(getVehiclesDetailsList(response.vehicles));

      return response;
    } catch {
      throw new Error(ErrorMessages.CharacterDetails);
    }
  }
);
