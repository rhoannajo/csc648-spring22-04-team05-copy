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
import Login from './components/login/Login';
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import TodoList from "./components/to-do-list/TodoList";
import Navbar from "./components/navbar/Navbar";



function App() {

  const user = useSelector(selectUser);
 
  return (
    <div className="App">
      {/* Add your path to your component here */}
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/chris" element={<Chris />} />
        <Route path="/nelson" element={<Nelson />} />
        <Route path="/rhoanna" element={<Rhoanna />} />
        <Route path="/jia" element={<Jia />} />
        <Route path='/michael' element={<Michael />} />
        <Route path='/kim' element={<Kim />} />
       
      </Routes>
      {user ? <TodoList/> : <Login/>}
      
      
     
     
    </div>
  );
}

export default App;
