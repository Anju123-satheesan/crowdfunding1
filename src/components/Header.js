import React from 'react'
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate=useNavigate();
      function toggleMenu() {
      const menu = document.getElementById('nav-menu');
    //  menu.classList.toggle('active');
    }

    return (
        <div className='header'> <div className="logo  ">Crowdfunding</div>
    <button className="menu-btn" onClick={toggleMenu()}>&#9776;</button>
    <div className="nav-menu " id="nav-menu">
      <div className="nav-item"><button onClick={()=>navigate('/')} className="custom-button">Home</button></div>
      <div className="nav-item"><button onClick={()=>navigate('/projects')} className="custom-button">Projects</button></div>
      <div className="nav-item"><button onClick={()=>navigate('/')} className="custom-button">Start Project</button></div>
      <div className="nav-item"><button onClick={()=>navigate('/dashbord')} className="custom-button">Dashboard</button></div>
      <div className="nav-item"><button onClick={()=>navigate('/login')} className="custom-button">Login</button></div>
      <div className="nav-item"><button onClick={()=>navigate('/signup')} className="custom-button" disabled>Sign Up</button></div>
    </div></div>
    )
}

export default Header
