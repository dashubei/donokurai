import React from "react";
import styled from "styled-components";

const TitleComponent = styled.h1`
  font-size: 4.8rem;
  color: black;
  text-align: center;
  transition: letter-spacing 0.3s;

  &:hover {
    letter-spacing: 0.25rem;
  }
`;

const Emoji = styled.span`
  display: inline-block;
  transition: transform 0.3s;
  &:hover {
    transform: translate(0.5rem, 0);
  }
`;

const MainTitle = (): React.JSX.Element => {
  return (
    <TitleComponent>
      Donokurai<Emoji>🌳</Emoji>
    </TitleComponent>
  );
};

export default MainTitle;
