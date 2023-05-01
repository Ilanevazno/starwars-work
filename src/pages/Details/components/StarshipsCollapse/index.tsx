import React, { ReactElement } from "react";
import { Collapse, Descriptions, Typography } from "antd";
import { IStarship } from "entities/starships";
import { ContentWrapper } from "pages/Details/styles";
import { RootState } from "store";
import { useAppSelector } from "store/hooks";
import Loader from "../Loader";
import { STARSHIPS_DISPLAY_INFO } from "./constants";
import { camelCaseToTitles } from "utils/camelCaseToTitles";

const StarshipsCollapse = (): ReactElement | null => {
  const { data, isLoading } = useAppSelector(
    ({ characterDetails }: RootState) => characterDetails.starships
  );

  if (isLoading) {
    return <Loader />;
  }

  if (!data || data.length === 0) {
    return null;
  }

  const renderedStarships = data?.map((starship: IStarship, index: number) => (
    <Collapse.Panel header={starship.name} key={starship.url}>
      <Descriptions layout="vertical">
        {STARSHIPS_DISPLAY_INFO.map((key) => (
          <Descriptions.Item key={key} label={camelCaseToTitles(key)}>
            {data[index][key]}
          </Descriptions.Item>
        ))}
      </Descriptions>
    </Collapse.Panel>
  ));

  return (
    <ContentWrapper>
      <Typography.Paragraph>Starships</Typography.Paragraph>
      <Collapse defaultActiveKey={["1"]}>{renderedStarships}</Collapse>
    </ContentWrapper>
  );
};

export default StarshipsCollapse;
