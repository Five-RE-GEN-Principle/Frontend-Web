import styled from "styled-components";

import kakao from "@assets/kakao.png";
import google from "@assets/google.png";
import naver from "@assets/naver.png";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <Container>
      <LoginContainer>
        <Login>로그인</Login>

        <ImaginContainer>
          <Link to={"/"}>
            <img
              src={google}
              width={300}
              height={50}
              alt={"google로그인 이미지"}
            />
          </Link>
          <Link to={"/"}>
            <img
              src={kakao}
              width={300}
              height={50}
              alt={"kakao로그인 이미지"}
            />
          </Link>

          <Link to={"/"}>
            <img
              src={naver}
              width={300}
              height={50}
              alt={"naver로그인 이미지"}
            />
          </Link>
        </ImaginContainer>
      </LoginContainer>
    </Container>
  );
};

const ImaginContainer = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
`;

const Login = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;

  font-size: 27px;
  color: #00580e;
`;

const Container = styled.div`
  position: absolute;
  display: flex;

  justify-content: center;
  align-self: center;

  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.35);
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-self: center;

  width: 350px;
  height: 350px;
  border-radius: 30px;

  background-color: #fefffb;
  box-shadow: 0px 12px 16px rgba(0, 0, 0, 0.35);

  gap: 65px;
`;

export default LoginPage;
