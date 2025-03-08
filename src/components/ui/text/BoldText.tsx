import React, { ReactNode } from "react";
import styled from "styled-components";

const Text = styled.span`
  font-size: 1.6rem;
  color: black;
  font-weight: 500;
`;

const BoldText = ({ children }: { children: ReactNode }): React.JSX.Element => {
  return <Text>{children}</Text>;
};

export default BoldText;
