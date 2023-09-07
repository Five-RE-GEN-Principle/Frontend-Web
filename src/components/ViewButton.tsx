import styled from "styled-components";

const ViewButton = () => {
return(
  <Button>보기</Button>
);
};

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 10px;
  width: 94px;
  height: 33px;
  background-color: #85897B;
  color : #FFFFFF;
  font-size: 17px;

`

export default ViewButton;