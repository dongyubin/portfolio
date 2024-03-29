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
      <meta name="google-site-verification" content="r3PADZr3-uDSLp-RCbOG6fyR7HHK-U5Iob2OYLbnAOA" />
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
      <script async src="https://font.wangdu.site/script.js" data-website-id="e90d63d0-9a0d-44bf-adac-101b8e591ddc"></script>
    </html>
  );
}
