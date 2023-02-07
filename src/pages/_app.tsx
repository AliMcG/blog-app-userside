import { type AppType } from "next/dist/shared/lib/utils";
import { Montserrat, Frank_Ruhl_Libre } from "@next/font/google";
import "../styles/globals.css";
import Layout from "../components/Layout";
import { polyfill } from "interweave-ssr";
//  Polyfill function here to manage a hydration error caused by <Markup> component
polyfill();

// To import and add custom fonts to next.js
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-monts",
});

const frank = Frank_Ruhl_Libre({
  subsets: ["latin"],
  variable: "--font-frank",
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <Layout>
      <main className={`${montserrat.variable} ${frank.variable} `}>
        <Component {...pageProps} />
      </main>
    </Layout>
  );
};

export default MyApp;
