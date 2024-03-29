import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../globals.css";
import { Sidebar, Topbar } from "@/components/layouts";
import { StoreProvider } from "@/redux/store";

const poppins = Poppins({ weight: ["400"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nucleus",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={poppins.className}>
          <Sidebar />
          <div className="flex flex-col flex-1">
            <Topbar />
            <main className="flex-1 overflow-y-auto bg-light-primary p-5 dark:bg-dark-primary">
              {children}
            </main>
          </div>
        </body>
      </html>
    </StoreProvider>
  );
}
