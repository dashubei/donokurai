import React, { ReactNode } from "react";
import styled from "styled-components";

const Layout = styled.div<{ gap?: string }>`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.gap || "1.5rem"};
  width: 100%;
`;

const TextLayout = ({
  children,
  gap,
}: {
  children: ReactNode;
  gap?: string;
}): React.JSX.Element => {
  return <Layout gap={gap}>{children}</Layout>;
};

export default TextLayout;
