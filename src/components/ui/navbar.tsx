"use client";

import React from "react";
import Image from "next/image";
import { Button } from "./button";

export default function Navbar() {
  return (
    <nav className="lg:flex justify-center items-center  gap-10 hidden">
      <div className="text-primary/50 font-semibold">About</div>
      <div className="w-36 h-20 relative">
        <Image
          src={"/logo.svg"}
          alt="logo"
          fill
          style={{
            objectFit: "contain",
            objectPosition: "center",
          }}
        ></Image>
      </div>
      <div className="text-primary/50 font-semibold">Pricing</div>
      <div className="absolute right-10">
        <Button variant={"outlinePrimary"}>Login</Button>
      </div>
    </nav>
  );
}
