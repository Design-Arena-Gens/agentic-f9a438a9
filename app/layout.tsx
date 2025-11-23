import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mithila Makhana | Gourmet Lotus Seeds",
  description:
    "Discover premium Mithila Makhana roasted lotus seeds from the heart of Bihar. Taste tradition with modern flair.",
  openGraph: {
    title: "Mithila Makhana | Gourmet Lotus Seeds",
    description:
      "Taste the authentic richness of Mithila Makhana—sustainably harvested, hand-roasted, and irresistibly crunchy.",
    url: "https://agentic-f9a438a9.vercel.app",
    siteName: "Mithila Makhana",
    images: [
      {
        url: "https://images.unsplash.com/photo-1543353071-10c8ba85a904?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Bowl of premium makhana lotus seeds"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Mithila Makhana | Gourmet Lotus Seeds",
    description:
      "Authentic Mithila Makhana—artisanal roasted lotus seeds crafted with heritage recipes.",
    images: [
      "https://images.unsplash.com/photo-1543353071-10c8ba85a904?auto=format&fit=crop&w=1200&q=80"
    ]
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
