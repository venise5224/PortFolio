import type { Metadata } from "next";
import "@/styles/globals.css";
import Header from "@/components/layout/Header";

export const metadata: Metadata = {
  title: "Jeon Sangmin | Front-End Developer",
  description: "전상민(Jeon Sangmin) - Front-End 개발자 포트폴리오",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ko">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
