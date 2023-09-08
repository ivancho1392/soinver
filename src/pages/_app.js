import { Manjari } from "next/font/google";
import Navbar from "../Components/Navbar";
import { SoinverProvider } from "../Context";

const manjari = Manjari({
  weight: ["100", "400"],
  subsets: ["latin"],
});

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={manjari.className}>
      <SoinverProvider>
        <Navbar />
        <Component {...pageProps} />
      </SoinverProvider>
    </main>
  );
}
