import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./NavBarComponent/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Specify the weights
  variable: "--font-poppins", // Optional: For custom CSS variable
});
export const metadata: Metadata = {
  title: "Abapo Home Renovation",
  description: 'Explore our home renovation projects',
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light",
        url: "/meta-icon.svg",
        href: "/meta-icon.svg",
      },
      {
        media: "(prefers-color-scheme: dark",
        url: "/meta-icon.svg",
        href: "/meta-icon.svg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`}
      >
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
