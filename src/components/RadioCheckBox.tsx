import { useEffect, useState } from "react";
import styled from "styled-components";

interface RadioCheckBoxProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

const RadioCheckBox = ({ checked = false, onChange }: RadioCheckBoxProps) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleToggle = () => {
    setIsChecked(!isChecked);
    if (onChange) {
      onChange(!isChecked);
    }
  };

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  return (
    <StyledRadioRadioCheckBox
      className={isChecked ? "checked" : ""}
      onClick={handleToggle}
    >
      {isChecked && <CheckMark />}
    </StyledRadioRadioCheckBox>
  );
};

const StyledRadioRadioCheckBox = styled.div`
  width: 24px;
  height: 24px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &.checked {
    background-color: #23647d;
  }
`;

const CheckMark = styled.div`
  width: 16px;
  height: 16px;
  background-color: white;
`;

export default RadioCheckBox;
