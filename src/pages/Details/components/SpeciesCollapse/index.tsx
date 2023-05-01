import { Collapse, Descriptions, Typography } from "antd";
import { ISpecie } from "entities/species";
import { ContentWrapper } from "pages/Details/styles";
import React, { ReactElement } from "react";
import { RootState } from "store";
import { useAppSelector } from "store/hooks";
import { camelCaseToTitles } from "utils/camelCaseToTitles";
import Loader from "../Loader";
import { SPECIES_DISPLAY_INFO } from "./constants";

const SpeciesCollapse = (): ReactElement | null => {
  const { data, isLoading } = useAppSelector(
    ({ characterDetails }: RootState) => characterDetails.species
  );

  if (isLoading) {
    return <Loader />;
  }

  if (!data || data.length === 0) {
    return null;
  }

  const renderedSpecies = data?.map((specie: ISpecie, index: number) => (
    <Collapse.Panel header={specie.name} key={specie.url}>
      <Descriptions layout="vertical">
        {SPECIES_DISPLAY_INFO.map((key) => (
          <Descriptions.Item key={key} label={camelCaseToTitles(key)}>
            {data[index][key]}
          </Descriptions.Item>
        ))}
      </Descriptions>
    </Collapse.Panel>
  ));

  return (
    <ContentWrapper>
      <Typography.Paragraph>Species</Typography.Paragraph>
      <Collapse defaultActiveKey={["1"]}>{renderedSpecies}</Collapse>
    </ContentWrapper>
  );
};

export default SpeciesCollapse;
