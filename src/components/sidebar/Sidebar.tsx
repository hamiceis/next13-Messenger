import { ReactNode } from "react";
import { DesktopSidebar } from "./DesktopSidebar";
import { MobileFooter } from "./MobileFooter";
import { getCurrentUser } from "@/actions/getCurrentUser";

export async function Sidebar({ children }: { children: ReactNode}) {

  const currentUser = await getCurrentUser() ;

  return (
    <div className="h-full">
      <DesktopSidebar currentUser={currentUser!} />
      <MobileFooter />
      <main className="lg:pl-20 h-full">
      {children}
      </main>
    </div>
  )
}