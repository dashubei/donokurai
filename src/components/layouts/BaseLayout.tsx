import React, { ReactNode } from "react";
import styled from "styled-components";

const Layout = styled.main`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  align-items: center;
  padding: 5.6rem 1.6rem;
  width: 100%;
  margin-inline: auto;
  min-height: 100vh;

  @media (min-width: 1024px) {
    max-width: 800px;
  }
`;

const BaseLayout = ({
  children,
}: {
  children: ReactNode;
}): React.JSX.Element => {
  return <Layout>{children}</Layout>;
};

export default BaseLayout;
