import { Link } from "react-router-dom";
import styled from "styled-components";



const ShoppingBeauty = () =>{

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
        <MainTitle_MainBody>
          가공식품
        </MainTitle_MainBody>
        <SubCategory>
          <SubCategoryContent>
            과자
          </SubCategoryContent>
          <SubCategoryContent>
            음료
          </SubCategoryContent>
          <SubCategoryContent>
            냉동식품
          </SubCategoryContent>
          <SubCategoryContent>
            조미료 및 소스
          </SubCategoryContent>
          <SubCategoryContent>
            유기농 및 건강식품
          </SubCategoryContent>
        </SubCategory>
        <SubCategoryLine>
        </SubCategoryLine>
          <SearchContainer>
            <TextInput placeholder="검색어를 입력하세요."/>
           <SearchButton>검색하기</SearchButton>
          </SearchContainer>
          <ItemsGroup>
            <Item>#1</Item><Item>#2</Item><Item>#3</Item><Item>#4</Item><Item>#5</Item>
            <Item>#6</Item><Item>#7</Item><Item>#8</Item><Item>#9</Item><Item>#10</Item>
          </ItemsGroup>
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
const MainTitle_MainBody = styled.li`
  display: flex;
  font-size: 20px;
  gap : 24px;
  font-weight: 400;
`;

const SubCategory= styled.li`
display: flex;
flex-direction: row;
width : 60vw;
height : 60px;
padding-top: 25px;
margin-bottom: 5px;
/* background-color: #000000; */

`;
const SubCategoryLine= styled.li`
display: flex;
flex-direction: column;
width : 890px;
height : 5px;
background-color: #969696;
margin-bottom: 20px;

`;

const SubCategoryContent = styled.li`
  display: flex;
  font-size: 16px;
  color : #363636;
  font-weight: 400;
  margin-left :50px;
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
const SearchContainer = styled.div`
  display: flex;
  align-items: center;
`;

const TextInput = styled.input`
  width: 380px;
  height: 40px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 10px; /* 검색 입력란과 버튼 사이 간격 조정 */
`;

const SearchButton = styled.button`
  width: 100px;
  height: 40px;
  background-color: #9b9b9b;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const ItemsGroup= styled.li`
display: flex;
flex-wrap : wrap;
width : 63vw;
height : 57vh;
gap:16px;
margin-top: 26px;
background-color: #fcfcfc;
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 11vw;
  height: 26vh;
  gap: 16px;
  font-size: 30px;
  background-color: #D9D9D9;
  color: #7b7b7b;
`;
export default ShoppingBeauty;
