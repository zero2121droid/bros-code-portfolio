import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LanguageProvider } from "@/contexts/LanguageContext";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bros Code - Full-Stack Web & Mobile Razvoj",
  description: "Tim od tri stručnjaka specijalizovana za ASP.NET, Laravel, VueJS, NextJS, SQL i PostgreSQL. Kreiramo moderne web aplikacije i mobilna rešenja.",
  keywords: "Bros Code, web developer, mobile developer, ASP.NET, Laravel, VueJS, NextJS, SQL, PostgreSQL, full-stack developer, Miljan Milojkovic, Vladimir Gasevic, Lazar Vujovic",
  authors: [{ name: "Bros Code Team" }],
  openGraph: {
    title: "Bros Code - Full-Stack Web & Mobile Razvoj",
    description: "Tim stručnjaka koji kreira moderna web i mobilna rešenja.",
    type: "website",
    locale: "sr_RS",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bros Code - Full-Stack Web & Mobile Razvoj",
    description: "Tim stručnjaka koji kreira moderna web i mobilna rešenja.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          <LanguageProvider>
            <Navigation />
            {children}
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
