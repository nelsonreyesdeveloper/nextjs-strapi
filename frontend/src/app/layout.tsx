import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { getHomeMetadata } from "@/data/loaders";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
  const { title, description } = await getHomeMetadata();
  return {
    title: title,
    description: description,
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
