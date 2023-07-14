import React from "react";
import { AppProps } from "next/app";

import styled from "styled-components";
import { ContextProvider } from "@/tool/context";

import "../styles/global.css"

const WrapperRed = styled.nav`
  background-color: burlywood;

  padding: 1rem;
  margin-bottom: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const MyPage: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ContextProvider>
      <WrapperRed>
        <p>Barre de navigation</p>
      </WrapperRed>

      <Component {...pageProps} />
    </ContextProvider>
  );
};

export default MyPage;
