import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Cursor from "@/components/Cursor";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Snehdeep Dupare Portfolio",
  description: "Snehdeep Dupare's Portfolio, Full Stack Developer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-deepblue text-white scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-transparent hover:scrollbar-thumb-gray-300 scrollbar-thumb-rounded-full`}
      >
        <Header />
        <Cursor />
        {children}

        <Toaster />
      </body>
    </html>
  );
}
