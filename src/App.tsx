import HeroPage from "./components/HeroPage";
import About from "./components/About";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import Team from "./components/Team";
import LocateUs from "./components/LocateUs";
import Contact from "./components/Contact";
import NavMovil from "./components/NavMovil";

function App() {
  return (
    <div>
      <HeroPage></HeroPage>
      <NavMovil></NavMovil>
      <main className="scroll-smooth  ">
        <About></About>
        <Services></Services>
        <WhyUs></WhyUs>
        <Team></Team>
        <LocateUs></LocateUs>
        <Contact></Contact>
      </main>
    </div>
  );
}

export default App;
