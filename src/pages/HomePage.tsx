import styled from "styled-components";

import fashionIcon from "@assets/fashionIcon.png";
import beautyIcon from "@assets/beautyIcon.png";
import foodIcon from "@assets/foodIcon.png";
import restaurantIcon from "@assets/restaurantIcon.png";
import applicationIcon from "@assets/applicationIcon.png";
import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <Container>
      <Carousel>대충 아주 머찐 랭킹 이미지</Carousel>
      <ButtonContainer>
      <Link to={"/ShoppingFashion"}>
        <MenuButton>
          <MenuIcon src={fashionIcon} />
          <ButtonText>Fashion</ButtonText>
        </MenuButton>
      </Link>
      <Link to={"/ShoppingBeauty"}>
        <MenuButton>
          <MenuIcon src={beautyIcon} />
          <ButtonText>Beauty</ButtonText>
        </MenuButton>
      </Link>
      <Link to={"/ShoppingFood"}>
        <MenuButton>
          <MenuIcon src={foodIcon} />
          <ButtonText>Food</ButtonText>
        </MenuButton>
      </Link>
        <MenuButton>
          <MenuIcon src={restaurantIcon} />
          <ButtonText>Restaurant</ButtonText>
        </MenuButton>
        <MenuButton>
          <MenuIcon src={applicationIcon} />
          <ButtonText>Application</ButtonText>
        </MenuButton>
      </ButtonContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Carousel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;

  width: 100vw;
  height: 300px;
  background-color: #d8f6ee;

  margin-top: 30px;
  margin-bottom: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;

  align-self: center;

  width: 80vw;
`;

const MenuButton = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  gap: 10px;

  width: 160px;
  height: 160px;

  background-color: #fcfff5;

  border: solid 1px #ffffff;
  border-radius: 30px;

  box-shadow: 0px 12px 16px rgba(0, 0, 0, 0.35);
`;

const MenuIcon = styled.img`
  width: 80px;
  height: 80px;
`;

const ButtonText = styled.div`
  font-weight: 100;
  font-size: 30px;
`;

export default HomePage;
