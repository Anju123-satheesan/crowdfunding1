import React from 'react'

function Terms() {
    return (
        <section id="terms" class="section hidden">
    <div class="content-block">
      <h2 class="text-2xl md:text-3xl font-semibold text-[#333333] mb-4 text-center">Terms of Service</h2>
      <div class="space-y-4 text-center">
        <div class="accordion">
          <div class="accordion-header text-center" onclick="this.parentElement.classList.toggle('active')">Eligibility</div>
          <div class="accordion-content text-center">
            <p class="text-sm md:text-base text-gray-600">Users must be 18+ and comply with UAE laws.</p>
          </div>
        </div>
        <div class="accordion">
          <div class="accordion-header text-center" onclick="this.parentElement.classList.toggle('active')">Risks</div>
          <div class="accordion-content text-center">
            <p class="text-sm md:text-base text-gray-600">Investments carry risks; users are liable for losses.</p>
          </div>
        </div>
        <div class="accordion">
          <div class="accordion-header text-center" onclick="this.parentElement.classList.toggle('active')">Jurisdiction</div>
          <div class="accordion-content text-center">
            <p class="text-sm md:text-base text-gray-600">UAE law applies, disputes in Dubai courts.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
    )
}

export default Terms
