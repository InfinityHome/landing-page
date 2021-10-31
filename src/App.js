import { BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';

// Route

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Router path='/' />
      </Switch>
    </Router>
  );
}

export default App;
