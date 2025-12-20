import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";
import { ClerkProvider } from "@clerk/nextjs";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: " E-commerce",
  description: "E-commerce application for selling clothes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider >
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        <ToastContainer  position="bottom-right"   
        autoClose={3000}   // ⏳ default = 3s
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable/>
        <div className="mx-auto  p-4 sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-5xl ">
          <Navbar />

        {children}
        <Footer />
        </div>
      </body>
    </html>
    </ClerkProvider>
  );
}
