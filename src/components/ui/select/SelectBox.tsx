import React from "react";
import styled from "styled-components";

const Select = styled.select`
  width: 100%;
  padding: 1rem;
  cursor: pointer;
  font-size: 1.6rem;
`;

const SelectBox = ({
  gender,
  handleChange,
}: {
  gender: string;
  handleChange: (value: string) => void;
}): React.JSX.Element => {
  return (
    <Select onChange={(e) => handleChange(e.target.value)}>
      <option value={gender}>-----</option>
      <option value="男性">男性👨</option>
      <option value="女性">女性👩</option>
    </Select>
  );
};

export default SelectBox;
