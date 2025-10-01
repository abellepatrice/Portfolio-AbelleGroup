import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar"; 
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "AbelleGroup",
  description: "AbelleGroup Portfolio and Project Hub",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
