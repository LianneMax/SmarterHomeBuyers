import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Darren Tsai | Smarter Home Buyers",
  description:
    "Senior Loan Consultant Darren Tsai guides first-time home buyers and refinancers step by step. Licensed in AZ, CA, FL, HI, OR, PA, TN, TX.",
  icons: {
    icon: "/darren.jpg",
    shortcut: "/darren.jpg",
    apple: "/darren.jpg",
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
