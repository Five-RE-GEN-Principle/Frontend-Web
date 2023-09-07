import styled from "styled-components";

interface LowRadiusButtonProps {
  onClick?: () => void;
  bold?: boolean;
  children?: React.ReactNode;
}

const LowRadiusButton = ({ onClick, children }: LowRadiusButtonProps) => {
  return <Button onClick={onClick}>{children}</Button>;
};

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 10px;
  width: 94px;
  height: 33px;

  border: 1px solid white;

  background-color: #85897b;
  color: #ffffff;
  font-size: 18px;

  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.35),
    0px -3px 4px rgba(255, 255, 255, 0.5);
`;

export default LowRadiusButton;
