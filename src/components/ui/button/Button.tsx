import React, { ReactNode } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
  border: none;
  background-color: black;
  color: white;
  font-size: 2rem;
  font-weight: bold;
  width: 100%;
  border-radius: 100vmax;
  border: 0.2rem solid black;
  transition: background-color 0.3s, color 0.3s;
  cursor: pointer;
  width: min(50vw, 300px);

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  &:not(:disabled):hover,
  &:not(:disabled):active {
    background-color: white;
    color: black;
  }
`;

type ButtonProps = {
  children: ReactNode;
  isDisabled: boolean;
  onClick: () => void;
};

const Button = ({
  children,
  isDisabled,
  onClick,
}: ButtonProps): React.JSX.Element => {
  return (
    <StyledButton onClick={onClick} disabled={isDisabled} type="button">
      {children}
    </StyledButton>
  );
};

export default Button;
