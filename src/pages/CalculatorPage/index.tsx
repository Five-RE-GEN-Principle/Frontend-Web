import Title from "@components/Title";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Calculator = () => {
  return (
    <Container>
      <ContentsContainer>
        <SubTitleText>카테고리</SubTitleText>
        <ButtonContainer>
          <Link to={"fashion"}>
            <MainButton>패션</MainButton>
          </Link>
          <Link to={"beauty"}>
            <MainButton>화장품</MainButton>
          </Link>
          <Link to={"food"}>
            <MainButton>가공식품</MainButton>
          </Link>
          <Link to={"restaurant"}>
            <MainButton>음식점</MainButton>
          </Link>
        </ButtonContainer>
      </ContentsContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
`;

const ContentsContainer = styled.div`
  width: 50vw;
  height: 60vh;

  display: flex;
  flex-direction: column;

  justify-self: center;
  align-self: center;
  justify-content: center;
  align-items: center;
  gap: 40px;

  padding: 5vh 5vw;

  border-radius: 30px;

  background-color: #fefffb;

  box-shadow: 0px 12px 16px rgba(0, 0, 0, 0.35),
    0px -12px 16px rgba(255, 255, 255, 0.5);
`;

const SubTitleText = styled.div`
  font-size: 26px;
  font-weight: 500;

  display: flex;
  justify-content: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
`;

const MainButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 15vw;
  height: 17vh;

  font-size: 30px;
  font-weight: 100;

  border-radius: 30px;

  background-color: #fcfff5;

  box-shadow: 0px 12px 16px rgba(0, 0, 0, 0.35),
    0px -12px 16px rgba(255, 255, 255, 0.5);
`;

export default Calculator;
