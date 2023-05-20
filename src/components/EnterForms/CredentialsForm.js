import { useForm } from 'react-hook-form';
import { useMainContext } from '../../MainContext';
import { apiGetStateInstance } from '../../api';
import { useState } from 'react';
import * as SC from './styled';

export const CredentialsForm = () => {
  const [isAuthError, setAuthError] = useState(false);
  const { credentials, setCredentials } = useMainContext();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setAuthError(false);

    try {
      await apiGetStateInstance({ credentials: data });
      setCredentials(data);
    } catch (error) {
      console.error(error);
      setAuthError(true);
    }
  };

  return (
    <>
      {credentials ? null : (
        <SC.FormContainer>
          <h2>Введите учетные данные</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <SC.StyledLabel>
              idInstance
              <SC.StyledInput
                {...register('idInstance', { required: 'Поле не должно быть пустым' })}
              />
              {errors.idInstance && <SC.ErrorText>{errors.idInstance.message}</SC.ErrorText>}
            </SC.StyledLabel>

            <SC.StyledLabel>
              apiTokenInstance
              <SC.StyledInput
                {...register('apiTokenInstance', { required: 'Поле не должно быть пустым' })}
              />
              {errors.apiTokenInstance && (
                <SC.ErrorText>{errors.apiTokenInstance.message}</SC.ErrorText>
              )}
            </SC.StyledLabel>

            {isAuthError && <SC.ErrorText>Введены неверные данные</SC.ErrorText>}

            <button type="submit">Далее</button>
          </form>
        </SC.FormContainer>
      )}
    </>
  );
};
