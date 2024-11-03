/**
 * author: terrylee
 * date: 2023-05-25 10:41:51
 * description: layout
 * **/

// 导入Next.js的Metadata类型
import type { Metadata } from "next";
// 导入Inter字体
import { Inter } from "next/font/google";
// 导入全局样式文件
import "./globals.css";

// 使用Inter字体
const inter = Inter({ subsets: ["latin"] });

//导出页面的元数据
export const metadata: Metadata = {
  title: "chilltoo",
  description: "chilltoo website store",
};

// 定义根布局组件
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // 返回HTML和body标签，并将Inter字体应用到body标签中
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
