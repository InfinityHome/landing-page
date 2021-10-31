import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation";

// Route

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/" />
      </Switch>
    </Router>
  );
}

export default App;
