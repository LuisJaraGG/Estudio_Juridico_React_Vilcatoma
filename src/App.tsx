import HeroPage from "./components/HeroPage";
import About from "./components/About";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import Team from "./components/Team";
import LocateUs from "./components/LocateUs";
import Contact from "./components/Contact";
import NavMovil from "./components/NavMovil";
import NavDesktop from "./components/NavDesktop";
function App() {
  return (
    <div className="scroll-smooth">
      <NavDesktop></NavDesktop>
      <NavMovil></NavMovil>
      <HeroPage></HeroPage>
        <About></About>
        <Services></Services>
        <WhyUs></WhyUs>
        <Team></Team>
        <LocateUs></LocateUs>
        <Contact></Contact>
    </div>
  );
}

export default App;
