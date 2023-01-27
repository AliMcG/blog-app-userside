import { type AppType } from "next/dist/shared/lib/utils";

import "../styles/globals.css";
import { polyfill } from 'interweave-ssr';

polyfill();

const MyApp: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyApp;
