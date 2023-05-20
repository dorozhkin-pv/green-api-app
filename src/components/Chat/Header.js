import { useMainContext } from '../../MainContext';
import { Avatar } from './Icons/Avatar';
import * as SC from './styled';

export const Header = () => {
  const { chatId } = useMainContext();

  return (
    <SC.HeaderContainer>
      <Avatar />

      <span>+{chatId}</span>
    </SC.HeaderContainer>
  );
};
