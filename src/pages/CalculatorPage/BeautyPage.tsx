import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import RadioCheckBox from "@components/RadioCheckBox";
import InfoButton from "@components/InfoButton";
import LowRadiusButton from "@components/LowRadiusButton";
import TextInput from "@components/TextInput";
import HighRadiusButton from "@components/HighRadiusButton";
import Modal from "@components/Modal";

const BeautyPage = () => {
  const [selected, setSelected] = useState<string | null>(null); // 여기서 "yes" 또는 "no" 또는 null 값 저장
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Container>
      <SubTitle>화장품</SubTitle>
      <ReuseContainer>
        <InfoContainer>
          <InfoButton content="사용된 재활용 섬유의 비율에 따라 점수가 정해집니다." />
          재활용 섬유 비율
          <LowRadiusButton>첨부파일</LowRadiusButton>
        </InfoContainer>
        <TextInput
          width="100%"
          height="50px"
          placeholder=" 심사를 요청하는 의류의 재활용 섬유 비율을 작성해주세요."
        />
      </ReuseContainer>
      <RecycleScoreContainer>
        <InfoContainer>
          <InfoButton
            content={`제품 자체가 새활용 제품인 경우 50점
실제로 구현한 제품 제출 25점
대안만 제출 10점
제출하지 않음 0점`}
          />
          새활용 가능 여부
          <CheckBoxesContainer>
            <CheckBoxContainer>
              <RadioCheckBox
                checked={selected === "yes"}
                onChange={() => setSelected("yes")}
              />
              예
            </CheckBoxContainer>
            <CheckBoxContainer>
              <RadioCheckBox
                checked={selected === "no"}
                onChange={() => setSelected("no")}
              />
              아니요
            </CheckBoxContainer>
          </CheckBoxesContainer>
          <LowRadiusButton>첨부파일</LowRadiusButton>
        </InfoContainer>
        새활용 사안이 존재하는 경우, 첨부해서 제출해주시길 바랍니다.
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
  width: 50vw;
  height: 60vh;

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

const ReuseContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  width: 80%;
`;

const InfoContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 7px;
`;

const RecycleScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  width: 80%;
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

export default BeautyPage;
