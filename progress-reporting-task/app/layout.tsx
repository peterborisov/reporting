import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Progress Reporting task",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="mx-44">{children}</body>
    </html>
  );
}
