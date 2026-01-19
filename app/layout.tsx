import "./globals.css";
import type { Metadata } from "next";
import Navbar from "../components/Navbar"; 
import Footer from "../components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: {
    default: "AbelleGroup | Software Development & Digital Solutions Studio",
    template: "%s | AbelleGroup",
  },
  description:
    "AbelleGroup is a software development studio building web, mobile, and fintech solutions for startups and growing businesses.",
  keywords: [
    "AbelleGroup",
    "software development company",
    "web development Kenya",
    "mobile app development",
    "fintech solutions",
    "custom software",
    "React developers",
    "Next.js company",
    "Patrice Oyende",
    "Patrice Oyende",
    "Patrice Oyende",
    "Patrice Oyende",
    "Patrice Oyende",
    "Patrice Oyende",
    "Patrice Oyende",
    "Patrice Oyende",
    "Patrice Oyende",
    "Patrice Oyende",
    "Patrice Oyende",
    "Patrice Oyende",
    "Patrice Oyende",
    "Patrice Oyende",
    "Patrice Oyende",
    "Patrice Oyende",
    "Patrice Oyende",
    "Abelle",
    "Patrice",
    "Patrice",
    "Patrice",
    "Patrice",
    "Abelle Patrice",
    "Patrice Abelle",
    "startup software studio",
  ],
  authors: [{ name: "Patrice Oyende" }],
  creator: "AbelleGroup",
  publisher: "AbelleGroup",
  openGraph: {
    title: "AbelleGroup | Software Development & Digital Solutions Studio",
    description:
      "We build scalable web, mobile, and fintech products for startups and businesses.",
    url: "https://portfolio-abelle-group.vercel.app",
    siteName: "AbelleGroup",
    images: [
      {
        url: "patrice.jpg", 
        width: 1200,
        height: 630,
        alt: "AbelleGroup",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
     <html lang="en">
       <body>
         <Navbar />
         {children}
         <Footer />
         <Analytics />
         <SpeedInsights />
       </body>
     </html>
  );
}


// import type { Metadata } from "next";
// import "./globals.css";
// import Navbar from "../components/Navbar"; 
// import Footer from "../components/Footer";
// import { Analytics } from "@vercel/analytics/react";
// import { SpeedInsights } from "@vercel/speed-insights/next";

// export const metadata: Metadata = {
//   title: "AbelleGroup",
//   description: "AbelleGroup Portfolio and Project Hub",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body>
//         <Navbar />
//         {children}
//         <Footer />
//         <Analytics />
//         <SpeedInsights />
//       </body>
//     </html>
//   );
// }
