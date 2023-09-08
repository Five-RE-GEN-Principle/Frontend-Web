import { useState } from "react";
import styled from "styled-components";

import fashionIcon from "@assets/fashionIcon.png";
import beautyIcon from "@assets/beautyIcon.png";
import foodIcon from "@assets/foodIcon.png";
import restaurantIcon from "@assets/restaurantIcon.png";
import applicationIcon from "@assets/applicationIcon.png";
import { Link } from "react-router-dom";
import Carousel from "@components/Carousel";

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleIndicatorHover = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <Container>
      <Carousel currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
      <ButtonContainer>
        <Link to={"/ShoppingFashion"}>
          <MenuButton onMouseOver={() => handleIndicatorHover(0)}>
            <MenuIcon src={fashionIcon} />
            <ButtonText>Fashion</ButtonText>
          </MenuButton>
        </Link>
        <Link to={"/ShoppingBeauty"}>
          <MenuButton onMouseOver={() => handleIndicatorHover(1)}>
            <MenuIcon src={beautyIcon} />
            <ButtonText>Beauty</ButtonText>
          </MenuButton>
        </Link>

        <Link to={"/ShoppingFood"}>
          <MenuButton onMouseOver={() => handleIndicatorHover(2)}>
            <MenuIcon src={foodIcon} />
            <ButtonText>Food</ButtonText>
          </MenuButton>
        </Link>
        <Link to = {"/SearchRestaurant"}>
        <MenuButton onMouseOver={() => handleIndicatorHover(3)}>
          <MenuIcon src={restaurantIcon} />
          <ButtonText>Restaurant</ButtonText>
        </MenuButton>
        </Link>
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
  border-radius: 31px;

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
