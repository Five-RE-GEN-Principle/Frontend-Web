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
  const [rankSelected, setRankSelected] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Container>
      <SubTitle>화장품</SubTitle>
      <ContentsContainer>
        <ReuseContainer>
          <InfoContainer>
            <InfoButton
              content={`전 지역에 있음 100점
수도권에만 집약 50점
없음 0점`}
            />
            재사용 가능 여부
          </InfoContainer>
          <ReuseContentsContainer>
            <CheckBoxContainer>
              <RadioCheckBox
                checked={selected === "yes"}
                onChange={() => setSelected("yes")}
              />
              예 <LowRadiusButton>첨부파일</LowRadiusButton>
            </CheckBoxContainer>
            <Paragraph>
              {`첨부파일 및 상세설명에
            재사용 인프라 구축 여부 및
            인프라 접근성에 대해 작성해주시기 바랍니다.`}
            </Paragraph>
            <TextInput
              width="20vw"
              height="80px"
              placeholder=" 구체적인 내용을 적어주세요."
            />
            <CheckBoxContainer>
              <RadioCheckBox
                checked={selected === "no"}
                onChange={() => setSelected("no")}
              />
              아니요
            </CheckBoxContainer>
          </ReuseContentsContainer>
        </ReuseContainer>

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
      </ContentsContainer>
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
  width: 70vw;
  height: 70vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;

  border-radius: 30px;

  background-color: #fefffb;

  box-shadow: 0px 12px 16px rgba(0, 0, 0, 0.35),
    0px -12px 16px rgba(255, 255, 255, 0.5);
`;

const SubTitle = styled.div`
  font-size: 30px;
`;

const ContentsContainer = styled.div`
  display: flex;
  gap: 50px;
`;

const ReuseContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const InfoContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 7px;
`;

const ReuseContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Paragraph = styled.p`
  font-size: 14px;
  white-space: pre-line;
  line-height: 20px;
`;

const RecycleScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
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
