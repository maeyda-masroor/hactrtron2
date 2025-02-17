import type { Metadata } from "next";
import "./globals.css";
import { Josefin_Sans } from 'next/font/google';
import TopNavbar from "@/components/TopNavbar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
//New font 

const JosefinSans = Josefin_Sans({
  subsets: ['latin'], // Choose subsets if available
  weight: ['400', '700'], // Include specific weights
});


//using navbar , topnavbar & footer as common throughout 
//using children for rendering which is based on APP ROUTES
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={JosefinSans.className}
      >
        <TopNavbar/>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
