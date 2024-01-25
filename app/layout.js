import { EB_Garamond, Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const ebgaramond = EB_Garamond({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-ebgaramond",
});

const opensans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-opensans",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${ebgaramond.variable} ${opensans.variable}`}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
