import React, { PropsWithChildren, ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { configureStore, PreloadedState } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import type { RootState } from "store";
import mainReducer from "store/main/slice";
import characterDetailsReducer from "store/characterDetails/slice";

interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
  preloadedState?: PreloadedState<RootState>;
  store?: any;
}

export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {
      main: {
        characters: undefined,
        paginationMeta: undefined,
        isLoading: true,
      },
      characterDetails: {
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
      },
    },
    store = configureStore({
      reducer: { main: mainReducer, characterDetails: characterDetailsReducer },
      preloadedState,
    }),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) {
  function Wrapper({ children }: PropsWithChildren<{}>): ReactElement {
    return <Provider store={store}>{children}</Provider>;
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
