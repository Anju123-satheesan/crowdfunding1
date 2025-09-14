import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate=useNavigate();
    function donate() {
      window.open('https://chat.whatsapp.com/BwkEsUmbRERGsnriJuHR2R', '_blank');
    }
    return (
<> 
       
         <section id="home" className="section">
            
    <div className="content-block">
      <h1 className="text-4xl md:text-5xl font-bold text-[#333333] mb-4">Crowdfunding Prosperity</h1>
      <p className="text-base md:text-lg text-gray-600 mb-4 text-center">Empower founders with a vision, supporting startups from Ideation to IPO with verified projects—100% non-profit.</p>
      {/* <div className="row gap-4 mb-4"> */}
       <div className="leadership-grid">
        {/* <div className="premium-card col-md-6"> */}
        <div className="leadership-card">
          <h2 className="text-lg md:text-xl font-semibold text-[#333333] mb-2 text-align-center">For Founders</h2>
          <p className="text-gray-600 mb-2 text-center">Launch verified projects and share 10% equity with the platform—no personal funding loss.</p>
          <div className="flex justify-center ">
            <a href="https://chat.whatsapp.com/BwkEsUmbRERGsnriJuHR2R" target="_blank" className="custom-button " style={{textDecoration:'none',margin:"4px"}}>Join Group</a>
            <button onClick={()=>navigate('/login')} className="custom-button">Start Project</button>
          </div>
        </div>
        {/* <div className="premium-card col-md-5"> */}
        <div className="leadership-card">
          <h2 className="text-lg md:text-xl font-semibold text-[#333333] mb-2 text-center">For Investors</h2>
          <p className="text-gray-600 mb-2 text-center">Invest from 100 AED in verified projects and earn dividends with up to 90% profit share annually.</p>
          <div className="flex justify-center space-x-2">
            <button onClick={()=>navigate('/projects')} className="custom-button">Invest Now</button>
          </div>
        </div>
      </div>
      <div className="mb-4">
        <h2 className="text-xl md:text-2xl font-semibold text-[#333333] mb-2 text-center">Funding Stages</h2>
        <div className="stage-grid">
          <div className="premium-card"><p className="text-sm text-center">Ideation</p></div>
          <div className="premium-card"><p className="text-sm text-center">Pre-Seed</p></div>
          <div className="premium-card"><p className="text-sm text-center">Seed</p></div>
          <div className="premium-card"><p className="text-sm text-center">Series A</p></div>
          <div className="premium-card"><p className="text-sm text-center">Series B</p></div>
          <div className="premium-card"><p className="text-sm text-center">Series C</p></div>
          <div className="premium-card"><p className="text-sm text-center">IPO</p></div>
        </div>
      </div>
      <p className="text-sm md:text-base text-gray-600 mb-4 text-center italic">A 100 AED investment can transform a startup and yield rich returns.</p>
      <div className="flex justify-center">
        <button onClick={()=>donate()} className="custom-button mb-4">Donate</button>
      </div>
      <p className="text-xs text-gray-600 mb-4 text-center">Via WhatsApp: <a href="https://chat.whatsapp.com/BwkEsUmbRERGsnriJuHR2R" target="_blank" className="text-[#D4AF37] underline">Join</a></p>
    </div>

    <div className="content-block">
      <h2 className="text-xl md:text-2xl font-semibold text-[#333333] mb-2 text-center">Platform Statistics</h2>
      <div className="stats-grid">
        <div className="premium-card">
          <h3 className="text-lg md:text-xl font-bold text-[#D4AF37] text-center" id="founders-joined">1</h3>
          <p className="text-gray-600 text-sm text-center">Founders</p>
        </div>
        <div className="premium-card">
          <h3 className="text-lg md:text-xl font-bold text-[#D4AF37] text-center" id="investors">0</h3>
          <p className="text-gray-600 text-sm text-center">Investors</p>
        </div>
        <div className="premium-card">
          <h3 className="text-lg md:text-xl font-bold text-[#D4AF37] text-center" id="total-raised">457,000 AED</h3>
          <p className="text-gray-600 text-sm text-center">Raised</p>
        </div>
        <div className="premium-card">
          <h3 className="text-lg md:text-xl font-bold text-[#D4AF37] text-center" id="live-projects">1</h3>
          <p className="text-gray-600 text-sm text-center">Live</p>
        </div>
        <div className="premium-card">
          <h3 className="text-lg md:text-xl font-bold text-[#D4AF37] text-center" id="funds-raised">0 AED</h3>
          <p className="text-gray-600 text-sm text-center">Funds</p>
        </div>
        <div className="premium-card">
          <h3 className="text-lg md:text-xl font-bold text-[#D4AF37] text-center" id="running-projects">1</h3>
          <p className="text-gray-600 text-sm text-center">Running</p>
        </div>
      </div>
    </div>

    <div className="content-block">
      <h2 className="text-xl md:text-2xl font-semibold text-[#333333] mb-2 text-center">Join the Movement</h2>
      <p className="text-sm md:text-base text-gray-600 mb-2 text-center">The platform takes 10% equity, enabling investor dividends from profits.</p>
      <div className="flex justify-center space-x-2">
        <button onClick={()=>navigate('/projects')} className="custom-button" style={{margin:"4px"}}>Invest</button>
        <button onClick={()=>navigate('/start-project')} className="custom-button">Launch</button>
      </div>
    </div>

    <div className="content-block leadership-spacing">
      <h2 className="text-xl md:text-2xl font-semibold text-[#333333] mb-2 text-center">Leadership</h2>
      <div className="leadership-grid">
        <div className="leadership-card">
          <h3 className="text-md md:text-lg font-semibold text-[#333333] mb-1 text-center">For Founders</h3>
          <p className="text-gray-600 mb-1 text-center">Led by CEO Asif Azad, grow your business with 10% equity partnership.</p>
          <div className="flex justify-center">
            <button onClick={()=>navigate('/login')} className="custom-button">Start</button>
          </div>
        </div>
        <div className="leadership-card">
          <h3 className="text-md md:text-lg font-semibold text-[#333333] mb-1 text-center">For Investors</h3>
          <p className="text-gray-600 mb-1 text-center">Earn dividends from curated startups via 10% platform equity with annual returns.</p>
          <div className="flex justify-center">
            <button onClick={()=>navigate('/projects')} className="custom-button">Invest</button>
          </div>
        </div>
      </div>
    </div>
   
  </section>
   
  </>
    )
}

export default Home
