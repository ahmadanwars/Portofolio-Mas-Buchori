import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Muhammad Buchori Triyanto — Team Leader PT Telkom Akses | FTTX & Telecom Infrastructure",
  description: "Portofolio profesional Muhammad Buchori Triyanto. Team Leader PT Telkom Akses dengan pengalaman 15+ tahun dalam jaringan Fiber Optic (FTTX), Network Configuration, NOC, dan manajemen tim operasional.",
  keywords: ["Muhammad Buchori Triyanto", "PT Telkom Akses", "Team Leader", "FTTX", "Fiber Optic", "NOC", "Network Configuration", "Telekomunikasi"],
  authors: [{ name: "Muhammad Buchori Triyanto" }],
  openGraph: {
    title: "Muhammad Buchori Triyanto — Team Leader PT Telkom Akses",
    description: "Portofolio profesional Muhammad Buchori Triyanto. FTTX Network, NOC, Telecom Infrastructure & Team Leader.",
    type: "website",
    url: "https://costabanten.github.io",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
