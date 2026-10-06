import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "iPDF Lab",
  description: "Reference renderer for an open interactive document format."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
