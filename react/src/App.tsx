import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Class from './pages/Class';
import Syllabus from './pages/Syllabus';
import Showcase from './pages/Showcase';

import './App.css';
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/class" element={<Class />} />
          <Route path="/about" element={<About />} />
          <Route path="/syllabus" element={<Syllabus />} />
          <Route path="/showcase" element={<Showcase />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;