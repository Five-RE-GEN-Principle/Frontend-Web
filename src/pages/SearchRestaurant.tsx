import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import TextInput from "@components/TextInput";



const ShoppingFood = () =>{
  return (
    <Container>
      <SubBody>
        <MainTitle_SubBody>
          품목
        </MainTitle_SubBody>
        <MainCategory>
        <Link to={"/ShoppingFashion"}>
          <MainCategoryContent>
            패션
          </MainCategoryContent>
        </Link>
          <MainCategoryLine>
          </MainCategoryLine>
        <Link to={"/ShoppingBeauty"}>
          <MainCategoryContent>
            화장품
          </MainCategoryContent>
        </Link>
          <MainCategoryLine>
          </MainCategoryLine>
        <Link to={"/ShoppingFood"}>  
          <MainCategoryContent>
            가공식품
          </MainCategoryContent>
        </Link>
          <MainCategoryLine>
          </MainCategoryLine>
          <Link to={"/SearchRestaurant"}>
          <MainCategoryContent>
            음식점
          </MainCategoryContent>
          </Link>
          <MainCategoryLine>
          </MainCategoryLine>
        </MainCategory>
      </SubBody>
      <MainBody>
        <MainInfo1>
          내 주변 친환경 포장재 사용 음식점
        </MainInfo1>
        <MainInfo2>
          내 주변에 마커로 표시된 음식점을 확인하고 이용해보세요.
        </MainInfo2>
        <Map></Map>
      </MainBody>

    </Container>
  );
};

const Container = styled.div`
  display: flex;
  gap : 12.5px;
  margin : 0 160px;
  flex-direction: row;
`;

const SubBody = styled.div`
  display: flex;
  flex-direction: column;
  width : 13vw;
  height : 81vh;
  background-color: #FEFFFB;
  align-items: flex-start;
  border-radius: 30px;
  padding:24px;
  box-shadow: 0px 12px 16px rgba(0, 0, 0, 0.35),
    0px -12px 16px rgba(255, 255, 255, 0.5);
`;

const MainBody = styled.div`
  display: flex;
  flex-direction: column;
  width : 69vw;
  height : 81vh;
  background-color: #FEFFFB;
  align-items: flex-start;
  border-radius: 30px;
  padding:24px;
  box-shadow: 0px 12px 16px rgba(0, 0, 0, 0.35),
    0px -12px 16px rgba(255, 255, 255, 0.5);
`;

const MainTitle_SubBody = styled.li`
  display: flex;
  font-size: 20px;
  gap : 24px;
  font-weight: 400;
  margin-bottom:50px;
`;
const MainInfo1 = styled.li`
  display: flex;
  font-size: 16px;
  margin-left:40px;
  font-weight: 400;
`;
const MainInfo2= styled.li`
  display: flex;
  font-size: 14px;
  margin-top:8px;
  margin-left:40px;
  font-weight: 400;
  color : #363636;
`;

const Map= styled.li`
  display: flex;
  width : 63vw;
  height : 68vh;
  margin-top:15px;
  
  background-color : #D9D9D9;
`;

const MainCategory= styled.li`
display: flex;
flex-direction: column;
width : 160px;
height : 380px;


/* background-color: #000000; */

`;
const MainCategoryLine= styled.li`
display: flex;
flex-direction: column;
width : 120px;
height : 3px;
margin-top: 7px;
margin-bottom: 40px;
background-color: #969696;

`;

const MainCategoryContent = styled.li`
  display: flex;
  font-size: 16px;
  color : #363636;
  font-weight: 500;

`;

export default ShoppingFood;
