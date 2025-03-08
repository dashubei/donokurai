import React from "react";
import styled from "styled-components";

const Input = styled.input`
  display: block;
  width: 100%;
  padding: 1rem;
  font-size: 1.6rem;
`;

type DateInputProps = {
  date: string;
  onDateChange: (value: string) => void;
};

const DateInput = ({
  date,
  onDateChange,
}: DateInputProps): React.JSX.Element => {
  return (
    <Input
      type="date"
      value={date}
      onChange={(e) => onDateChange(e.target.value)}
    />
  );
};

export default DateInput;
