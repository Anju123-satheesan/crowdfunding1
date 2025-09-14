import logo from './logo.svg';
import './App.css';
import '../src/assets/styles.css'
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import { Link, Route, Router, Routes } from 'react-router-dom';
import ProjectDetails from './components/ProjectDetails';
import About from './components/About';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import SignUp from './components/SignUp';
import Terms from './components/Terms';
import Privacy from './components/Privacy';
import Accessibility from './components/Accessibility';
import Project from './components/Project';
function App() {
  return (
    // <div className="App">
      
    //    <Router>
    //   <div className="font-sans">
    //     {/* Navigation Menu */}
    //     {/* <nav className="p-4 bg-gray-200 flex space-x-4">
    //       <Link to="/" className="custom-button">Home</Link>
    //       <Link to="/projects" className="custom-button">Projects</Link>
    //       <Link to="/about" className="custom-button">About</Link>
    //     </nav> */}

    //     {/* Routes */}
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/projects" element={<ProjectDetails />} />
    //       <Route path="/about" element={<About />} />
    //     </Routes>
    //   </div>
    // </Router>
    
    // </div>
    <>
     <Header/>
     <div className="font-sans">
     
      {/* Navigation */}
      <nav className="p-4 bg-gray-200 flex space-x-4">
        <Link to="/" className="custom-button">Home</Link>
        <Link to="/projects" className="custom-button">Projects</Link>
        <Link to="/about" className="custom-button">About</Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/about" element={<About />} />
         <Route path="/login" element={<Login />} />
          <Route path="/dashbord" element={<Dashboard />} />
           <Route path="/signup" element={<SignUp />} />
             <Route path="/terms" element={<Terms />} />
               <Route path="/privacy" element={<Privacy />} />
                 <Route path="/accessibility" element={<Accessibility />} />

      </Routes>
    
    </div>
      <Footer/>
    </>
  );
}

export default App;
