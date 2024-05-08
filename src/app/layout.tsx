import ThemeProviders from "@/themes";
import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const notoSansKr = Noto_Sans_KR({
  weight: ["100", "400", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "베어마켓",
  description: "누구나 이용가능한 포근한 곰 같은 중고거래 플랫폼",
};

export default function HTMLLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const ogTitle = "베어마켓";
  const ogDescription = "누구나 이용가능한 포근한 곰 같은 중고거래 플랫폼";
  const ogType = "website";
  const ogLocale = "ko_KR";
  const ogUrl = "https://time-attack-fullstack-client-refactor.vercel.app";
  const ogImageUrl =
    "https://time-attack-fullstack-client-refactor.vercel.app/assets/og-image.png";
  const ogImageAlt = "베어마켓 미리보기 이미지";

  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          as="style"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        />
        <meta property="og:title" content={ogTitle} />
        <meta property="og:description" content={ogDescription} />
        <meta property="og:type" content={ogType} />
        <meta property="og:locale" content={ogLocale} />
        <meta property="og:url" content={ogUrl} />
        <meta property="og:image" content={ogImageUrl} />
        <meta property="og:image:alt" content={ogImageAlt} />
      </head>
      <body className={notoSansKr.className}>
        <ThemeProviders>{children}</ThemeProviders>
      </body>
    </html>
  );
}
