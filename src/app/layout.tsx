import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Toaster } from "sonner";

import "./globals.css";

export const metadata = {
  title: "Chorulla Palli Pro | Find Mosques Nearby",
  description:
    "Discover nearby mosques during Ramadan and find locations serving food for fasting individuals.",
  keywords: [
    "Mosque Locator",
    "Ramadan Food Finder",
    "Prayer Locations",
    "Halal Food Near Me",
    "Fasting Support",
    "Fasting Food Mosques"
  ],
  openGraph: {
    title: "Chorulla Palli Pro",
    description:
      "Discover mosques near you during Ramadan and find places offering food for those who are fasting.",
    url: "https://chorullapallipro.vercel.app",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Chorulla Palli Pro - Find Mosques Nearby",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@chorullapallipro",
    title: "Chorulla Palli Pro",
    description:
      "Easily locate mosques near you and discover Iftar food spots during Ramadan.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://chorullapallipro.vercel.app" />
        <meta name="robots" content="index, follow" />
      </head>
      <body className="bg-background text-foreground">
        <ThemeProvider>
          <Toaster position="top-right" richColors />

          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 container mx-auto p-4">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
