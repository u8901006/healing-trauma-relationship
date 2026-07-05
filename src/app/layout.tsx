import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Healing Trauma & Relationship · 依附型態對話練習",
  description:
    "基於 AEDP 取向，將依附型態治療知識轉化為分支對話練習。逃避型、矛盾型、混亂型——主角視角與治療師視角。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-TW">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Noto+Sans+TC:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-[#f6f1e8] text-[#3d2b1f] antialiased">
        {children}
      </body>
    </html>
  );
}
