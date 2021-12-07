import { Container } from '@chakra-ui/react';

import Header from './Header'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <div>
        <Header />
        <Container maxW={"5xl"} py={5}>
          {children}
        </Container>
      </div>
    </>
  );
};

export default Layout;