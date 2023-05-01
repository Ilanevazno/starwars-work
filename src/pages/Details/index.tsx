import { Skeleton } from "antd";
import ErrorScreen from "components/ErrorScreen";
import React, { ReactElement, useEffect } from "react";
import { useParams } from "react-router-dom";
import { RootState } from "store";
import { clearCharacterDetails } from "store/characterDetails/slice";
import { getCharacterDetails } from "store/characterDetails/thunks";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { PageDefaultWrapper } from "styles";
import CharacterDescription from "./components/CharacterDescription";
import FilmsCollapse from "./components/FilmsCollapse";
import SpeciesCollapse from "./components/SpeciesCollapse";
import StarshipsCollapse from "./components/StarshipsCollapse";
import VehiclesCollapse from "./components/VehiclesCollapse";
import { ContentWrapper } from "./styles";

const CharacterDetails = (): ReactElement => {
  const { character, isLoading, error } = useAppSelector(
    ({ characterDetails }: RootState) => characterDetails
  );

  const dispatch = useAppDispatch();
  const { id } = useParams();

  const renderedCharacterDescriptions = (): ReactElement | undefined => {
    if (isLoading) {
      return <Skeleton paragraph={{ rows: 10 }} active />;
    }

    return character && <CharacterDescription character={character} />;
  };

  useEffect((): (() => void) => {
    id && dispatch(getCharacterDetails(id));

    return () => dispatch(clearCharacterDetails());
  }, []);

  if (error) {
    return <ErrorScreen />;
  }

  return (
    <PageDefaultWrapper>
      <ContentWrapper>{renderedCharacterDescriptions()}</ContentWrapper>

      <FilmsCollapse />

      <SpeciesCollapse />

      <StarshipsCollapse />

      <VehiclesCollapse />
    </PageDefaultWrapper>
  );
};

export default CharacterDetails;
