import "./App.css";
import Navigation from "./components/Navigation";
import { heroObject, aboutObject } from "./components/InfoSection/Data";
import InfoSection from "./components/InfoSection/InfoSection";
import Services from "./components/Services";

function App() {
  return (
    <div className="App">
      <Navigation />
      <div id="hero">
        <InfoSection {...heroObject} />
      </div>
      <div id="about">
        <InfoSection {...aboutObject} />
      </div>
      <div id="services">
        <Services />
      </div>
    </div>
  );
}

export default App;
