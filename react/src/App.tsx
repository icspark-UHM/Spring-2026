import { Routes, Route, HashRouter } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Class from './pages/Class';
import Syllabus from './pages/Syllabus';
import Showcase from './pages/Showcase';

import './App.css';
import About from "./pages/About";

// Hackathon pages
import HackathonHome from './pages/Hackathon/Home';
import HackathonInfo from './pages/Hackathon/Info';
import HackathonProjects from './pages/Hackathon/Projects';
import HackathonRules from './pages/Hackathon/Rules';
// import HackathonMentors from './pages/Hackathon/Mentors';
// import HackathonStudents from './pages/Hackathon/Students';
import HackathonSchedule from "./pages/Hackathon/Schedule";
import HackathonAbout from "./pages/Hackathon/About";

function App() {
  return (
    // <BrowserRouter basename={import.meta.env.BASE_URL}>
    //   <div className="App">
    //     <Header />
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/class" element={<Class />} />
    //       <Route path="/about" element={<About />} />
    //       <Route path="/syllabus" element={<Syllabus />} />
    //       <Route path="/showcase" element={<Showcase />} />
    //       <Route path="/hackathon" element={<HackathonHome />} />
    //     </Routes>
    //     <Footer />
    //   </div>
    // </BrowserRouter>
  <HashRouter>
    <div className="App">
      <Routes>
        {/* Main site routes - with Header/Footer */}
        <Route path="/" element={
          <>
            <Header />
            <Home />
            <Footer />
          </>
        } />
        <Route path="/class" element={
          <>
            <Header />
            <Class />
            <Footer />
          </>
        } />
        <Route path="/about" element={
          <>
            <Header />
            <About />
            <Footer />
          </>
        } />
        <Route path="/syllabus" element={
          <>
            <Header />
            <Syllabus />
            <Footer />
          </>
        } />
        <Route path="/showcase" element={
          <>
            <Header />
            <Showcase />
            <Footer />
          </>
        } />

        {/* Hackathon routes - NO Header/Footer (custom nav inside) */}
        <Route path="/hackathon" element={<HackathonHome />} />
        <Route path="/hackathon/info" element={<HackathonInfo />} />
        <Route path="/hackathon/projects" element={<HackathonProjects />} />
        <Route path="/hackathon/schedule" element={<HackathonSchedule />} />
        <Route path="/hackathon/about" element={<HackathonAbout />} />
        <Route path="/hackathon/rules" element={<HackathonRules />} />

      </Routes>
    </div>
  </HashRouter>
  );
}

export default App;