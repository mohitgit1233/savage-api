import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SAVAGE",
  description: "Generate completely savage stuff for testing your code or for fun!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className}>
        <Navbar/>
        {children}
        </body>
        
    </html>
  );
}
