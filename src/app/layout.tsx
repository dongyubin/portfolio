import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "../providers/theme-providers";
import Header from "@/components/common/navbar";
import UIProvider from "@/providers/ui-provider";
import Footer from "@/components/common/footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "文武科技社",
  description:
    "一个有科技感的个人博客.",
  keywords:
    "文武科技社, 文武科技柜, 文武科技资源, 文武微信排版, front-end, HTML, CSS, JavaScript",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN" suppressHydrationWarning className={poppins.className}>
      <head />
      <body className="bg-black text-white">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <UIProvider>
            <Header />
            <main> {children}</main>
            <Footer />
          </UIProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
