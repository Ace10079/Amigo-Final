"use client";
import React from 'react'
import { motion } from "framer-motion";
import { LampContainer } from './ui/lamp'

function WeWork() {
  return (
    <div className='mt-5 lg:h-64'>
<LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="lg:mt-8 -mt-48 bg-gradient-to-br from-black to-black lg:py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        How We Work
      </motion.h1>
    </LampContainer>
    </div>
    
  )
}

export default WeWork
