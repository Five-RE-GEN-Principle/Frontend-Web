import Title from "@components/Title";
import styled from "styled-components";

const list = [
  {
    name: "이승준",
    score: "99",
    passing: "합격",
    detail: "보기",
  },
  {
    name: "최영찬",
    score: "212",
    passing: "합격",
    detail: "보기",
  },
  {
    name: "신라면",
    score: "20",
    passing: "불합격",
    detail: "보기",
  },
  {
    name: "주니핫도그",
    score: "점수 심사중",
    passing: "점수 심사중",
    detail: "보기",
  },
];

const CertMarkPage = () => {
  return (
    <Container>
      <Title>제로 웨이스트 점수 심사 현황</Title>
      <StatusBoardContainer>
        <OptionContainer>
          <Option>제품명</Option>
          <Option>점수</Option>
          <Option>인증 합격 여부</Option>
          <Option>상세정보</Option>
        </OptionContainer>

        <StatusBoard>
          {list.map((item, index) => (
            <ContentContainer key={index}>
              <Contents>{item.name}</Contents>
              <Contents>{item.score}</Contents>
              <Contents>{item.passing}</Contents>
              <Contents>{item.detail}</Contents>
            </ContentContainer>
          ))}
        </StatusBoard>
      </StatusBoardContainer>
    </Container>
  );
};

const Contents = styled.p`
  font-size: 20px;
  flex: 1;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
`;

const Line = styled.div`
  width: 180px;
  height: 5px;
  margin-top: 15px;
  background-color: #917b56;
`;

const OptionContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;

const Option = styled.h2`
  flex: 1;
  display: flex;
  justify-content: center;
  color: #fefffb;
  font-size: 20px;
`;

const StatusBoardContainer = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: space-between;
  border-radius: 30px;
  width: 80vw;
  height: 65vh;
  background-color: #b4d680;

  box-shadow: 0px 12px 16px rgba(0, 0, 0, 0.35);
  margin-top: 40px;
`;

const StatusBoard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3vh;

  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;

  width: 100%;
  height: 90%;
  background-color: #fefffb;

`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 3vh;
`;

export default CertMarkPage;
