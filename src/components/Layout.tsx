import { Outlet } from "react-router-dom";
import styled from "styled-components";

import Header from "./Header";

const Layout = () => {
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Layout;
