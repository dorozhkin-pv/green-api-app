import styled from 'styled-components';

export const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${(p) => (p.isOutgoing ? 'flex-start' : 'flex-end')};
`;

export const Message = styled.div`
  display: inline-block;
  padding: 8px 24px;
  border-radius: 14px;
  background-color: aliceblue;
`;
