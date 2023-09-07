import styled from "styled-components";

interface TitleProps {
  children: React.ReactNode;
}

const Title = ({ children }: TitleProps) => {
  return (
    <Container>
      <Text>{children}</Text>
      <Line />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Line = styled.div`
  width: 80px;
  height: 5px;

  margin-top: 20px;
  margin-bottom: 20px;

  background-color: #917b56;
`;

const Text = styled.h1`
  font-size: 30px;
  font-weight: 500;
`;

export default Title;
