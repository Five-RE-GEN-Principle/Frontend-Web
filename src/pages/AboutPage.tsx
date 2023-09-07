import styled from "styled-components";

const AboutPage = () => {
  return (
    <HeadContainer>
      <div>
        <HeadContainer>
          <div>
            <Title>우리에 대해서</Title>
            <Line />
            <SubTitle>우리는 이런 일을 해요</SubTitle>
          </div>
          <Logo src={require("@assets/frp_logo.png")} />
        </HeadContainer>

        <HeadTwo>
          <div>
            <MainText>
              팝알피(5RP: 5 RE:GEN Priciple, 다섯가지 RE:GEN 원칙)는
            </MainText>
            <MainText>지속 가능한 제로 웨이스트를 실천하기 위해,</MainText>
            <MainText> 각 기업들의 제품들에 점수를 매겨,</MainText>
            <MainText>
              일정 점수가 넘는 기업들에게 친환경 인증 마크를 부여하고,
            </MainText>
            <MainText>인증마크를 획득한 기업의 제품을</MainText>
            <MainText>
              우리의 마켓 플랫폼에서 추천 제품으로 홍보를 하고 있어요.
            </MainText>
            <Main />
            <MainText>
              또한 이 외에도 제로 웨이스트를 실천하기 위한 방안을 찾고 있답니다!
            </MainText>
            <Main />
            <MainText>우리가 하는 일에 대해 더 궁금하거나,</MainText>
            <MainText>
              우리 팀에 참여하고 싶다면 아래의 연락처로 연락해주세요!
            </MainText>
            <Main />
            <MainText>Email: OOOO@gmail.com</MainText>
          </div>
          <LineTwo />
        </HeadTwo>
      </div>
      <Smile src={require("@assets/smile.png")} />
    </HeadContainer>
  );
};

const LineTwo = styled.div`
  width: 1px;
  height: 293px;
  background-color: #917b56;
  margin-left: 110px;
`;

const HeadTwo = styled.div`
  display: flex;
  flex-direction: row;
`;

const HeadContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const Smile = styled.img`
  width: 500px;
  height: 700px;
  margin-left: 130px;
`;

const Logo = styled.img`
  width: 230px;
  height: 160px;
  margin-left: 90px;
`;

const Main = styled.br`
  margin-left: 100px;
`;

const MainText = styled.p`
  margin-left: 100px;
`;

const Title = styled.h1`
  margin-left: 100px;
`;
const SubTitle = styled.h2`
  color: #00580e;
  margin-left: 100px;
  margin-bottom: 34px;
`;

const Line = styled.div`
  width: 134px;
  height: 1px;
  background-color: #917b56;
  margin-left: 100px;
  margin-bottom: 49px;
`;

export default AboutPage;
