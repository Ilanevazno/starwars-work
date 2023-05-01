import React, { ReactElement } from "react";
import { PageDefaultWrapper } from "styles";
import Characters from "./components/Characters";

const MainPage = (): ReactElement => {
  return (
    <PageDefaultWrapper>
      <Characters />
    </PageDefaultWrapper>
  );
};

export default MainPage;
