import "./globals.css";

// import { Inter as FontSans } from "next/font/google";

import Navigation from "@/component/navigation/navigation";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation/>
        {children}
      </body>
    </html>
  );
}