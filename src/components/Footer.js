import React from 'react'
import { useNavigate } from 'react-router-dom'

function Footer() {
    const navigate=useNavigate()
    return (
     <div class="footer " >
    <p class="text-sm text-center">&copy; 2025 Crowdfunding. All rights reserved.</p>
    <div class="footer-links">
      <a href="#" onClick={()=>navigate('/about')}>About</a>
      <a href="#" onClick={()=>navigate('/terms')}>Terms</a>
      <a href="#" onClick={()=>navigate('/privacy')}>Privacy</a>
      <a href="#"onClick={()=>navigate('/accessibility')}>Accessibility</a>
    </div>
  </div>   
    )
}

export default Footer
