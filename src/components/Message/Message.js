import { CheckMarkIcon } from './CheckMarkIcon';
import * as SC from './styled';

export const Message = ({ message }) => {
  const { title, isOutgoing, isDelivered } = message;

  return (
    <SC.MessageContainer isOutgoing={isOutgoing}>
      <SC.Message>
        {title}
        {isDelivered && <CheckMarkIcon />}
      </SC.Message>
    </SC.MessageContainer>
  );
};
