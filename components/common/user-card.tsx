"use client";

import React from "react";
import Image from "next/image";
import { BadgeCheck, Bookmark, Heart, Link } from "lucide-react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { cn } from "@/libs/utils";

interface UserCardProps {
  picture: string | null;
  name: string;
  bio: string;
  username: string;
  walletAddress: string;
  isVerified: boolean;
  size?: "sm" | "md" | "lg";
}

const UserCard = ({ size = "md", ...props }: UserCardProps) => {
  return (
    <div
      className={cn(
        "bg-background text-foreground border shadow rounded-2xl w-full",
        size === "sm"
          ? "max-w-[150px]"
          : size === "md"
          ? "max-w-[250px]"
          : "max-w-[350px]"
      )}
    >
      <div className="w-full p-2">
        <Image
          src={props.picture ?? "https://via.placeholder.com/150"}
          alt={props.name}
          width={150}
          height={150}
          className="object-cover rounded-2xl w-full"
        />
      </div>
      <div className="space-y-2 px-3 pb-3">
        <div className="flex justify-between gap-4">
          <div className="flex flex-col">
            <h1
              className={cn(
                "font-bold",
                size === "sm"
                  ? "text-md"
                  : size === "md"
                  ? "text-xl"
                  : "text-2xl"
              )}
            >
              {props.name}
            </h1>
            <p
              className={cn(
                "text-muted-foreground",
                size === "sm"
                  ? "text-xs"
                  : size === "md"
                  ? "text-sm"
                  : "text-base"
              )}
            >
              @{props.username}
            </p>
          </div>
          <div className="p-1">
            <BadgeCheck
              className={cn(
                "text-blue-500",
                size === "sm"
                  ? "w-4 h-4"
                  : size === "md"
                  ? "w-6 h-6"
                  : "w-8 h-8"
              )}
            />
          </div>
        </div>
        <p
          className={cn(
            "text-foreground",
            size === "sm" ? "text-xs" : size === "md" ? "text-sm" : "text-base"
          )}
        >
          {shortedBio(props.bio, size === "sm" ? 20 : size === "md" ? 50 : 100)}
        </p>
      </div>
      <Separator />
      <div className="flex items-center p-1.5">
        <Button variant="ghost" size="icon">
          <Bookmark
            className={
              size === "sm" ? "w-3 h-3" : size === "md" ? "w-6 h-6" : "w-8 h-8"
            }
          />
        </Button>
        <Button variant="ghost" size="icon">
          <Heart
            className={
              size === "sm" ? "w-3 h-3" : size === "md" ? "w-6 h-6" : "w-8 h-8"
            }
          />
        </Button>

        <div className="ml-auto">
          <Button className="rounded-full" size="sm">
            {size === "sm" ? <Link className="w-3 h-3" /> : "Link In Bio"}
          </Button>
        </div>
      </div>
    </div>
  );
};

const shortedBio = (bio: string, length = 50) => {
  return bio.length > length ? bio.slice(0, length) + "..." : bio;
};

export default UserCard;
