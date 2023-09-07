import styled from "styled-components";

interface ModalProps {
  isOpen: boolean;
  onClose?: () => void;
  width?: number;
  height?: number;
  children?: React.ReactNode;
}

const Modal = ({
  isOpen,
  onClose,
  width = 100,
  height = 100,
  children,
}: ModalProps) => {
  // 클릭 이벤트가 해당 컴포넌트에만 들어가고,
  // 상위 컴포넌트로 전파되지 않도록 막는 함수
  const stopClickPropagation = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent
        width={width}
        height={height}
        onClick={stopClickPropagation}
      >
        {children}
      </ModalContent>
    </ModalOverlay>
  );
};

const ModalOverlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background: rgba(0, 0, 0, 0.35);
`;

const ModalContent = styled.div<{ width: number; height: number }>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;

  padding: 20px;

  background-color: #fefffb;
  border: 1px solid white;
  border-radius: 30px;

  box-shadow: 0px 12px 16px rgba(0, 0, 0, 0.35),
    0px -12px 16px rgba(255, 255, 255, 0.5);
`;

export default Modal;
