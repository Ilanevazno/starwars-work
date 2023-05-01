import React from "react";
import { render } from "@testing-library/react";
import CharactersTable from "./index";

describe("CharactersTable component", () => {
  test("component should be rendered", () => {
    const mockFilters = {
      name: undefined,
    };

    const { container } = render(<CharactersTable filters={mockFilters} />);

    expect(container).toBeInTheDocument();
  });
});
