import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Premiere Plus Realty | Tony & Laura Harvey | Southwest Florida Real Estate",
  description: "Your trusted real estate experts serving Naples, Estero, Bonita Springs, Fort Myers, Cape Coral, and all of Southwest Florida. Contact us at 239-777-0155",
  keywords: "real estate, Naples FL, Estero FL, Bonita Springs, Fort Myers, Cape Coral, Lehigh Acres, Marco Island, Golden Gate Estates, Southwest Florida homes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
