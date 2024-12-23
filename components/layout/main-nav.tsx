"use client";

import React from "react";
import Image from "next/image";
import { mainNavbarConfig } from "@/configs/navbar/main.config";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/libs/utils";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const MainNav = () => {
  const pathname = usePathname();

  return (
    <div className="bg-background py-5 px-6 flex items-center gap-10">
      <div className="">
        <div className="flex justify-center items-center p-2 rounded-full aspect-square bg-foreground">
          <Image
            className="dark:invert"
            src="https://nextjs.org/icons/vercel.svg"
            alt="Vercel logomark"
            width={20}
            height={20}
          />
        </div>
      </div>
      <div className="hidden lg:flex items-center gap-5">
        {mainNavbarConfig.items.map((item, index) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={index}
              href={item.href}
              className={cn(
                "uppercase transition-all",
                isActive
                  ? "text-foreground font-semibold"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {item.title}
            </Link>
          );
        })}
      </div>
      <div className="flex items-center gap-5 ml-auto">
        <Input
          placeholder="Search creators, collections,..."
          className="rounded-full shadow-none min-w-[320px]"
        />
        <Button className="uppercase rounded-full">Connect in</Button>
      </div>
    </div>
  );
};

export default MainNav;
