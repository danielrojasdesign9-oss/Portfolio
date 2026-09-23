import type { Metadata } from "next";
import { Space_Grotesk, IBM_Plex_Sans, DM_Serif_Display, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Providers from "@/components/Providers";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sg",
  display: "swap",
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plex",
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
      suppressHydrationWarning
      className={`scroll-smooth ${spaceGrotesk.variable} ${ibmPlexSans.variable} ${dmSerif.variable} ${inter.variable}`}
    >
      <body className="antialiased">
        {/* Pre-paint theme bootstrap: default light, no dark flash on reload. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=null,a=null;try{t=localStorage.getItem('theme');a=localStorage.getItem('aaaLevel');}catch(e){}var d=document.documentElement;var dark=t==='dark'||(t==='system'&&window.matchMedia('(prefers-color-scheme: dark)').matches);d.setAttribute('data-theme',dark?'dark':'light');d.setAttribute('data-aaa',a==='AAA'?'true':'false');}catch(e){}})();`,
          }}
        />
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
