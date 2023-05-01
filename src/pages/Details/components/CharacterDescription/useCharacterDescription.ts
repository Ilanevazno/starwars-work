import { ICharacter } from "entities/characters";
import { useFormik } from "formik";
import { editLocalCharacterDetails } from "store/characterDetails/slice";
import { useAppDispatch } from "store/hooks";

interface IUseCharacterDescriptionProps {
  character: ICharacter;
}

export const useCharacterDescription = ({
  character,
}: IUseCharacterDescriptionProps) => {
  const dispatch = useAppDispatch();

  const { handleChange, handleSubmit, values } = useFormik({
    initialValues: character,
    onSubmit: (editedCharacter: ICharacter) => {
      dispatch(editLocalCharacterDetails(editedCharacter));
    },
  });

  return {
    handleChange,
    handleSubmit,
    values,
  };
};
