import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import "./theme-config.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Multi Speaking Studio",
    template: "%s | Multi Speaking Studio",
  },
  description:
    "Discover the joy of language learning at our website! Master English, Italian, French, German, and Spanish with our interactive lessons and expert guidance. Join our vibrant community for personalized feedback and cultural insights. Start your multilingual journey today!. Multi Speaking Studio | Language Learning Hub | Speech Training Center |  Polyglot Studio | Communication Skills Institute | Linguistic Mastery Studio | Multicultural Speaking Workshop  | Diverse Language Studio | Public Speaking and Language Center | nternational Communication Studio.",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Multi Speaking Studio",
    "Speaking Studio",
    "Multi Speaking",
    "English ",
    "English learning",
    "English speaking",
    "Learn English online",
    "ESL (English as a Second Language)",
    "English language courses",
    "English grammar",
    "Vocabulary building",
    "English speaking practice",
    "English writing skills",
    "English listening comprehension",
    "English pronunciation",
    "TOEFL preparation",
    "IELTS preparation",
    "Business English",
    "Academic English",
    "English for beginners",
    "English for kids",
    "English conversation",
    "English fluency",
    "English exams",
    "English tutoring",
  ],
  authors: [{ name: "Seb", url: "https://www.multispeakingstudio.com" }],

  icons: {
    icon: "/MSS-modified.png",
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
