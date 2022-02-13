import logo from "./logo.svg";
import Chris from "./components/chris/Chris";
import Rhoanna from "./components/rhoanna/Rhoanna";
import "./App.css";
import Homepage from "./components/Homepage";
import { Routes, Route } from "react-router-dom";
import Nelson from "./components/nelson/Nelson";
import Jia from "./components/jia/jia";
import Michael from './components/michael/michael';
import Kim from './components/kim/Kim';

function App() {
  return (
    <div className="App">
      {/* Add your path to your component here */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/chris" element={<Chris />} />
        <Route path="/nelson" element={<Nelson />} />
        <Route path="/rhoanna" element={<Rhoanna />} />
        <Route path="/jia" element={<Jia />} />
        <Route path='/michael' element={<Michael />} />
        <Route path='/kim' element={<Kim />} />
      </Routes>

    </div>
  );
}

export default App;
