import HeroPage from "./components/HeroPage";
import About from "./components/About";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import Team from "./components/Team";
import LocateUs from "./components/LocateUs";
import Contact from "./components/Contact";
import NavMovil from "./components/NavMovil";
import NavDesktop from "./components/NavDesktop";
import TeamDesktop from "./components/TeamDesktop";
import { Toaster } from "./components/ui/toaster";
import AOS from "aos";
import "aos/dist/aos.css";
import {useEffect} from "react";
function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  
  return (
    <div className="scroll-smooth">
      <NavDesktop></NavDesktop>
      <NavMovil></NavMovil>
      <HeroPage></HeroPage>
      <About></About>
      <Services></Services>
      <WhyUs></WhyUs>
      <TeamDesktop></TeamDesktop>
      <Team></Team>
      <LocateUs></LocateUs>
      <Contact></Contact>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
