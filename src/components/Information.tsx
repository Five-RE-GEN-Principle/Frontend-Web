import styled from "styled-components";
import LowRadiusButton from "./LowRadiusButton";

const Information = () => {
  return (
    <Container>
      <NickNameBox>
        <GrayBox>
          <GrayContainer>
            <Gray />
            <InformationContainer>
              <InformationBox>
                <NickName>닉네임</NickName>
                <MemberRating>멤버등급</MemberRating>
              </InformationBox>
              <div>example@gmail.com</div>
            </InformationContainer>
          </GrayContainer>
          <RecommemdationCode>추천코드:BOWLING</RecommemdationCode>
        </GrayBox>

        <UserInformation>
          <RecommemdationCode>구매횟수: 203회</RecommemdationCode>
          <RecommemdationCode>글 작성: 20회</RecommemdationCode>
        <ForButton>
          <ForButtonTwo>
            <RecommemdationCode>댓글 작성: 20회</RecommemdationCode>
            <RecommemdationCode>보유 쿠폰: 3장</RecommemdationCode>
            </ForButtonTwo>
            <Button>
              <LowRadiusButton>글쓰기</LowRadiusButton>
            </Button>
          </ForButton>
        </UserInformation>
      </NickNameBox>

      <ProductRanking>

<EcoProductRanking>친환경 제품 랭킹</EcoProductRanking>

<Bunch>
<EcoProductRanking>1위</EcoProductRanking>
<GrayTwo />
</Bunch>

<Bunch>
<EcoProductRanking>2위</EcoProductRanking>
<GrayTwo />
</Bunch>
      </ProductRanking>


    </Container>
  );
};

const EcoProductRanking = styled.div`
font-weight: bold;
display:flex;

justify-content: start;
`

const Bunch = styled.div`
  display : flex;
  flex-direction: column;

justify-content:center;
align-items : center;
`


const ForButtonTwo = styled.div`
display: flex;
flex-direction: column;

gap: 10px;

`

const GrayTwo = styled.div`
  display: flex;
  width: 100px;
  height: 100px;

  background-color: #d9d9d9;
`;

const ForButton = styled.div`
display: flex;
justify-content: space-between;
`

const ProductRanking = styled.div`
  display: flex;
  flex-direction: column;

  width: 20vw;
  height: 48vh;
  border-radius: 30px;

  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.35),
    0px -3px 4px rgba(255, 255, 255, 0.5);

  background-color: #fcfff5;

  padding: 20px;
  gap: 20px;
`;

const Button = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const GrayBox = styled.div`
  display: flex;
  flex-direction: column;

  gap: 10px;
`;
const UserInformation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const RecommemdationCode = styled.div`
  color: #303030;
  font-size: 15px;
`;

const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;

  margin-top: 5px;
`;

const MemberRating = styled.div`
  color: #5b5858;
  font-size: 15px;
`;

const GrayContainer = styled.div`
  display: flex;
  gap: 30px;
`;

const NickName = styled.div`
  font-weight: bold;
  display: flex;
  font-size: 15px;
`;

const InformationBox = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Gray = styled.div`
  display: flex;
  width: 45px;
  height: 45px;

  background-color: #d9d9d9;
`;

const NickNameBox = styled.div`
  display: flex;
  flex-direction: column;

  width: 20 vw;
  height: 33vh;
  border-radius: 30px;

  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.35),
    0px -3px 4px rgba(255, 255, 255, 0.5);

  background-color: #fcfff5;

  padding: 20px;
  gap: 20px;
`;

export default Information;
