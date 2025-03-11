import React, { ReactNode } from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  background-color: white;
  text-align: center;
  padding: 2rem 3rem;
  font-size: 2rem;
  border-radius: 0.8rem;
  box-shadow: 0.4rem 0.4rem 1rem rgba(0, 0, 0, 0.1);
`;

const Card = ({ children }: { children: ReactNode }): React.JSX.Element => {
  return <StyledCard>{children}</StyledCard>;
};

export default Card;
