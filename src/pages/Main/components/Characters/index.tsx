import { Input, Typography } from "antd";
import { ICharactersFilters } from "entities/characters";
import { useDebounce } from "hooks/useDebounce";
import React, { ReactElement, useState, ChangeEvent } from "react";
import CharactersTable from "../CharactersTable";
import { Container, Filters } from "./styles";

const defaultFilters: ICharactersFilters = {
  name: undefined,
};

const Characters = (): ReactElement => {
  const [filter, setFilter] = useState<ICharactersFilters>(defaultFilters);

  const debouncedFilter = useDebounce(filter, 400);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setFilter((state) => ({
      ...state,
      name: event.target.value,
    }));
  };

  return (
    <Container>
      <Filters>
        <Typography>Search by name</Typography>
        <Input placeholder="Character name" onChange={handleInputChange} />
      </Filters>
      <CharactersTable filters={debouncedFilter} />
    </Container>
  );
};

export default Characters;
