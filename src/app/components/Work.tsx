import React from 'react'
import { CardStack } from './ui/card-stack'
import { cn } from '@/lib/utils';

function Work() {
    const CARDS = [
        {
          id: 0,
          name: "Manu Arora",
          designation: "Senior Software Engineer",
          content: (
            <p>
              These cards are amazing, <Highlight>I want to use them</Highlight> in my
              project. Framer motion is a godsend ngl tbh fam 🙏
            </p>
          ),
        },
        {
          id: 1,
          name: "Elon Musk",
          designation: "Senior Shitposter",
          content: (
            <p>
              I dont like this Twitter thing,{" "}
              <Highlight>deleting it right away</Highlight> because yolo. Instead, I
              would like to call it <Highlight>X.com</Highlight> so that it can easily
              be confused with adult sites.
            </p>
          ),
        },
        {
          id: 2,
          name: "Tyler Durden",
          designation: "Manager Project Mayhem",
          content: (
            <p>
              The first rule of
              <Highlight>Fight Club</Highlight> is that you do not talk about fight
              club. The second rule of
              <Highlight>Fight club</Highlight> is that you DO NOT TALK about fight
              club.
            </p>
          ),
        },
      ];
  return (
    <div className='flex lg:flex-row flex-col justify-center gap-10 bg-white'>
      <p className='text-5xl font-bold mt-10 text-center'>What We Do</p>
      <div className='flex justify-center'>
      <CardStack items={CARDS} />
      </div>
    </div>
  )
}
export const Highlight = ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => {
    return (
      <span
        className={cn(
          "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
          className
        )}
      >
        {children}
      </span>
    );
  };

export default Work
