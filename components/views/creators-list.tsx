"use client";

import React, { useEffect } from "react";
import UserCard from "../common/user-card";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter, useSearchParams } from "next/navigation";

const tabs = [
  {
    key: "trending",
    label: "Trending",
  },
  {
    key: "networth",
    label: "Top Networth",
  },
];

const users = [
  {
    name: "John Doe",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet, nisl nec faucibus suscipit, nunc ligula ultricies odio, nec ultricies elit nunc non purus. Aenean nec turpis",
    isVerified: true,
    picture: "/images/mocks/Frame 1.png",
    username: "johndoe",
    walletAddress: "0x1234567890abcdef",
  },
  {
    name: "Jane Doe",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet, nisl nec faucibus suscipit, nunc ligula ultricies odio, nec ultricies elit nunc non purus. Aenean nec turpis",
    isVerified: true,
    picture: "/images/mocks/Frame 2.png",
    username: "janedoe",
    walletAddress: "0x1234567890abcdef",
  },
  {
    name: "John Doe",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet, nisl nec faucibus suscipit, nunc ligula ultricies odio, nec ultricies elit nunc non purus. Aenean nec turpis",
    isVerified: true,
    picture: "/images/mocks/Frame 3.png",
    username: "johndoe",
    walletAddress: "0x1234567890abcdef",
  },
  {
    name: "Jane Doe",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet, nisl nec faucibus suscipit, nunc ligula ultricies odio, nec ultricies elit nunc non purus. Aenean nec turpis",
    isVerified: true,
    picture: "/images/mocks/Frame 4.png",
    username: "janedoe",
    walletAddress: "0x1234567890abcdef",
  },
  {
    name: "John Doe",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet, nisl nec faucibus suscipit, nunc ligula ultricies odio, nec ultricies elit nunc non purus. Aenean nec turpis",
    isVerified: true,
    picture: "/images/mocks/Frame 5.png",
    username: "johndoe",
    walletAddress: "0x1234567890abcdef",
  },
  {
    name: "Jane Doe",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet, nisl nec faucibus suscipit, nunc ligula ultricies odio, nec ultricies elit nunc non purus. Aenean nec turpis",
    isVerified: true,
    picture: "/images/mocks/Frame 6.png",
    username: "janedoe",
    walletAddress: "0x1234567890abcdef",
  },
  {
    name: "John Doe",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet, nisl nec faucibus suscipit, nunc ligula ultricies odio, nec ultricies elit nunc non purus. Aenean nec turpis",
    isVerified: true,
    picture: "/images/mocks/Frame 7.png",
    username: "johndoe",
    walletAddress: "0x1234567890abcdef",
  },
  {
    name: "John Doe",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet, nisl nec faucibus suscipit, nunc ligula ultricies odio, nec ultricies elit nunc non purus. Aenean nec turpis",
    isVerified: true,
    picture: "/images/mocks/Frame 1.png",
    username: "johndoe",
    walletAddress: "0x1234567890abcdef",
  },
  {
    name: "Jane Doe",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet, nisl nec faucibus suscipit, nunc ligula ultricies odio, nec ultricies elit nunc non purus. Aenean nec turpis",
    isVerified: true,
    picture: "/images/mocks/Frame 2.png",
    username: "janedoe",
    walletAddress: "0x1234567890abcdef",
  },
  {
    name: "John Doe",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet, nisl nec faucibus suscipit, nunc ligula ultricies odio, nec ultricies elit nunc non purus. Aenean nec turpis",
    isVerified: true,
    picture: "/images/mocks/Frame 3.png",
    username: "johndoe",
    walletAddress: "0x1234567890abcdef",
  },
  {
    name: "Jane Doe",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet, nisl nec faucibus suscipit, nunc ligula ultricies odio, nec ultricies elit nunc non purus. Aenean nec turpis",
    isVerified: true,
    picture: "/images/mocks/Frame 4.png",
    username: "janedoe",
    walletAddress: "0x1234567890abcdef",
  },
  {
    name: "John Doe",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet, nisl nec faucibus suscipit, nunc ligula ultricies odio, nec ultricies elit nunc non purus. Aenean nec turpis",
    isVerified: true,
    picture: "/images/mocks/Frame 5.png",
    username: "johndoe",
    walletAddress: "0x1234567890abcdef",
  },
  {
    name: "Jane Doe",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet, nisl nec faucibus suscipit, nunc ligula ultricies odio, nec ultricies elit nunc non purus. Aenean nec turpis",
    isVerified: true,
    picture: "/images/mocks/Frame 6.png",
    username: "janedoe",
    walletAddress: "0x1234567890abcdef",
  },
  {
    name: "John Doe",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet, nisl nec faucibus suscipit, nunc ligula ultricies odio, nec ultricies elit nunc non purus. Aenean nec turpis",
    isVerified: true,
    picture: "/images/mocks/Frame 7.png",
    username: "johndoe",
    walletAddress: "0x1234567890abcdef",
  },
];

const CreatorsList = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const filter = searchParams.get("filter");

  useEffect(() => {
    if (!filter) {
      router.push("/?filter=trending");
    }
  }, [filter, router]);

  return (
    <div className="flex flex-col gap-6">
      <div className="border-b flex">
        <div className="container flex items-center">
          {tabs.map((tab) => (
            <Button
              key={tab.key}
              variant="ghost"
              className={`border-b-2 ${
                filter === tab.key ? "border-primary" : "border-transparent"
              } rounded-none uppercase`}
              onClick={() => router.push(`/?filter=${tab.key}`)}
            >
              {tab.label}
            </Button>
          ))}
        </div>
      </div>
      <div className="flex gap-6 container flex-wrap">
        {users.map((user, index) => (
          <UserCard
            key={index}
            name={user.name}
            bio={user.bio}
            isVerified={user.isVerified}
            picture={user.picture}
            username={user.username}
            walletAddress={user.walletAddress}
          />
        ))}
      </div>
    </div>
  );
};

export default CreatorsList;
