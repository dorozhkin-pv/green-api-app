import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  box-sizing: border-box;
  overflow: hidden;
  background-color: #8aa28a;
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;

  & svg {
    width: 36px;
    margin-right: 12px;
  }
`;

export const AsideContainer = styled.div`
  background-color: #f0f2f5;
  padding: 12px;
`;

export const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const StyledForm = styled.form`
  flex-grow: 1;
`;

export const StyledInput = styled.input`
  width: 94%;
  border: none;
  outline: none;
  border-radius: 5px;
  height: 30px;
  padding: 0 8px;
`;
