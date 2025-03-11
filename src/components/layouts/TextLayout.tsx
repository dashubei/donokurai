import React, { ReactNode } from "react";
import styled from "styled-components";

const Layout = styled.div<{ gapSize?: string }>`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.gapSize || "1.5rem"};
  width: 100%;
`;

const TextLayout = ({
  children,
  gapSize,
}: {
  children: ReactNode;
  gapSize?: string;
}): React.JSX.Element => {
  return <Layout gapSize={gapSize}>{children}</Layout>;
};

export default TextLayout;
