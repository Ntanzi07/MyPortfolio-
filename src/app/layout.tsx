import type { Metadata } from "next";
import "./globals.css";
import { ReactLenis } from "@/utils/lenis"

export const metadata: Metadata = {
    title: "Portfolio",
    description: "welcome to my portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ReactLenis root>
        <body>
          {children}
        </body>
      </ReactLenis>
    </html>
  );
}
