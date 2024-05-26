"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import { useAppDispatch } from "@/redux/hooks";
import { UrlSliceAction } from "@/redux/feature/web/url-slice";

const formSchema = z.object({
  url: z.string().url({ message: "URL Required" }),
});

const InputURL = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      url: "",
    },
  });
  const { toast } = useToast();
  const router = useRouter();
  const dispatch = useAppDispatch();

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);

    if (!values.url) {
      return;
    }

    try {
      const res = await fetch("/api/sitemap", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url: values.url }),
      });

      const data = await res.json();
      if (data) {
        dispatch(UrlSliceAction.setUrls(data.data));
        toast({
          title: "Done!",
          description: "We are analyzing your website and extracting data.",
        });
        router.push("/import");
      }
    } catch (e) {
      toast({
        title: "Error",
        description: "Something went wrong",
        variant: "destructive",
      });
    }
  }
  return (
    <div className="w-full pt-5 ">
      <Form {...form}>
        <form
          className="flex gap-2 justify-center max-w-xl mx-auto"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name="url"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl className="">
                  <Input
                    placeholder="Enter your shop URL"
                    className="border-primary min-w-full"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit">Get Started!- Its Free</Button>
        </form>
      </Form>
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
