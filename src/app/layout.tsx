import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SessionProvider } from "next-auth/react";

import "./globals.css";
import { Navbar } from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tutor AI",
  description:
    "Tutor AI is a quiz app that uses AI to generate questions and answers.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <SessionProvider>
        <body className={"dark"}>
          <Navbar />
          {children}
        </body>
      </SessionProvider>
    </html>
  );
}
