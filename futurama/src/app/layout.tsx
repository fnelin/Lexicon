import type { Metadata } from "next";
import { Geist, Geist_Mono, Josefin_Sans } from "next/font/google";
import "./globals.css";
import MainNavigation from "@/app/ui/main-navigation";

const geistSans = Geist({
  variable: "--font-geist_sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist_mono",
  subsets: ["latin"],
});
const josefinSans = Josefin_Sans({
  variable: "--font-josefin_sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Futurama",
  description: "Educational react site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${josefinSans.variable} antialiased`}>
        <MainNavigation />
        {children}
      </body>
    </html>
  );
}
