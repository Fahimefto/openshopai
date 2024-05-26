import MainLayout from "@/components/layout/main-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

const InputURL = () => {
  return (
    <div className="w-full max-w-lg items-center mx-auto pt-5">
      <form className="flex gap-2">
        <Input
          type="email"
          placeholder="Enter your shop URL"
          className="border-primary"
        />
        <Button type="submit">Get Started!- Its Free</Button>
      </form>
      <h3 className="text-center pt-5 text-primary/50 font-bold text-sm">
        * Get your chatbot in miniutes *
      </h3>
    </div>
  );
};

function HeroSection() {
  return (
    <section className="text-center pt-24 ">
      <div className="flex flex-col w-full">
        <h1 className="lg:text-6xl font-bold text-gray-500 leading-relaxed gap-5">
          Opensource Shopify alternative
        </h1>
        <h1 className="lg:text-6xl font-bold mb-4 leading-10">
          ecommerce store that sells for you
        </h1>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <InputURL />
    </>
  );
}
