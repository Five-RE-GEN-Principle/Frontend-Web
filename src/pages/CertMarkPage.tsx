import { useState } from "react";
import styled from "styled-components";

import Modal from "@components/Modal";
import Title from "@components/Title";
import LowRadiusButton from "@components/LowRadiusButton";

const list = [
  {
    name: "제품 A",
    score: "132/150",
    passing: "합격",
    detail: "보기",
  },
  {
    name: "제품 B",
    score: "149/150",
    passing: "합격",
    detail: "보기",
  },
  {
    name: "제품 C",
    score: "79/150",
    passing: "합격",
    detail: "보기",
  },
  {
    name: "제품 D",
    score: "",
    passing: "점수 심사중",
    detail: "",
  },
];

const scoreList = [50, 20, 10, 80];

const CertMarkPage = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

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
              <Contents>
                <LowRadiusButton onClick={() => setIsOpen(true)}>
                  보기
                </LowRadiusButton>
              </Contents>
            </ContentContainer>
          ))}
        </StatusBoard>
      </StatusBoardContainer>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        width={"40vw"}
        height={"50vh"}
      >
        <ScoreContainer>
          <Score>재사용 점수: {scoreList[0]}점</Score>
          <Score>재활용 점수: {scoreList[1]}점</Score>
          <Score>새활용 점수: {scoreList[2]}점</Score>
          <Score>총점: {scoreList[3]}점</Score>
        </ScoreContainer>
      </Modal>
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

const OptionContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 15px;
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
  height: 60vh;
  background-color: #b4d680;

  box-shadow: 0px 12px 16px rgba(0, 0, 0, 0.35);
`;

const StatusBoard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2vh;

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
const ScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
const Score = styled.div``;

export default CertMarkPage;
