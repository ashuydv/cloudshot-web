import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cloudshot Minimalistic CloudOps",
  description: "Cloudshot is a SaaS-based product, connecting to your public cloud account, offering instant insights into the status of resources, performance metrics, and potential bottlenecks. It enables users to monitor key performance indicators, track resource utilization, and identify opportunities for optimization, ensuring the cloud infrastructure operates at its peak efficiency. It provides advanced analytics capabilities for your solution, including predictive modelling and trend analysis, allowing users to proactively identify potential issues, plan capacity, and optimize resource allocation. Given below are a few Use Cases and Success Stories",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
        <Toaster expand={false} richColors />
      </body>
    </html>
  );
}
