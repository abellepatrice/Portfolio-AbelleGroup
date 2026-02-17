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
    "web development",
    "mobile app development",
    "fintech solutions",
    "custom software",
    "React developers",
    "Next.js company",
    "Patrice Oyende",
    "startup software studio",
    "software development studio",
    "digital solutions",
    "Kenya software development",
    "web application development",
    "full stack development",
    "UI/UX design",
    "SaaS development",
    "e-commerce development",
    "API development",
    "cloud solutions",
  ],
  authors: [{ name: "Patrice Oyende" }],
  creator: "AbelleGroup",
  publisher: "AbelleGroup",
  metadataBase: new URL("https://portfolio-abelle-group.vercel.app"),
  openGraph: {
    title: "AbelleGroup | Software Development & Digital Solutions Studio",
    description:
      "We build scalable web, mobile, and fintech products for startups and businesses.",
    url: "https://portfolio-abelle-group.vercel.app",
    siteName: "AbelleGroup",
    images: [
      {
        url: "/patrice.jpg", 
        width: 1200,
        height: 630,
        alt: "AbelleGroup",
      },
    ],
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AbelleGroup | Software Development & Digital Solutions Studio",
    description: "We build scalable web, mobile, and fintech products for startups and businesses.",
    creator: "@abellepatrice",
    images: ["/patrice.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
  alternates: {
    canonical: "https://portfolio-abelle-group.vercel.app",
    languages: {
      en: "https://portfolio-abelle-group.vercel.app",
    },
  },
  category: "technology",
  classification: "Portfolio, Software Development, Web Development",
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
