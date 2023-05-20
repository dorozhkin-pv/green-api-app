import styled from 'styled-components';

export const FormContainer = styled.div`
  box-sizing: border-box;
  background-color: #e1e1e1;
  height: 100%;
  padding: 16px;

  h2 {
    margin: 0;
  }

  form {
    margin-top: 24px;
  }
`;

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 16px;
`;

export const StyledInput = styled.input`
  width: 50%;
  border: none;
  outline: none;
  border-radius: 5px;
  height: 30px;
  padding: 0 8px;
  margin-top: 4px;
`;

export const ErrorText = styled.div`
  font-size: 14px;
  margin-top: 4px;
  color: red;
`;

export const StyledButton = styled.button``;
