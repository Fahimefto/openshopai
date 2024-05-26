"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import React, { use } from "react";
import { Globe, SquareCheckBigIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Credenza,
  CredenzaTrigger,
  CredenzaContent,
  CredenzaHeader,
  CredenzaTitle,
  CredenzaDescription,
  CredenzaBody,
  CredenzaFooter,
  CredenzaClose,
} from "@/components/ui/credenza";

import Image from "next/image";
import HR from "@/components/ui/hr";
import { FcGoogle } from "react-icons/fc";
import { useAppSelector } from "@/redux/hooks";
import { SiteMapElement } from "@/lib/sitemap";

const PaginationSection = () => {
  return (
    <Pagination className="pb-5 pt-10">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

const ProductCard = ({ data }: { data: SiteMapElement }) => {
  const [selected, setSelected] = React.useState(false);

  return (
    <Card
      className={cn("w-full  hover:cursor-pointer", {
        "outline-primary outline animate-pulse": selected,
      })}
      onClick={() => setSelected((prev) => !prev)}
    >
      <CardHeader>
        <CardTitle className="gap-2 text-sm flex items-start justify-between ">
          <p className="line-clamp-3">Vancouver Swiss Water Decaf</p>

          {selected ? (
            <SquareCheckBigIcon className="w-4 h-4 justify-start" />
          ) : (
            <div className={"w-4 h-4 rounded border justify-start "} />
          )}
        </CardTitle>
        <CardDescription className="text-sm line-clamp-3">
          This blend has notes of candied almonds and chocolate, processed 100%
          chemical-free to be 99.99% caffeine-free. Perfect for those who enjoy
          dessert-tasting coffee.
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <div className="flex gap-2 items-center text-primary/50">
          <Globe className="w-4 h-4" />
          <p className="line-clamp-1 w-full overflow-hidden">{data}</p>
        </div>
      </CardFooter>
    </Card>
  );
};

const ProductSection = () => {
  const urls = useAppSelector((state) => state.sitemap.urls);
  return (
    <section className="flex flex-col gap-3 lg:pt-5">
      <div className="w-full flex justify-between">
        <h2 className="text-2xl font-bold">Products</h2>
        <div className="gap-3 flex">
          <Button variant="outline">Select All</Button>

          <Credenza>
            <CredenzaTrigger asChild>
              <Button>Launch</Button>
            </CredenzaTrigger>
            <CredenzaContent>
              <CredenzaHeader>
                <CredenzaTitle className="justify-center flex">
                  <div className="w-36 h-16 relative">
                    <Image src="/logo.svg" fill alt="logo" />
                  </div>
                </CredenzaTitle>
              </CredenzaHeader>
              <CredenzaBody className="pb-5">
                <div className="text-2xl font-bold pb-5 text-center">
                  <h2>Sign In to continue and save your progress</h2>
                </div>

                <div className="flex flex-col space-y-4">
                  <Input
                    placeholder="Enter your email address"
                    className="border-primary"
                  />
                  <Button className="w-full">Sign In</Button>
                  <HR text="OR" />
                  <Button className="w-full flex gap-2" variant={"outline"}>
                    <FcGoogle className="w-5 h-5" />
                    Sign In with google
                  </Button>
                </div>
              </CredenzaBody>
            </CredenzaContent>
          </Credenza>
        </div>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1  gap-4 w-full">
        {urls &&
          urls.map((url, idx) => {
            return <ProductCard data={url} key={idx} />;
          })}
      </div>
      <PaginationSection />
    </section>
  );
};

export const ProgressSection = ({
  title,
  progress,
  allCount,
  currentCount,
}: {
  title: string;
  progress?: number;
  allCount?: number;
  currentCount?: number;
}) => {
  return (
    <section className="flex flex-col gap-3">
      <div className="flex justify-between">
        <h1 className="text-2xl font-semibold">{title}</h1>
        {allCount! > 0 || currentCount! > 0 ? (
          <h1 className="text-2xl font-semibold">
            {currentCount ?? 1}/{allCount}
          </h1>
        ) : null}
      </div>
      <Progress value={1} className="h-2" />
    </section>
  );
};

export default function Import() {
  const urls = useAppSelector((state) => state.sitemap.urls);
  console.log("🚀 ~ Import ~ urls:", urls);

  return (
    <div className="flex flex-col gap-10 lg:px-10 pt-5">
      <ProgressSection title="Importing your Product" allCount={urls.length} />
      <ProductSection />
    </div>
  );
}
