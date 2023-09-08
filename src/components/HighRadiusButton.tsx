import styled from "styled-components";

interface HighRadiusButtonProps {
  onClick?: () => void;
  bold?: boolean;
  children?: React.ReactNode;
}

const HighRadiusButton = ({ onClick, children }: HighRadiusButtonProps) => {
  return <Button onClick={onClick}>{children}</Button>;
};

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 30px;
  width: 125px;
  height: 44px;

  border: 1px solid white;

  background-color: #85897b;
  color: #ffffff;
  font-size: 24px;

  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.35),
    0px -3px 4px rgba(255, 255, 255, 0.5);
`;

export default HighRadiusButton;
