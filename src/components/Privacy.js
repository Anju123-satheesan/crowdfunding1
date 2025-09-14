import React from 'react'

function Privacy() {
    return (
        <section id="privacy" class="section hidden">
    <div class="content-block">
      <h2 class="text-2xl md:text-3xl font-semibold text-[#333333] mb-4 text-center">Privacy Policy</h2>
      <div class="space-y-4 text-center">
        <div class="accordion">
          <div class="accordion-header text-center" onclick="this.parentElement.classList.toggle('active')">Data</div>
          <div class="accordion-content text-center">
            <p class="text-sm md:text-base text-gray-600">Collects username, password, role, and investments under UAE laws.</p>
          </div>
        </div>
        <div class="accordion">
          <div class="accordion-header text-center" onclick="this.parentElement.classList.toggle('active')">Usage</div>
          <div class="accordion-content text-center">
            <p class="text-sm md:text-base text-gray-600">Used for services and compliance, stored securely.</p>
          </div>
        </div>
        <div class="accordion">
          <div class="accordion-header text-center" onclick="this.parentElement.classList.toggle('active')">Rights</div>
          <div class="accordion-content text-center">
            <p class="text-sm md:text-base text-gray-600">Request data changes at <a href="mailto:support@crowdfunding.ae" class="text-[#D4AF37] underline">support@crowdfunding.ae</a>.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
    )
}

export default Privacy
