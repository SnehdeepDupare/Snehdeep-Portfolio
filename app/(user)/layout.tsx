import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Cursor from "@/components/Cursor";
import { Toaster } from "react-hot-toast";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home | Snehdeep Dupare",
  description:
    "Hi, I'm Snehdeep Dupare. Welcome to my digital space! I'm a Full Stack Developer that enjoys to paint the internet canvas with my Projects. I'm a curious individual with strong foundation in languages like React, Next JS. I enjoy to explore and learn new technologies and challenge myself to improve my coding skills.",
  keywords: [
    "Snehdeep Dupare",
    "Full Stack Developer",
    "Portfolio",
    "React",
    "Next JS",
    "Developer Porfolio",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <GoogleAnalytics />

      <body
        className={`${inter.className} bg-deepblue text-white scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-transparent hover:scrollbar-thumb-gray-300 scrollbar-thumb-rounded-full`}
      >
        <Header />
        <Cursor />
        {children}
        <Analytics />
        <Toaster />
      </body>
    </html>
  );
}
