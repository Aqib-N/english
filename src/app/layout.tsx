import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import "./theme-config.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Multi Speaking Studio",
  description:
    "Discover the joy of language learning at our website! Master English, Italian, French, German, and Spanish with our interactive lessons and expert guidance. Join our vibrant community for personalized feedback and cultural insights. Start your multilingual journey today! ",

  icons: {
    icon: "/MSS.png",
  },
};

const interFont = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={interFont.variable}>
        <div
          className="elfsight-app-782260db-1edf-48d4-9f74-58e8ac4686bd"
          data-elfsight-app-lazy
        ></div>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
