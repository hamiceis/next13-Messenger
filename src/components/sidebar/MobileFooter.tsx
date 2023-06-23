"use client"

import { useConversation } from "@/hooks/useConversation";
import { useRoutes } from "@/hooks/useRoutes"

import { MobileItem } from "./MobileItem";

export function MobileFooter(){
  const routes = useRoutes();
  const { isOpen } = useConversation();

  if(isOpen) {
    return null;
  }

  return (
    <div
    className="fixed justify-between w-full bottom-0 z-40 flex items-center bg-white border-t lg:hidden"
    >
      {routes.map(item => (
        <MobileItem 
          key={item.href}
          href={item.href}
          icon={item.icon}
          onClick={item.onClick}
          active={item.active}
        />
      ))}
    </div>
  )
}