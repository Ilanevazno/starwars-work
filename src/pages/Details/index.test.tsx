import React from "react";
import { screen } from "@testing-library/react";
import { renderWithProviders } from "utils/test-utils";
import "@testing-library/jest-dom";
import character from "./__mocks__/character.json";

import CharacterDetails from "./index";

describe("Details page", () => {
  beforeEach(() => {
    renderWithProviders(<CharacterDetails />);
  });

  // We need to test loading state firstly, because this is always the initial state
  test("skeleton detail collapse should be rendered", () => {
    const skeleton = screen.getByTestId("details-skeleton");

    expect(skeleton).toBeInTheDocument();
  });

  test("Success rendered main details", () => {
    renderWithProviders(<CharacterDetails />, {
      preloadedState: {
        main: {
          characters: undefined,
          paginationMeta: undefined,
          isLoading: false,
        },
        characterDetails: {
          character: character as any,
          isLoading: false,
          films: {
            data: undefined,
            isLoading: false,
          },
          species: {
            data: undefined,
            isLoading: false,
          },
          starships: {
            data: undefined,
            isLoading: false,
          },
          vehicles: {
            data: undefined,
            isLoading: false,
          },
        },
      },
    });

    expect(screen.getByText("Luke Skywalker")).toBeInTheDocument();
  });
});
