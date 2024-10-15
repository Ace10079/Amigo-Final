import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Cards from "./components/Cards";
import TimeLine from "./components/TimeLine";
import Work from "./components/Work";


export default function Home() {
  return (
   <div>
    <HeroSection/>
    <Cards/>
  <TimeLine/>
  <Work/>
   </div>
  );
}
