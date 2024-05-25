import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Navbar from "../ui/navbar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative w-full">
      <Navbar />
      <div className="flex flex-col gap-5 px-5">{children}</div>
    </div>
  );
}
