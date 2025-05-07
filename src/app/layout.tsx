import "./globals.css";
import { ReactLenis } from "@/utils/lenis"

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
