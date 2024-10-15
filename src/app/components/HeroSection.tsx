import Link from "next/link";
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

function HeroSection() {
  return (
    <div className="h-auto w-full md:h-[35rem] flex flex-col justify-center items-center relative overflow-hidden py-10 md:py-0 mx-auto">
      <Spotlight
        className="-top-24 left-0 md:left-60 md:-top-20"
        fill="green"
      />
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="mt-20 md:mt-0 text-4xl md:text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-green-300 to-green-800">
          Amigo
        </h1>
        <p className="mt-4 font-normal text-base md:text-lg text-black max-w-lg">
          Amigo’s product focus is OEM and replacement parts and materials for
          automotive, mining, construction and marine equipment.
        </p>
        <div className="mt-6">
          <Link href="/catalouge">
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              View Catalouge
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
