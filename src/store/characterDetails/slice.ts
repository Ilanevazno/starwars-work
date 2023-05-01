import { createSlice } from "@reduxjs/toolkit";
import { ICharacter } from "entities/characters";
import { IFilm } from "entities/films";
import { ISpecie } from "entities/species";
import { IStarship } from "entities/starships";
import { IVehicle } from "entities/vehicles";
import {
  getCharacterDetails,
  getFilmsDetailsList,
  getSpeciesDetailsList,
  getStarshipsDetailsList,
  getVehiclesDetailsList,
} from "./thunks";

interface ICharacterDetailsState {
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

const initialState: ICharacterDetailsState = {
  character: undefined,
  isLoading: true,
  films: {
    data: undefined,
    isLoading: true,
  },
  species: {
    data: undefined,
    isLoading: true,
  },
  starships: {
    data: undefined,
    isLoading: true,
  },
  vehicles: {
    data: undefined,
    isLoading: true,
  },
};

const slice = createSlice({
  name: "characterDetails",
  initialState,
  reducers: {
    clearCharacterDetails: () => initialState,
    editLocalCharacterDetails: (state, { payload }) => {
      state.character = payload;
    },
  },
  extraReducers(builder): void {
    builder.addCase(
      getCharacterDetails.rejected,
      (state, { error: { message } }) => {
        state.error = message;
      }
    );
    builder.addCase(getCharacterDetails.fulfilled, (state, { payload }) => {
      state.character = payload;
      state.isLoading = false;
    });
    builder.addCase(getFilmsDetailsList.fulfilled, (state, { payload }) => {
      state.films.data = payload;
      state.films.isLoading = false;
    });
    builder.addCase(getSpeciesDetailsList.fulfilled, (state, { payload }) => {
      state.species.data = payload;
      state.species.isLoading = false;
    });
    builder.addCase(getStarshipsDetailsList.fulfilled, (state, { payload }) => {
      state.starships.data = payload;
      state.starships.isLoading = false;
    });
    builder.addCase(getVehiclesDetailsList.fulfilled, (state, { payload }) => {
      state.vehicles.data = payload;
      state.vehicles.isLoading = false;
    });
  },
});

export const { clearCharacterDetails, editLocalCharacterDetails } =
  slice.actions;

export default slice.reducer;
