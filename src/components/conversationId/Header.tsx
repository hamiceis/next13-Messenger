"use client";

import { useMemo, useState } from "react";
import { useOtherUser } from "@/hooks/useOtherUser";
import Link from "next/link";

import { HiChevronLeft, HiEllipsisHorizontal } from "react-icons/hi2";

import { Conversation, User } from "@prisma/client";
import { Avatar } from "../Avatar";
import { ProfileDrawer } from "./ProfileDrawer";
import { AvatarGroup } from "../AvatarGroup";
import { useActiveList } from "@/hooks/useActiveList";

interface HeaderProps {
  conversation: Conversation & {
    users: User[];
  };
}

export const Header: React.FC<HeaderProps> = ({ conversation }) => {
  const otherUser = useOtherUser(conversation);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const { members } = useActiveList();
  const isActive = members.indexOf(otherUser?.email!) !== -1;

  const statusText = useMemo(() => {
    if (conversation.isGroup) {
      return `${conversation.users.length} members`;
    }
    return isActive ? "Active" : "Offline";
  }, [conversation, isActive]);

  return (
    <>
    <ProfileDrawer
      data={conversation}
      isOpen={drawerOpen}
      onClose={() => setDrawerOpen(false)}
    />
    <div className="bg-white w-full flex border-b sm:px-4 py-3 px-4 lg:px-6 justify-between items-center shadow-sm">
      <div className="flex gap-3 items-center">
        <Link
          className="lg:hidden block text-sky-500 hover:text-sky-600 transition cursor-pointer"
          href="/conversations"
        >
          <HiChevronLeft size={32} />
        </Link>
        {conversation.isGroup ? (<AvatarGroup users={conversation.users}/>): (<Avatar user={otherUser} />)}
    
        <div className="flex flex-col">
          <div>{conversation.name || otherUser.name}</div>
          <div className="text-sm font-light text-neutral-500 ">
            {statusText}
          </div>
        </div>
      </div>
      <HiEllipsisHorizontal 
      className="text-sky-500 hover:text-sky-600 cursor-pointer transition"
      onClick={() => setDrawerOpen(true)}
      size={32} 
      />
    </div>
    </>
  );
};