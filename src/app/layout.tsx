import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { GlobalContextProvider } from "./Context/store";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IMDb: Rating,Reviews",
  description: "Rating,Reviews",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="bg-black">
      <body className={inter.className}>
        <GlobalContextProvider>
          <Navbar />
          {children}
          <Footer />
        </GlobalContextProvider>
      </body>
    </html>
  );
}
