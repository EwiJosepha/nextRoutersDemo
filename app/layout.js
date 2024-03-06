// import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "@/components/provider";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next Apps",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body>
        {children}
      </body>
       
    </html>
  );
}

