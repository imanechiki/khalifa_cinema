import React from "react";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const contralto = localFont({
  src: "../../public/fonts/Contralto.otf",
  variable: "--font-contralto",
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Khalifa Website",
  description: "Welcome to Khalifa Website",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} ${poppins.variable} ${contralto.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
