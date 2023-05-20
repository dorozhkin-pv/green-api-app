import { Layout } from '../Layout/Layout';
import { Aside } from './Aside';
import { Header } from './Header';
import { Main } from './Main';
import { Footer } from './Footer';
import * as SC from './styled';

export const Chat = () => {
  return (
    <SC.Container>
      <Layout aside={<Aside />} header={<Header />} main={<Main />} footer={<Footer />} />
    </SC.Container>
  );
};
