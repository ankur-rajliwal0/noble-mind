import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";
import OurMission from "./Components/OurMission";
import OurServices from "./Components/OurServices";
import WhyChoseUS from "./Components/WhyChoseUS";
import Join from "./Components/Join";
import Waiting from "./Components/Waiting";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <Hero />
      <OurMission />
      <OurServices />
      <WhyChoseUS />
      <Join />
      <Waiting />
      <Footer />
    </div>
  );
}

export default App;
