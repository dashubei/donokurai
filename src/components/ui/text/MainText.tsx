import React, { ReactNode } from "react";
import styled from "styled-components";

const Text = styled.p`
  font-size: 1.6rem;
  color: black;
  font-weight: 300;
  line-height: 2;
`;

const MainText = ({ children }: { children: ReactNode }): React.JSX.Element => {
  return <Text>{children}</Text>;
};

export default MainText;
