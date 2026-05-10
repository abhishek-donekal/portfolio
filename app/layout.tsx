import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Fraunces, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { AsciiLog } from "@/components/providers/AsciiLog";
import { SITE } from "@/lib/constants";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-fraunces",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: SITE.title,
  description: SITE.bio,
  openGraph: {
    title: SITE.title,
    description: SITE.bio,
    type: "website",
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
      className={`custom-cursor ${GeistSans.variable} ${GeistMono.variable} ${jetbrains.variable} ${fraunces.variable}`}
    >
      <body className={`min-h-screen font-sans ${GeistSans.className}`}>
        <AsciiLog />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
