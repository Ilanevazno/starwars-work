import { Collapse, Descriptions, Typography } from "antd";
import { IFilm } from "entities/films";
import { ContentWrapper } from "pages/Details/styles";
import React, { ReactElement } from "react";
import { RootState } from "store";
import { useAppSelector } from "store/hooks";
import { camelCaseToTitles } from "utils/camelCaseToTitles";
import Loader from "../Loader";
import { FILMS_DISPLAY_INFO } from "./constants";

const FilmsCollapse = (): ReactElement | null => {
  const { data, isLoading } = useAppSelector(
    ({ characterDetails }: RootState) => characterDetails.films
  );

  if (isLoading) {
    return <Loader />;
  }

  if (!data || data.length === 0) {
    return null;
  }

  const renderedFilms = data?.map((film: IFilm, index: number) => (
    <Collapse.Panel header={film.title} key={film.url}>
      <Descriptions layout="vertical">
        {FILMS_DISPLAY_INFO.map((key) => (
          <Descriptions.Item key={key} label={camelCaseToTitles(key)}>
            {data[index][key]}
          </Descriptions.Item>
        ))}
      </Descriptions>
    </Collapse.Panel>
  ));

  return (
    <ContentWrapper>
      <Typography.Paragraph>Films</Typography.Paragraph>
      <Collapse defaultActiveKey={["1"]}>{renderedFilms}</Collapse>
    </ContentWrapper>
  );
};

export default FilmsCollapse;
