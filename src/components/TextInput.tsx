import { useState } from "react";
import styled from "styled-components";

interface TextInputProps {
  width: string;
  height: string;
  placeholder: string;
}

const TextInput = ({
  width = "100px",
  height = "100px",
  placeholder,
}: TextInputProps) => {
  const [value, setValue] = useState(""); // 초기값은 빈 문자열입니다.

  return (
    <StyledInput
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={(e) => setValue(e.target.value)} // 입력이 변경될 때마다 상태 업데이트
      width={width}
      height={height}
    />
  );
};

const StyledInput = styled.input<{ width: string; height: string }>`
  &::placeholder {
    white-space: pre-wrap;
  }

  width: ${(props) => props.width};
  height: ${(props) => props.height};

  border: 0px;
  border-radius: 10px;

  background-color: #fcfff5;

  box-shadow: inset 0px 3px 4px rgba(0, 0, 0, 0.35),
    inset 0px -3px 4px rgba(255, 255, 255, 0.5);
`;

export default TextInput;
