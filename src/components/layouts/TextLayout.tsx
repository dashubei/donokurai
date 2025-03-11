import React, { ReactNode } from "react";
import styled from "styled-components";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
`;

const TextLayout = ({
  children,
}: {
  children: ReactNode;
  gapSize?: string;
}): React.JSX.Element => {
  return <Layout>{children}</Layout>;
};

export default TextLayout;
