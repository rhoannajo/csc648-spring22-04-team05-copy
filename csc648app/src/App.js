import logo from './logo.svg';
import Chris from './components/chris/Chris';
import './App.css';
import Homepage from './components/Homepage';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">

      {/* Add your path to your component here */}
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/chris' element={<Chris />} />
      </Routes>

    </div>
  );
}

export default App;
