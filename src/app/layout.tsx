import "@/styles/globals.css";
import { AuthProvider } from "@/context/authProvider";
import { ToasterContext } from "@/context/toasterContext";

import { Inter } from "next/font/google";
import { ActiveStatus } from "@/components/ActiveStatus";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'Messenger',
  description: 'Messenger Clone',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <ToasterContext />
          <ActiveStatus />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
