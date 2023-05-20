import { apiSendMessage } from '../../api';
import { useForm } from 'react-hook-form';
import { useMainContext } from '../../MainContext';
import { Smile } from './Icons/Smile';
import { Clip } from './Icons/Clip';
import { Microphone } from './Icons/Microphone';
import * as SC from './styled';

export const Footer = () => {
  const { setMessages, credentials, chatId } = useMainContext();
  const { handleSubmit, register, reset } = useForm();

  const onSubmit = async (data) => {
    if (!data || !data.message) return;

    try {
      const res = await apiSendMessage({ credentials, chatId, message: data.message });

      if (res.idMessage) {
        setMessages((prev) => {
          return [
            ...prev,
            {
              id: res.idMessage,
              title: data.message,
              isOutgoing: true,
            },
          ];
        });
      }
    } catch (error) {
      console.error(error);
    } finally {
      reset();
    }
  };

  return (
    <SC.FooterContainer>
      <Smile />
      <Clip />

      <SC.StyledForm onSubmit={handleSubmit(onSubmit)}>
        <SC.StyledInput {...register('message')} />
      </SC.StyledForm>

      <Microphone />
    </SC.FooterContainer>
  );
};
