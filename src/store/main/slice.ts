import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "api";
import {
  ICharactersRequest,
  ICharacterResponse,
} from "api/characters/interfaces";
import { ErrorMessages, MainPageState } from "./interfaces";

const initialState: MainPageState = {
  characters: undefined,
  paginationMeta: undefined,
  isLoading: true,
};

export const getCharacters = createAsyncThunk(
  "GET_CHARACTERS",
  async (payload: ICharactersRequest = {}) => {
    try {
      const response = await api.characters.fetchCharacters(payload);

      return response;
    } catch {
      throw new Error(ErrorMessages.CharactersList);
    }
  }
);

const slice = createSlice({
  name: "main",
  initialState,
  reducers: {},
  extraReducers(builder): void {
    builder.addCase(getCharacters.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(getCharacters.rejected, (state) => {
      state.isLoading = false;
    });

    builder.addCase(
      getCharacters.fulfilled,
      (state, { payload }: PayloadAction<ICharacterResponse>) => {
        const { count, next, previous } = payload;

        state.characters = payload.results;

        state.paginationMeta = {
          count,
          next,
          previous,
        };
        state.isLoading = false;
      }
    );
  },
});

export default slice.reducer;
