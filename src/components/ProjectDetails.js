import React from 'react'

function ProjectDetails() {
    return (
         <section id="project-details" class="section hidden">
    <div class="content-block">
      <img id="details-banner" src="" alt="Project Banner" class="banner-image"/>
      <img id="details-logo" src="" alt="Project Logo" class="logo-image"/>
      <h2 class="text-2xl md:text-3xl font-semibold text-[#333333] mb-2 text-center" id="details-name"></h2>
      <p class="text-sm md:text-base text-gray-600 mb-2 text-center font-bold" id="details-equity">Verified project—10% equity dividends.</p>
      <p class="text-sm md:text-base text-gray-600 mb-2 text-center" id="details-desc"></p>
      <p class="text-sm md:text-base text-gray-600 mb-2 text-center">Stage: <span id="details-stage"></span> (Series A ~January 2, 2026)</p>
      <p class="text-sm md:text-base text-gray-600 mb-2 text-center">Category: <span id="details-category"></span></p>
      <p class="text-sm md:text-base text-gray-600 mb-2 text-center">Timeline: <span id="details-timeline"></span></p>
      <p class="text-sm md:text-base text-gray-600 mb-2 text-center">Team: <span id="details-team"></span></p>
      <p class="text-sm md:text-base text-gray-600 mb-2 text-center">Risks: <span id="details-risks"></span></p>
      <p class="text-sm md:text-base text-gray-600 mb-2 text-center">Actual Invested: <span id="details-invested"></span> AED</p>
      <p class="text-sm md:text-base text-gray-600 mb-2 text-center">Funds Needed for Seed Launch: 250,000 AED (Immediate)</p>
      <p class="text-sm md:text-base text-gray-600 mb-2 text-center">Raised: <span id="details-raised"></span> AED / Goal: 250,000 AED</p>
      <div class="progress-bar">
        <div id="progress-fill" class="progress-fill"></div>
      </div>
      <p class="text-sm md:text-base text-gray-600 mb-2 text-center">Percentage Invested: <span id="details-percent"></span>%</p>
      <p class="text-sm md:text-base text-gray-600 mb-2 text-center">Amount Needed: <span id="details-needed"></span> AED</p>
      <p class="text-sm md:text-base text-gray-600 mb-2 text-center">Valuation (Series A): ~2.5M AED</p>
      <p class="text-sm md:text-base text-gray-600 mb-2 text-center">Launch Date: October 2, 2025</p>
      <p class="text-sm md:text-base text-gray-600 mb-2 text-center">Status: <span id="details-status"></span></p>
      <p class="text-sm md:text-base text-gray-600 mb-2 text-center">Prepared by: Asif Azad, August 15, 2025</p>
      <p class="text-sm md:text-base text-gray-600 mb-2 text-center">Contact: +971581677917 | Email: ceo@frshar.com</p>
      <p class="text-sm md:text-base text-gray-600 mb-2 text-center">Daily Meet: 7 PM at <a href="https://meet.google.com/qxd-hzxc-ggo" target="_blank" class="text-[#D4AF37] underline">Google Meet</a></p>
      <div class="mt-4">
        <h3 class="text-lg md:text-xl font-semibold text-[#333333] mb-2 text-center">Investment Options</h3>
        <form id="project-invest-form" class="form-container">
          <label for="project-invest-amount" class="form-label">Investment Amount (min 100 AED)</label>
          <input type="number" id="project-invest-amount" class="form-input" min="100" required/>
          <p class="text-sm md:text-base text-gray-600 mb-2 text-center">Your Contribution: <span id="project-invest-percent">0%</span></p>
          <p class="text-sm md:text-base text-gray-600 mb-2 text-center">Profit Share: <span id="project-profit-share">0%</span> (after 10% equity)</p>
          <button type="submit" class="custom-button w-full mb-2" id="project-invest-button">Confirm Payment</button>
          <div>
            <p class="text-sm md:text-base text-gray-600">Payment Methods:</p>
            <button onclick="makeProjectPayment('bank')" class="custom-button w-full mt-2">Bank Transfer</button>
            <button onclick="makeProjectPayment('crypto')" class="custom-button w-full mt-2">Cryptocurrency</button>
            <button onclick="makeProjectPayment('paypal')" class="custom-button w-full mt-2">PayPal</button>
          </div>
        </form>
      </div>
      <div class="flex justify-center space-x-2 mt-4">
        <button onclick="viewReport()" class="custom-button">View Full Report</button>
        <button onclick="navigate('feedback')" class="custom-button">Feedback</button>
        <button onclick="navigate('behavior-report')" class="custom-button">Report Issue</button>
        <button onclick="toggleLiveStatus()" class="custom-button">Toggle Live Status</button>
      </div>
      <h3 class="text-lg md:text-xl font-semibold text-[#333333] mb-2 text-center">Advanced Analytics</h3>
      <div class="analytics-grid">
        <div><strong>Total Raised:</strong> <span id="analytics-raised"></span> AED</div>
        <div><strong>Amount Needed:</strong> <span id="details-needed"></span> AED</div>
        <div><strong>Investors:</strong> <span id="analytics-investors"></span></div>
        <div><strong>Average Investment:</strong> <span id="analytics-average"></span> AED</div>
      </div>
      <div class="progress-bar mt-2">
        <div id="analytics-progress" class="progress-fill"></div>
      </div>
    
    </div>
  </section>

    )
}

export default ProjectDetails
