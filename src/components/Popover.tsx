import { useRef, useEffect } from "react";
import styled from "styled-components";

interface PopoverProps {
  content: React.ReactNode;
  isVisible: boolean;
  toggleVisibility: () => void;
  triggerRef: React.RefObject<HTMLDivElement>;
}

const Popover = ({
  content,
  isVisible,
  toggleVisibility,
  triggerRef,
}: PopoverProps) => {
  const nodeRef = useRef<HTMLDivElement | null>(null);

  // 클릭 시 popover 외부를 감지하기 위한 핸들러
  const handleClickOutside = (event: MouseEvent) => {
    if (
      nodeRef.current &&
      !nodeRef.current.contains(event.target as Node) &&
      event.target !== triggerRef.current
    ) {
      toggleVisibility();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [toggleVisibility]);

  return isVisible ? (
    <Container ref={nodeRef}>
      {isVisible && <Contents>{content}</Contents>}
    </Container>
  ) : null;
};

const Container = styled.div`
  display: flex;
`;

const Contents = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;

  padding: 15px;

  line-height: 30px;
  white-space: pre-line;

  border: 1px solid white;
  border-radius: 10px;

  background-color: white;

  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.35),
    0px -3px 4px rgba(255, 255, 255, 0.5);

  z-index: 1;
`;

export default Popover;
