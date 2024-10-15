import React from 'react';
import { InfiniteMovingCards } from './ui/infinite-moving-cards';

function MovingCards() {
    return (
        <div className="rounded-md flex flex-col antialiased bg-white items-center justify-center relative lg:top-11 top-1 overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      );
}

const testimonials = [
    {
      quote:
        "Accelerated Market Growth: Our strategic planning integrates market research, brand positioning, clear KPIs, and tailored marketing approaches to ensure fast and effective growth.",
    },
    {
      quote:
        "Collaborative Market Planning: We work closely with your team to align strategies with local market needs, production schedules, and your brand vision, ensuring seamless integration.",
    },
    {
      quote: "Synergistic Product Strategies: We develop product portfolios that enhance cross-market visibility and leverage complementary marketing opportunities, increasing overall efficiency and value.",
    },
    {
      quote:
        "Actionable Market Insights: We provide real-time, data-driven insights into market trends, enabling informed, strategic decisions that drive success.",
    },
   
];

export default MovingCards;
