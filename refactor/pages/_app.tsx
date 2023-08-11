import type { AppProps } from "next/app";
import '../src/shared/global.scss';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}