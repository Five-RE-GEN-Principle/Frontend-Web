import styled from "styled-components";

const Information = () => {
  return (
    <Container>
      <NickNameBox>
        <GrayContainer>
<Gray />
<div></div>
        </GrayContainer>
        
      </NickNameBox>
    </Container>
  );
};

const GrayContainer = styled.div`
  display: flax;
  
`

const Container = styled.div`
  display: flex;
`;

const Gray = styled.div`
  width: 6.5vw;
  height: 6.5vh;

  background-color: #D9D9D9;
`;

const NickNameBox = styled.div`
  display: flex;

  width: 25vw;
  height: 30vh;
  border-radius: 30px;

  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.35),
    0px -3px 4px rgba(255, 255, 255, 0.5);

  background-color: #fcfff5;

  padding : 20px 10px ;
`;


const NickNameBox = styled.div`
  display: flex;

  width: 25vw;
  height: 30vh;
  border-radius: 30px;

  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.35),
    0px -3px 4px rgba(255, 255, 255, 0.5);

  background-color: #fcfff5;

  padding : 20px 10px ;
`;





export default Information;
