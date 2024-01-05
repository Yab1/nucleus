import { ReactNode } from "react";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../globals.css";
import { Sidebar } from "@/components/layouts";
import { UserMenu } from "@/components/widgets";

const inter = Poppins({ weight: ["400"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nucleus",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-white dark:bg-grayish-black h-screen flex`}
      >
        <Sidebar />
        <main className="flex-1 p-10">
          <UserMenu />
          {children}
        </main>
      </body>
    </html>
  );
}