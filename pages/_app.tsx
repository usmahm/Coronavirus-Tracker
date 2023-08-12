import { useLayoutEffect } from "react";
import type { AppProps } from "next/app";

import '../src/shared/global.scss';
import { TotalCasesContextProvider } from "../src/contexts/TotalCasesContext";
import { CountriesCasesContextProvider } from "../src/contexts/CountriesCasesContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <TotalCasesContextProvider>
      <CountriesCasesContextProvider>
        <Component {...pageProps} />
      </CountriesCasesContextProvider>
    </TotalCasesContextProvider>
  );
}