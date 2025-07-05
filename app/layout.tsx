import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Providers } from "@/components/providers";
import "./globals.css";
import Navbar from "@/components/global/navbar";
import Footer from "@/components/global/footer";


const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "RigidUI Examples - Interactive Component Showcase",
  description: "Explore interactive examples of complex UI components built with shadcn/ui and React",
  openGraph: {
    title: "RigidUI Examples",
    description:
      "Explore interactive examples of complex UI components built with shadcn/ui and React",
    url: "https://examples.rigidui.com",
    siteName: "RigidUI Examples",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "RigidUI Examples - Interactive Component Showcase",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  category: "Component Library",
  keywords: [
    "UI Components",
    "React Components",
    "shadcn",
    "UI Library",
    "Design System",
    "Web Development",
    "Frontend Development",
    "Component Examples",
    "Interactive Examples",
    "Responsive Design",
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
        <Navbar />
        <Providers>
          {children}
        </Providers>
        <Footer />
      </body>
    </html>
  );
}