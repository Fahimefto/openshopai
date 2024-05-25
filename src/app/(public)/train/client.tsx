import MainLayout from "@/components/layout/main-layout";
import React from "react";
import { ProgressSection } from "../import/client";
import { Button } from "@/components/ui/button";

const PreviewSection = () => {
  return (
    <div className="flex justify-between ">
      <div>
        <h2 className="text-2xl font-bold">Preview</h2>
      </div>
      <div className="flex gap-2">
        <Button variant="outline">Edit your assistant</Button>
        <Button>Publish to website</Button>
      </div>
    </div>
  );
};

export default function Train() {
  return (
    <section className="flex flex-col gap-10 lg:px-10">
      <ProgressSection title="Training your AI shopping assistant" />
      <PreviewSection />
    </section>
  );
}
