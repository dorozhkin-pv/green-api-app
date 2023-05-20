import { useForm } from 'react-hook-form';
import { useMainContext } from '../../MainContext';
import * as SC from './styled';

export const ChatIdForm = () => {
  const { credentials, setChatId } = useMainContext();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setChatId(data.chatId);
  };

  return (
    <>
      {!credentials ? null : (
        <SC.FormContainer>
          <h2>Введите Id чата</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <SC.StyledLabel>
              chatId
              <SC.StyledInput
                {...register('chatId', {
                  required: 'Поле не должно быть пустым',
                  minLength: {
                    value: 11,
                    message: 'Поле chatId должнобыть в формате 79998887766',
                  },
                  maxLength: {
                    value: 11,
                    message: 'Поле chatId должнобыть в формате 79998887766',
                  },
                })}
              />
              {errors.chatId && <SC.ErrorText>{errors.chatId.message}</SC.ErrorText>}
            </SC.StyledLabel>

            <SC.StyledButton type="submit">Далее</SC.StyledButton>
          </form>
        </SC.FormContainer>
      )}
    </>
  );
};
