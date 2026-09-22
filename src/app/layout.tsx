import type { Metadata } from "next";
import { Space_Grotesk, Crimson_Pro, DM_Serif_Display, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Providers from "@/components/Providers";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sg",
  display: "swap",
});

const crimsonPro = Crimson_Pro({
  subsets: ["latin"],
  variable: "--font-cp",
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-editorial",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-ui",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Daniel Rojas | Product Designer & Digital Solutions",
  description:
    "Portfolio of Daniel Rojas, Product Designer focusing on Design Systems and Digital Solutions.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${spaceGrotesk.variable} ${crimsonPro.variable} ${dmSerif.variable} ${inter.variable}`}
    >
      <body className="antialiased">
        <a
          href="#main-content"
          className="skip-link"
        >
          Skip to main content
        </a>
        <SmoothScroll>
          <Providers>{children}</Providers>
        </SmoothScroll>
      </body>
    </html>
  );
}
