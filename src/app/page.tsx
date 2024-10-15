import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Cards from "./components/Cards";
import TimeLine from "./components/TimeLine";
import Work from "./components/Work";
import MovingCards from "./components/MovingCards";
import WeWork from "./components/WeWork";


export default function Home() {
  return (
   <div>
    <HeroSection/>
    <Cards/>
  <TimeLine/>
  <Work/>
  <WeWork/>
  <MovingCards/>
   </div>
  );
}
