import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
  display: flex;
`;

export const Content = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 0 16px;
  height: 60px;
  flex-shrink: 0;
  background-color: #f0f2f5;
`;

export const Aside = styled.div`
  width: 400px;
  flex-shrink: 0;
  background-color: antiquewhite;

  & > div {
    margin-top: 60px;
    background-color: #84aef4;
  }
`;

export const Main = styled.div`
  padding: 16px;
  flex-grow: 1;
  overflow-y: scroll;
  background-image: url('./bg.jpg');
  background-size: no-repeat;
  background-position: center;
  background-size: cover;

  display: flex;
  flex-direction: column;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: #d7d0cd;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #777;
    border-radius: 4px;
  }
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 16px;
  min-height: 60px;
  background-color: #f0f2f5;
`;
