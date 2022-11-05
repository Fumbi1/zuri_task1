import './App.css';
import { Routes, Route } from 'react-router-dom';
import Contactpage from './components/Pages/contactpage/contactpage';
import Homepage from './components/Pages/homepages/homepage';


function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/contact' element={<Contactpage />} />
      </Routes>
    </div>
  );
}

export default App;
