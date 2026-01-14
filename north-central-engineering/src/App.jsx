import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import About from './components/About';
import ITSolutions from './components/Itsolutions';
import Navbar from "./components/Navbar";
import ScrollToHash from "./components/ScrollToHash";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToHash /> 
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/itsolutions" element={<ITSolutions />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

