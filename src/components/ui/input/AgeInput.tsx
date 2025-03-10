import React from "react";
import styled from "styled-components";

const Input = styled.input`
  display: block;
  width: 100%;
  padding: 1rem;
  font-size: 1.6rem;
  cursor: pointer;
`;

type AgeInputProps = {
  age: number;
  onAgeChange: (value: number) => void;
};

const AgeInput = ({ age, onAgeChange }: AgeInputProps): React.JSX.Element => {
  return (
    <Input
      type="number"
      value={isNaN(age) ? "" : age}
      onChange={(e) => onAgeChange(parseInt(e.target.value))}
    />
  );
};

export default AgeInput;
