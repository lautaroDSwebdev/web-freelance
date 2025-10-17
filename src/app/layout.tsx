import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./style.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lautaro Di Salvo - Web Developer",
  description: "Me especializo en la creacion de sitios web profesionales",
 icons: {
  icon: "/mi-cara.ico"
 }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link
        rel="icon"
        href="/mi-cara.ico"
        type="image/<generated>"
        sizes="<generated>"
      />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
