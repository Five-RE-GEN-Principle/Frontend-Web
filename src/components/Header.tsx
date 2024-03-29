import { useState } from "react";
import styled from "styled-components";

import FRPLogo from "@assets/FRPLogo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false); // Dropdown을 표시할지 결정하는 상태
  const [informShowDropdown, setInformShowDropdown] = useState(false); // Dropdown을 표시할지 결정하는 상태

  return (
    <Container>
      <MainMenu>
        <Link to={"/ShoppingFashion"}>
          <ListItem>패션</ListItem>
        </Link>
        <Link to={"/ShoppingBeauty"}>
          <ListItem>화장품</ListItem>
        </Link>
        <Link to={"/ShoppingFood"}>
          <ListItem>가공식품</ListItem>
        </Link>
        <Link to={"/SearchRestaurant"}>
          <ListItem>음식점</ListItem>
        </Link>
      </MainMenu>
      <Link to={"/"}>
        <Logo src={FRPLogo} />
      </Link>
      <RightSide>
        <SubMenu>
          <Link to={"/bulletinboard"}>
            <ListItem>커뮤니티</ListItem>
          </Link>
          <ListItem
            onMouseEnter={() => setInformShowDropdown(true)}
            onMouseLeave={() => setInformShowDropdown(false)}
          >
            {informShowDropdown && (
              <InformDropdownMenu>
                <Link to={"/about"}>About</Link>
                <Link to={"/qna"}>Q&A</Link>
                <Link to={"/notice"}>공지사항</Link>
              </InformDropdownMenu>
            )}
            정보센터
          </ListItem>

          <ListItem
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            제로웨이스트 활동
            {showDropdown && (
              <DropdownMenu>
                <Link to={"/certmark"}>제로웨이스트 점수 심사 현황</Link>
                <Link to={"/calculator"}>제로웨이스트 점수 계산기</Link>
              </DropdownMenu>
            )}
          </ListItem>
        </SubMenu>
        <Link to={"/login"}>
        <LoginText>로그인/회원가입</LoginText></Link>
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

  /* margin-top: 15px; */
  margin-bottom: 30px;

  border-radius: 30px;
  /* 
  box-shadow: 0px 12px 16px rgba(0, 0, 0, 0.35),
    0px -12px 16px rgba(255, 255, 255, 0.5); */
`;

const MainMenu = styled.ul`
  display: flex;
  flex: 1;
  justify-content: space-evenly;
  align-items: center;

  height: 100%;
`;

const RightSide = styled.div`
  display: flex;
  flex: 1;
  align-items: center;

  height: 100%;

  margin: 0 50px;
`;

const SubMenu = styled.ul`
  display: flex;
  height: 100%;
  flex: 2;
  justify-content: space-evenly;
  gap: 35px;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;

  font-size: 18px;
  height: 100%;
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

const DropdownMenu = styled.div`
  position: absolute;

  display: flex;
  flex-direction: column;
  gap: 15px;

  background-color: white;

  border: 1px solid white;
  border-radius: 10px;

  margin-top: 120px;
  padding: 20px 15px;

  box-shadow: 0px 12px 16px rgba(0, 0, 0, 0.35);

  z-index: 1;
`;

const InformDropdownMenu = styled.div`
  position: absolute;

  display: flex;
  flex-direction: column;
  gap: 15px;

  background-color: white;

  border: 1px solid white;
  border-radius: 10px;

  margin-top: 145px;
  padding: 20px 15px;

  box-shadow: 0px 12px 16px rgba(0, 0, 0, 0.35);

  z-index: 1;
`;

export default Header;
