"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";

function Cards() {
  return (
    <div className="mb-20">
      
      <h1 className="text-center mt-20 md:mt-0 text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-green-300 to-green-800">
        Why Choose Amigo
      </h1>
      
        <div className="flex lg:flex-row flex-col mt-5 gap-3 p-3">
          <div>
          <BackgroundGradient>
            <p className="p-3">
              Our product lineup offers comprehensive solutions suitable for
              automotive, industrial, and marine applications. We partner with
              brands that cater to both OEM and aftermarket needs, serving
              retail and trade markets in various sectors such as mining,
              transport, construction, marine, passenger vehicles, and off-road
              vehicles.
            </p>
            </BackgroundGradient>
          </div>
          <div>
          <BackgroundGradient>
            <p className="p-3">
              We leverage our local expertise and strategic insight to drive
              rapid market entry and sustained success. Our approach ensures
              that your brand can thrive from the outset through thoughtful and
              informed planning.
            </p>
            </BackgroundGradient>
          </div>
          <div>
          <BackgroundGradient>
            <p className="p-3">
              We develop product portfolios that enhance cross-market visibility
              and leverage complementary marketing opportunities, increasing
              overall efficiency and value.
            </p>
            </BackgroundGradient>
          </div>
        </div>
      
    </div>
  );
}

export default Cards;
