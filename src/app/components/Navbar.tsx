"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Home">
        </MenuItem> 
        <MenuItem setActive={setActive} active={active} item="Our Product">
        <div className="text-sm gap-10">
            <ProductItem
              title="Amigo"
              href=""
              src="/catalouge.jpeg"
              description="YOUR SPECIALIST FOR CLASSIC CARS AND MOTORCYCLES"
            />
          </div>
        </MenuItem>  
        <MenuItem setActive={setActive} active={active} item="Contact Us">
        </MenuItem>     
      </Menu>
    </div>
  )
}

export default Navbar
