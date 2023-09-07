import styled from "styled-components";

import frp_logo from "@assets/frp_logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Container>
      <MainMenu>
        <ListItem>패션</ListItem>
        <ListItem>화장품</ListItem>
        <ListItem>가공식품</ListItem>
        <ListItem>음식점</ListItem>
      </MainMenu>
      <Link to={"/"}>
        <Logo src={frp_logo} />
      </Link>
      <RightSide>
        <SubMenu>
          <ListItem>커뮤니티</ListItem>
          <Link to={"/about"}>
            <ListItem>정보센터</ListItem>
          </Link>

          <Link to={"/certmark"}>
            <ListItem>제로웨이스트 활동</ListItem>
          </Link>
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

  width: 90vw;
  height: 80px;

  margin-top: 30px;

  border-radius: 30px;

  box-shadow: 0px 12px 16px rgba(0, 0, 0, 0.35);
  /* box-shadow: 0px -12px 16px rgba(255, 255, 255, 0.5); */
`;

const MainMenu = styled.ul`
  display: flex;
  flex: 1;
  justify-content: space-evenly;
  /* gap: 35px; */
`;

const RightSide = styled.div`
  display: flex;
  flex: 1;

  margin: 0 50px;
`;

const SubMenu = styled.ul`
  display: flex;
  flex: 2;
  justify-content: space-evenly;
  gap: 35px;
`;

const ListItem = styled.li`
  font-size: 18px;
`;

const Logo = styled.img`
  height: 60px;
`;

const LoginText = styled.div`
  display: flex;
  flex: 1;

  justify-content: flex-end;

  font-size: 18px;
`;

export default Header;
