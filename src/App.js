import "./App.css";
import Navigation from "./components/Navigation";
import { homeObjOne, homeObjTwo } from "./components/InfoSection/Data";
import InfoSection from "./components/InfoSection/InfoSection";
import Services from "./components/Services";

function App() {
  return (
    <div className="App">
      <Navigation />
      <div id="section1">
        <InfoSection {...homeObjOne} />
      </div>
      <div id="section2">
        <InfoSection {...homeObjTwo} />
      </div>
      <div id="section3">
        <Services />
      </div>
    </div>
  );
}

export default App;
