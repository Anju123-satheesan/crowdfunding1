import React from 'react'

function Accessibility() {
    return (
         <section id="accessibility" class="section hidden">
    <div class="content-block">
      <h2 class="text-2xl md:text-3xl font-semibold text-[#333333] mb-4 text-center">Accessibility Statement</h2>
      <div class="space-y-4 text-center">
        <div class="accordion">
          <div class="accordion-header text-center" onclick="this.parentElement.classList.toggle('active')">Features</div>
          <div class="accordion-content text-center">
            <p class="text-sm md:text-base text-gray-600">Keyboard and screen reader support per UAE guidelines.</p>
          </div>
        </div>
        <div class="accordion">
          <div class="accordion-header text-center" onclick="this.parentElement.classList.toggle('active')">Support</div>
          <div class="accordion-content text-center">
            <p class="text-sm md:text-base text-gray-600">Issues resolved in 48 hours; report to <a href="mailto:support@crowdfunding.ae" class="text-[#D4AF37] underline">support@crowdfunding.ae</a>.</p>
          </div>
        </div>
        <div class="accordion">
          <div class="accordion-header text-center" onclick="this.parentElement.classList.toggle('active')">Improvements</div>
          <div class="accordion-content text-center">
            <p class="text-sm md:text-base text-gray-600">Ongoing updates based on feedback.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

    )
}

export default Accessibility
