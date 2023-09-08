import { useRef, useState } from "react";
import styled from "styled-components";
import Popover from "./Popover";

interface InfoButtonProps {
  content?: string;
}

const InfoButton = ({ content }: InfoButtonProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const buttonRef = useRef<HTMLDivElement>(null);
  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <>
      <Container onClick={toggleVisibility}>i</Container>
      <Popover
        content={content}
        isVisible={isVisible}
        toggleVisibility={toggleVisibility}
        triggerRef={buttonRef}
      />
    </>
  );
};

const Container = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 100px;
  background-color: white;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  display: flex;
  justify-content: center;
  align-items: center;
`;

export default InfoButton;
