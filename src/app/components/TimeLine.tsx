import Image from "next/image";
import React from 'react'
import { Timeline } from "./ui/timeline";
import { WavyBackground } from "./ui/wavy-background";
function TimeLine() {
    const data = [
        {
          title: "1985",
          content: (
            <div>
              <p className="text-xs md:text-3xl font-normal mb-8">
                Incoprated Amigo Agencies in Kenya
              </p>
            </div>
          ),
        },
        {
            title: "1990",
            content: (
              <div>
                <p className="text-xs md:text-3xl font-normal mb-8">
                 Expanded to KSA Under Najla Establishment
                </p>
              </div>
            ),
          },
          {
            title: "1998",
            content: (
              <div>
                <p className="text-xs md:text-3xl font-normal mb-8">
                 Signed Up STP distribution for KSA. Followed by Armorell in 2001
                </p>
              </div>
            ),
          },
          {
            title: "2014",
            content: (
              <div>
                <p className="text-xs md:text-3xl font-normal mb-8">
                 Rebranded to The Agent for Car Care growing with 14+ brands
                </p>
              </div>
            ),
          },
          {
            title: "2018",
            content: (
              <div>
                <p className="text-xs md:text-3xl font-normal mb-8">
                The Agent for Car Care merged with Automotive Experts,growing with 20+ brands.
                </p>
              </div>
            ),
          },
          {
            title: "2024",
            content: (
              <div>
                <p className="text-xs md:text-3xl font-normal mb-8">
                 The Original 'Amigo Agencies' established in Dubai
                </p>
              </div>
            ),
          },
      ];
  return (
    <div className="w-full flex flex-col items-center">
      <WavyBackground className="">
        <p className="text-2xl md:text-4xl lg:text-7xl text-black font-bold inter-var text-center">
          Where it All Begin
        </p>
      </WavyBackground>
      
      <div className="w-3/4 flex justify-center items-center p-4 ">
        <Timeline data={data} />
      </div>
    </div>
  )
}

export default TimeLine
