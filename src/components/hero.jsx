import { ArrowUpRight, CirclePlay } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="flex min-h-screen items-center justify-center px-6">
      <div className="max-w-3xl text-center">
        <h1
          className="mt-6 font-semibold text-4xl tracking-tighter sm:text-5xl md:text-6xl md:leading-[1.2] lg:text-7xl">
          Customized Shadcn UI Blocks & Components
        </h1>
        <p className="mt-6 text-foreground/80 md:text-lg">
          Explore a collection of Shadcn UI blocks and components, ready to
          preview and copy. Streamline your development workflow with
          easy-to-implement examples.
        </p>
        <div className="mt-12 flex items-center justify-center gap-4">
          <Button className="rounded-full text-base" size="lg">
            Get Started <ArrowUpRight className="size-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
