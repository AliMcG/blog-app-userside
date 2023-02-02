import { type AppType } from "next/dist/shared/lib/utils";
import { Montserrat, Frank_Ruhl_Libre } from "@next/font/google";
import "../styles/globals.css";
import { polyfill } from "interweave-ssr";

polyfill();

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: '--font-monts',
});

const frank = Frank_Ruhl_Libre({
  subsets: ['latin'],
  variable: '--font-frank'
})

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <main className={`${montserrat.variable} ${frank.variable} `}>
      <Component {...pageProps} />;
    </main>
  );
};

export default MyApp;
