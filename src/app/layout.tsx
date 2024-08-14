"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { StoreProvider } from "../redux/StoreProvider";
import AuthWrapper from "@/components/AuthWrapper";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={inter.className}>
          <AuthWrapper>{children}</AuthWrapper>
        </body>
      </html>
    </StoreProvider>
  );
}
