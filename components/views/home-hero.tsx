"use client";

import React from "react";
import UserCard from "../common/user-card";
import Balancer from "react-wrap-balancer";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { AnimatedTooltip } from "../ui/animated-tooltip";

const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
  },
];

const HomeHero = () => {
  return (
    <div className="p-10">
      <div className="flex flex-col items-center gap-6 flex-1 text-center mx-auto max-w-screen-lg">
        <div className="flex items-center justify-center w-full">
          <AnimatedTooltip items={people} />
        </div>
        <Balancer as="h1" className="text-3xl lg:text-8xl font-bold">
          From Influence to Crypto Earnings
        </Balancer>
        <Balancer as="p" className="text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet,
          nisl nec faucibus suscipit, nunc ligula ultricies odio, nec ultricies
          elit nunc non purus. Aenean nec turpis
        </Balancer>
        <div className="flex items-center gap-4">
          <Button className="rounded-full">Complete survey for $KBIO</Button>
          <Button variant="outline" className="rounded-full">
            Join our community
            <ArrowRight />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
