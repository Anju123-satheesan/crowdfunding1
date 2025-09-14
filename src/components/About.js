import React from 'react'

function About() {
    return (
         <section id="about" class="section hidden">
    <div class="content-block">
      <h2 class="text-2xl md:text-3xl font-semibold text-[#333333] mb-4 text-center">About Us</h2>
      <div class="space-y-4 text-center">
        <div class="accordion">
          <div class="accordion-header text-center" onclick="this.parentElement.classList.toggle('active')">Mission</div>
          <div class="accordion-content text-center">
            <p class="text-sm md:text-base text-gray-600">Founded in 2025, we support startups from Ideation to IPO with verified projects.</p>
          </div>
        </div>
        <div class="accordion">
          <div class="accordion-header text-center" onclick="this.parentElement.classList.toggle('active')">Vision</div>
          <div class="accordion-content text-center">
            <p class="text-sm md:text-base text-gray-600">Fostering a thriving UAE economy with investor profitability and evening meetings.</p>
          </div>
        </div>
        <div class="accordion">
          <div class="accordion-header text-center" onclick="this.parentElement.classList.toggle('active')">Contact</div>
          <div class="accordion-content text-center">
            <p class="text-sm md:text-base text-gray-600">Email: <a href="mailto:support@crowdfunding.ae" class="text-[#D4AF37] underline">support@crowdfunding.ae</a></p>
          </div>
        </div>
      </div>
    </div>
  </section>
    )
}

export default About
