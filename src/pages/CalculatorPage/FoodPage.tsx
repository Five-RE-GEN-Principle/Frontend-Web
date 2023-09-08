import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import RadioCheckBox from "@components/RadioCheckBox";
import InfoButton from "@components/InfoButton";
import LowRadiusButton from "@components/LowRadiusButton";
import HighRadiusButton from "@components/HighRadiusButton";
import Modal from "@components/Modal";

const FoodPage = () => {
  const [rankSelected, setRankSelected] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Container>
      <SubTitle>가공식품</SubTitle>

      <RecycleScoreContainer>
        <InfoContainer>
          <InfoButton
            content={`최우수 100점
우수 80점
보통 50점
어려움 20점`}
          />
          재활용 점수
          <CheckBoxesContainer>
            <CheckBoxContainer>
              <RadioCheckBox
                checked={rankSelected === 0}
                onChange={() => setRankSelected(0)}
              />
              최우수
            </CheckBoxContainer>
            <CheckBoxContainer>
              <RadioCheckBox
                checked={rankSelected === 1}
                onChange={() => setRankSelected(1)}
              />
              우수
            </CheckBoxContainer>
            <CheckBoxContainer>
              <RadioCheckBox
                checked={rankSelected === 2}
                onChange={() => setRankSelected(2)}
              />
              보통
            </CheckBoxContainer>
            <CheckBoxContainer>
              <RadioCheckBox
                checked={rankSelected === 3}
                onChange={() => setRankSelected(3)}
              />
              어려움
            </CheckBoxContainer>
          </CheckBoxesContainer>
          <LowRadiusButton>첨부파일</LowRadiusButton>
        </InfoContainer>
        <Paragraph>
          {`환경부 고시 “환경부 포장재 재활용 용이성 등급평가”를 기준으로
재활용 점수를 계산합니다.

단순 가계산이 아닌 실제 심사 요청시,
첨부파일에 포장재 재활용 용이성 등급 평가를 통해 받은
등급 인증 서류를 제출해주세요.
`}
        </Paragraph>
        <a href="https://kprc21482.cafe24.com/admin/bbs/down.php?code=eprdown&idx=71978&no=1">
          <p>관련 내용 : 환경부 포장재 재활용 용이성 등급평가</p>
        </a>
      </RecycleScoreContainer>
      <div>
        <HighRadiusButton onClick={() => setIsOpen(true)}>
          제출하기
        </HighRadiusButton>
      </div>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        width={"30vw"}
        height={"40vh"}
      >
        <ModalContentsContainer>
          <InnerShadowBox>예상 총점 {/* 대충 점수 */} 점입니다.</InnerShadowBox>
          <InnerShadowBox>예상 순위 {/* 대충 점수 */} 위입니다.</InnerShadowBox>
          <ApplicationButtonContainer>
            <Link to={"/"}>
              <LowRadiusButton>지원하기</LowRadiusButton>
            </Link>
            <Link to={"/"}>
              <LowRadiusButton>처음으로</LowRadiusButton>
            </Link>
          </ApplicationButtonContainer>
        </ModalContentsContainer>
      </Modal>
    </Container>
  );
};

const Container = styled.div`
  width: 40vw;
  height: 70vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;

  padding: 5vh 5vw;

  border-radius: 30px;

  background-color: #fefffb;

  box-shadow: 0px 12px 16px rgba(0, 0, 0, 0.35),
    0px -12px 16px rgba(255, 255, 255, 0.5);
`;

const SubTitle = styled.div`
  font-size: 30px;
`;

const RecycleScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Paragraph = styled.p`
  font-size: 14px;
  white-space: pre-line;
  line-height: 20px;
`;

const InfoContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 7px;
`;

const CheckBoxesContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 10px;
`;

const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  margin: 0px 10px;
`;

const ModalContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;

  width: 100%;
  height: 100%;
`;

const InnerShadowBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;

  width: 80%;
  height: 33px;

  border-radius: 30px;

  background-color: #fcfff5;
  box-shadow: inset 0px 3px 4px rgba(0, 0, 0, 0.35),
    inset 0px -3px 4px rgba(255, 255, 255, 0.5);
`;

const ApplicationButtonContainer = styled.div`
  display: flex;
  gap: 30px;
`;

export default FoodPage;
