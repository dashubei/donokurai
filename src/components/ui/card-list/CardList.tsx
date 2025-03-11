import React, { ReactNode } from "react";
import styled from "styled-components";

const StyledCardList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
`;

const CardList = ({ children }: { children: ReactNode }): React.JSX.Element => {
  return <StyledCardList>{children}</StyledCardList>;
};

export default CardList;
