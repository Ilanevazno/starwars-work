import React, { ReactElement } from "react";
import { Collapse, Descriptions, Typography } from "antd";
import { IVehicle } from "entities/vehicles";
import { ContentWrapper } from "pages/Details/styles";
import { RootState } from "store";
import { useAppSelector } from "store/hooks";
import { VEHICLES_DISPLAY_INFO } from "./constants";
import Loader from "../Loader";
import { camelCaseToTitles } from "utils/camelCaseToTitles";

const VehiclesCollapse = (): ReactElement | null => {
  const { data, isLoading } = useAppSelector(
    ({ characterDetails }: RootState) => characterDetails.vehicles
  );

  if (isLoading) {
    return <Loader />;
  }

  if (!data || data.length === 0) {
    return null;
  }

  const renderedVehicles = data.map((vehicle: IVehicle, index: number) => (
    <Collapse.Panel header={vehicle.name} key={vehicle.url}>
      <Descriptions layout="vertical">
        {VEHICLES_DISPLAY_INFO.map((key) => (
          <Descriptions.Item key={key} label={camelCaseToTitles(key)}>
            {data[index][key]}
          </Descriptions.Item>
        ))}
      </Descriptions>
    </Collapse.Panel>
  ));

  return (
    <ContentWrapper>
      <Typography.Paragraph>Vehicles</Typography.Paragraph>
      <Collapse defaultActiveKey={["1"]}>{renderedVehicles}</Collapse>
    </ContentWrapper>
  );
};

export default VehiclesCollapse;
