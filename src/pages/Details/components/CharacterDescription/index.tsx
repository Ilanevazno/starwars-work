import { Descriptions } from "antd";
import { ICharacter } from "entities/characters";
import React, { ReactElement, useState } from "react";
import { camelCaseToTitles } from "utils/camelCaseToTitles";
import EditDescriptionActions from "./components/EditDescriptionActions";
import { CHARACTER_DISPLAY_INFO } from "./constants";
import { DisplayItem, Input } from "./styles";
import { useCharacterDescription } from "./useCharacterDescription";

interface ICharacterDescriptionProps {
  character: ICharacter;
}

const CharacterDescription = ({
  character,
}: ICharacterDescriptionProps): ReactElement => {
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const { values, handleChange, handleSubmit } = useCharacterDescription({
    character,
  });

  const handleEditConfirm = (): void => {
    handleSubmit();
    setIsEditing(false);
  };

  return (
    <Descriptions
      title="Character info"
      layout="vertical"
      extra={
        <EditDescriptionActions
          isEditing={isEditing}
          setIsEditing={setIsEditing}
          handleSubmit={handleEditConfirm}
        />
      }
    >
      {CHARACTER_DISPLAY_INFO.map((key) => (
        <Descriptions.Item
          key={key}
          label={camelCaseToTitles(key)}
          labelStyle={{ paddingLeft: "24px" }}
        >
          {isEditing ? (
            <Input
              key={key}
              id={key}
              name={key}
              onChange={handleChange}
              value={values[key]}
            />
          ) : (
            <DisplayItem>{character[key]}</DisplayItem>
          )}
        </Descriptions.Item>
      ))}
    </Descriptions>
  );
};

export default CharacterDescription;
