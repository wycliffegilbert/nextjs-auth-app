import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from '@/components/Header';
import { ClerkProvider, ClerkLoading, ClerkLoaded } from "@clerk/nextjs";
import Loader from '@/components/Loader';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Soja-VMS",
  description: "Powered by Smartic Digital ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <ClerkProvider>
     <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClerkLoading>
          <Loader />
        </ClerkLoading>
        <ClerkLoaded>
        <Header />
        {children}
        </ClerkLoaded>
      </body>
    </html>
   </ClerkProvider>
  );
}
