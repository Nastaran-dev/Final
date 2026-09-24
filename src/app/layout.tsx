import type { Metadata } from "next";
import { Josefin_Sans, Inter } from "next/font/google";
import "./globals.css";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-josefin",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Anurag | Front-End Developer",
  description:
    "Portfolio of Anurag, a front-end developer building responsive, accessible and user-friendly websites and apps.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${josefin.variable} ${inter.variable} overflow-x-hidden`}>
      <body>{children}</body>
    </html>
  );
}
