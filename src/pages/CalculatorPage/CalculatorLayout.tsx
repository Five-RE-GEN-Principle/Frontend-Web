import { Outlet } from "react-router-dom";

import Title from "@components/Title";
import styled from "styled-components";

const CalculatorLayout = () => {
  return (
    <Container>
      <Title>제로 웨이스트 점수 계산기</Title>
      <Outlet />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
`;

export default CalculatorLayout;
