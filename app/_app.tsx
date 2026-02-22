import type { AppProps } from "next/app";
import { Amplify } from "aws-amplify";
import config from "./aws-exports";
import "@aws-amplify/ui-react/styles.css";

Amplify.configure(config);

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}



