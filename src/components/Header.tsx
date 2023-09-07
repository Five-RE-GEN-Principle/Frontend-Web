import styled from "styled-components";

import frp_logo from "@assets/frp_logo.png";

const Header = () => {
  return (
    <Container>
      <MainMenu>
        <ListItem>패션</ListItem>
        <ListItem>화장품</ListItem>
        <ListItem>가공식품</ListItem>
        <ListItem>음식점</ListItem>
      </MainMenu>
      <Logo src={frp_logo} />
      <RightSide>
        <SubMenu>
          <ListItem>커뮤니티</ListItem>
          <ListItem>정보센터</ListItem>
          <ListItem>제로웨이스트 활동</ListItem>
        </SubMenu>
        <LoginText>로그인/회원가입</LoginText>
      </RightSide>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-self: center;

  justify-content: space-around;
  align-items: center;

  width: calc(100vw - 130px);
  height: 80px;

  margin-top: 30px;

  border-radius: 30px;

  box-shadow: 0px 12px 16px rgba(0, 0, 0, 0.35);
  /* box-shadow: 0px -12px 16px rgba(255, 255, 255, 0.5); */
`;

const MainMenu = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 35px;
`;

const SubMenu = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 35px;
`;

const RightSide = styled.div`
  display: flex;
  gap: 100px;
`;

const ListItem = styled.li`
  font-size: 18px;
`;

const Logo = styled.img`
  height: 60px;
`;

const LoginText = styled.div`
  font-size: 18px;
`;

export default Header;
