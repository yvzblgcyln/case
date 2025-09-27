"use client";
import React from "react";
import Link from "next/link";
import { useAuthStore } from "@/store/useAuthStore";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { navbarLinks } from "@/consts";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { LuLayoutDashboard, LuLogOut } from "react-icons/lu";

export default function Navbar() {
  return (
    <header className="w-full bg-zinc-900 text-zinc-100 border-b border-zinc-700 min-h-[68px]">
      <div className="container mx-auto flex justify-between items-center p-4">
        <NavbarLinks />
        <AuthArea />
      </div>
    </header>
  );
}

function NavbarLinks() {
  return (
    <div className="flex items-center gap-8">
      <Link
        className="flex items-center gap-2 text-lg font-bold text-amber-400 hover:opacity-90"
        href={navbarLinks[0].to}
      >
        <img src={navbarLinks[0].icon} alt="" className="w-6 h-6" />
        {navbarLinks[0].name}
      </Link>

      <div className="flex gap-6 items-center">
        {navbarLinks.slice(1).map((link) => (
          <Link
            className="text-sm text-zinc-300 hover:text-white transition-colors"
            key={link.name}
            href={link.to}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

function AuthArea() {
  const router = useRouter();
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);

  const userMenuItems = [
    {
      name: "Dashboard",
      action: () => router.push("/dashboard"),
      icon: <LuLayoutDashboard size={16} />,
    },
    {
      name: "Logout",
      action: () => handleLogout(),
      icon: <LuLogOut size={16} />,
    },
  ];

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  return (
    <div className="flex items-center gap-4">
      {user ? (
        <>
          <p className="hidden sm:block text-sm text-zinc-300">
            {user.username}
          </p>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className="cursor-pointer h-9 w-9">
                <AvatarImage src={user.image} alt="user avatar" />
                <AvatarFallback className="bg-amber-500 font-bold">
                  {user.username[0].toUpperCase()}
                </AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>

            <DropdownMenuContent
              align="end"
              className="bg-zinc-800 border-zinc-700 text-white w-48"
            >
              {userMenuItems.map((item) => (
                <DropdownMenuItem
                  key={item.name}
                  onClick={item.action}
                  className="flex items-center gap-3 cursor-pointer focus:bg-zinc-700 p-2"
                >
                  <span className="text-zinc-400">{item.icon}</span>
                  <span className="text-white">{item.name}</span>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </>
      ) : (
        <Button
          variant="ghost"
          className="cursor-pointer hover:bg-zinc-800 hover:text-white"
          onClick={() => router.push("/auth")}
        >
          Login
        </Button>
      )}
    </div>
  );
}
