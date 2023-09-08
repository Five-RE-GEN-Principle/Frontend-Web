import LowRadiusButton from "@components/LowRadiusButton";
import Title from "@components/Title";
import styled from "styled-components";

const list = [
  {
    제목: "친환경 의류 내구성 문의",
    조회수: 22,
    글쓴이: "이승준",
    작성일: "2023.09.01",
  },
  {},
  {},
  {},
  {},
  {},
  {},
];

const QnAPage = () => (
  <Container>
    <Title>Q&A</Title>

    <QnAContainer>
      <Button>
        <LowRadiusButton>글쓰기</LowRadiusButton>
      </Button>
      <ContentsContainer>
        <Option>제목</Option>
        <Option>조회수</Option>
        <Option>글쓴이</Option>
        <Option>작성일자</Option>
      </ContentsContainer>

      {list.map((data, index) => (
        <Line key={index}>
          <ContentsTwo>{data.제목}</ContentsTwo>
          <ContentsTwo>{data.조회수}</ContentsTwo>
          <ContentsTwo>{data.글쓴이}</ContentsTwo>
          <ContentsTwo>{data.작성일}</ContentsTwo>
        </Line>
      ))}
    </QnAContainer>

    <TextBottom>
      <BoxCollection>
        <PushBox>
          <BoxLetter>{`<`}</BoxLetter>
        </PushBox>
        <PushBox>
          <BoxLetter>1</BoxLetter>
        </PushBox>
        <PushBox>
          <BoxLetter>2</BoxLetter>
        </PushBox>
        <PushBox>
          <BoxLetter>3</BoxLetter>
        </PushBox>
        <PushBox>
          <BoxLetter>{`>`}</BoxLetter>
        </PushBox>
      </BoxCollection>


    </TextBottom>
  </Container>
);

const TextBottom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 30px;
`;

const BoxLetter = styled.div`
  font-weight: bold;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const BoxCollection = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const PushBox = styled.div`
  display: flex;
  width: 50px;
  height: 50px;
  border-radius: 10px;

  background-color: #fcfff5;
  box-shadow: 0px 12px 16px rgba(0, 0, 0, 0.35);

  justify-content: center;
  align-items: center;
`;

const ContentsTwo = styled.div`
  display: flex;
  justify-content: center;

  font-size: 17px;
  flex: 1;
  margin-top: 10px;

  color: #363636;
`;
const Line = styled.div`
  display: flex;
  height: 6vh;

  border-bottom: 1px solid black;
`;

const Option = styled.div`
  display: flex;
  justify-content: center;

  font-size: 20px;
  flex: 1;
  margin-top: 8px;
`;

const QnAContainer = styled.div`
  padding: 0 15vw;
`;
const ContentsContainer = styled.div`
  display: flex;
  height: 6vh;

  border-bottom: 2px solid black;
  border-top: 2px solid black;

  justify-content: space-around;
`;

const Button = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export default QnAPage;
