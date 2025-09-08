import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "JSM Portfolio",
  description: "Frontend Developer JSM Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
