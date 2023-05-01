import { CheckOutlined, CloseOutlined, EditOutlined } from "@ant-design/icons";
import React, { ReactElement } from "react";
import { Button } from "./styles";

interface IEditDescriptionActionsProps {
  isEditing: boolean;
  handleSubmit: () => void;
  setIsEditing: (state: boolean) => void;
}

const EditDescriptionActions = ({
  isEditing,
  handleSubmit,
  setIsEditing,
}: IEditDescriptionActionsProps): ReactElement => {
  return (
    <>
      {isEditing && (
        <Button
          type="primary"
          size="large"
          icon={<CheckOutlined />}
          onClick={() => handleSubmit()}
        />
      )}
      <Button
        type="primary"
        size="large"
        icon={isEditing ? <CloseOutlined /> : <EditOutlined />}
        onClick={() => setIsEditing(!isEditing)}
      />
    </>
  );
};

export default EditDescriptionActions;
