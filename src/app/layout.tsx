import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";

const urbanist = Urbanist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-urbanist",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mkpanq.com"),
  applicationName: "mkpanq.com | Marek Pankowski",
  creator: "Marek Pankowski",
  publisher: "Marek Pankowski",
  openGraph: {
    siteName: "mkpanq.com | Marek Pankowski",
    description:
      "Marek Pankowski personal website - Full Stack Product Engineer from Poland",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: `https://dynamic-og-image-generator.vercel.app/api/generate?title=Home&author=Marek+Pankowski&websiteUrl=https%3A%2F%2Fmkpanq.com%2F&avatar=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F17934750&theme=default`,
        width: 1200,
        height: 630,
        alt: `mkpanq.com`,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  appleWebApp: {
    title: "mkpanq.com | Marek Pankowski",
    statusBarStyle: "black-translucent",
    capable: true,
  },
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        type: "image/x-icon",
      },
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    shortcut: [
      {
        url: "/favicon.ico",
        type: "image/x-icon",
      },
    ],
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${urbanist.variable} bg-[#1E1E1E] font-urbanist text-slate-100 h-lvh`}
      >
        {children}
      </body>
    </html>
  );
}
