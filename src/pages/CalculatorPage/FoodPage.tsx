import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import RadioCheckBox from "@components/RadioCheckBox";
import InfoButton from "@components/InfoButton";
import LowRadiusButton from "@components/LowRadiusButton";
import HighRadiusButton from "@components/HighRadiusButton";
import Modal from "@components/Modal";
import TextInput from "@components/TextInput";

const FoodPage = () => {
  const [rankSelected, setRankSelected] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [apply, setApply] = useState<boolean>(false);

  // 임시 점수 계산 함수
  const scoreCalculator = (index: number) => {
    if (index === 0) return 100;
    else if (index === 1) return 80;
    else if (index === 2) return 50;
    else return 20;
  };

  // 임시 순위 계산 함수
  const rankCalculator = (index: number) => {
    if (index === 0) return 1;
    else if (index === 1) return 3;
    else if (index === 2) return 8;
    else return 15;
  };

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
        height={"60vh"}
      >
        {apply ? (
          <ApplyModalContentsContainer>
            <ApplyTitle>지원하기</ApplyTitle>
            <TitleLine />
            <TextInput width="80%" height="30px" placeholder="기업명" />
            <TextInput
              width="80%"
              height="30px"
              placeholder="카테고리 (패션, 식품, 화장품, 음식점)"
            />
            <TextInput
              width="80%"
              height="30px"
              placeholder="세부 카테고리 (ex. 패션이면 상의, 아우터, 등등)"
            />
            <TextInput
              width="80%"
              height="30px"
              placeholder="제품명 (카테고리가 음식점인 경우, 대표메뉴 작성)"
            />
            <TextInput
              width="80%"
              height="30px"
              placeholder="가격 (음식점인 경우 대표메뉴 가격) "
            />
            <LowRadiusButtonContainer>
              <LowRadiusButton>첨부파일</LowRadiusButton>
            </LowRadiusButtonContainer>
            <p style={{ fontSize: 12 }}>
              제품 판매 등록시 고객에게 노출될 제품 상세 정보를 첨부해주세요.
            </p>
            <Link to="/certmark">
              <LowRadiusButton>제출하기</LowRadiusButton>
            </Link>
          </ApplyModalContentsContainer>
        ) : (
          <ModalContentsContainer>
            <InnerShadowBox>
              예상 총점 {scoreCalculator(rankSelected!)} 점입니다.
            </InnerShadowBox>
            <InnerShadowBox>
              예상 순위 {rankCalculator(rankSelected!)} 위입니다.
            </InnerShadowBox>
            <ApplicationButtonContainer>
              <LowRadiusButton onClick={() => setApply(true)}>
                지원하기
              </LowRadiusButton>
              <Link to={"/"}>
                <LowRadiusButton>처음으로</LowRadiusButton>
              </Link>
            </ApplicationButtonContainer>
          </ModalContentsContainer>
        )}
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

const ApplyModalContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

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

const ApplyTitle = styled.h2`
  font-size: 24px;
  font-weight: 500;
`;

const TitleLine = styled.div`
  width: 80px;
  height: 5px;

  margin-bottom: 10px;

  background-color: #917b56;
`;

const LowRadiusButtonContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: flex-start;
`;

export default FoodPage;
