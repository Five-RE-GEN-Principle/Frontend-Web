import Information from "@components/Information";
import styled from "styled-components";


const list = [{글번호: 1, 제목: "집에 가고싶다[99]", 작성자: "최영찬★", 작성일: "2023.09.04", 조회수: 2}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {},]

const BulletinBoardPage = () => {
  return (
    <Container>
      <Information />
      <StatusBoardContainer>
        <OptionContainer>
          <Option>글번호</Option>
          <Option>제목</Option>
          <Option>작성자</Option>
          <Option>작성일</Option>
          <Option>조회수</Option>
        </OptionContainer>

        <StatusBoard>
          {list.map((data, index) => (
          <ContentsContainer key={index}>
            <Contents>{data.글번호}</Contents>
            <Contents>{data.제목}</Contents>
            <Contents>{data.작성자}</Contents>
            <Contents>{data.작성일}</Contents>
            <Contents>{data.조회수}</Contents>
          </ContentsContainer>))}
        </StatusBoard>
      </StatusBoardContainer>
    </Container>
  );
};

const Contents = styled.div`
display : flex;
  font-weight: bold;
  justify-content: center;
  flex: 1;
  align-items : center;
`;

const ContentsContainer = styled.div`
  display: flex;
  height: 7vh;
  border-bottom: 1px solid black;
`;

const Container = styled.div`
  display: flex;

  justify-content: flex-start;
  align-items: flex-start;
  gap: 30px;

  padding: 0 3vw 0 3vw;
`;

const OptionContainer = styled.div`
  display: flex;
  margin-top: 15px;
  justify-content: space-around;
`;

const Option = styled.h2`
  display: flex;
  justify-content: center;

  color: #fefffb;
  font-size: 20px;
  flex: 1;
`;

const StatusBoardContainer = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: space-between;
  border-radius: 30px;
  width: 950px;
  height: 550px;
  background-color: #b4d680;

  box-shadow: 0px 12px 16px rgba(0, 0, 0, 0.35);
`;

const StatusBoard = styled.div`
  display: flex;
  flex-direction: column;

  border-radius: 30px;

  width: 100%;
  height: 90%;
  background-color: #fefffb;
`;

export default BulletinBoardPage;
