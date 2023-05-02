import React from "react";
import { screen } from "@testing-library/react";
import CharactersTable from "./index";
import { renderWithProviders } from "utils/test-utils";
import "@testing-library/jest-dom";

import characters from "./__mocks__/characters.json";
import { ICharacter } from "entities/characters";

describe("CharactersTable component", () => {
  const mockFilters = {
    name: undefined,
  };

  test("component should be rendered", () => {
    renderWithProviders(<CharactersTable filters={mockFilters} />);

    expect(screen.getByText("Gender")).toBeInTheDocument();
  });

  test("component have list with one element in state", () => {
    const initialCharacters = [characters] as unknown as ICharacter[];

    const { getByText } = renderWithProviders(
      <CharactersTable filters={mockFilters} />,
      {
        preloadedState: {
          main: {
            characters: initialCharacters,
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
      }
    );

    expect(getByText("Luke Skywalker")).toBeInTheDocument();
  });
});
