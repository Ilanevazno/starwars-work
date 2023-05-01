import React, { ReactElement } from "react";
import { ContentWrapper } from "pages/Details/styles";
import { Skeleton } from "antd";

const Loader = (): ReactElement => {
  return (
    <ContentWrapper>
      <Skeleton active paragraph />
    </ContentWrapper>
  );
};

export default Loader;
