import * as SC from './styled';

export const Layout = ({ aside, header, main, footer }) => {
  return (
    <SC.Container>
      <SC.Aside>{aside}</SC.Aside>
      <SC.Content>
        <SC.Header>{header}</SC.Header>
        <SC.Main>{main}</SC.Main>
        <SC.Footer>{footer}</SC.Footer>
      </SC.Content>
    </SC.Container>
  );
};
