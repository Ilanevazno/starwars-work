import React, { ReactElement } from "react";
import { Button, Result } from "antd";
import { useNavigate } from "react-router";

const ErrorScreen = (): ReactElement => {
  const navigate = useNavigate();

  return (
    <Result
      status="500"
      title="500"
      subTitle="Sorry, something went wrong."
      extra={
        <Button type="primary" onClick={() => navigate("/")}>
          Go back
        </Button>
      }
    />
  );
};

export default ErrorScreen;
