import React from 'react'

function InvestForm() {
    return (
        <section id="invest" class="section hidden">
    <div class="content-block">
      <h2 class="text-2xl md:text-3xl font-semibold text-[#333333] mb-4 text-center">Invest in <span id="invest-name"></span></h2>
      <p class="text-sm md:text-base text-gray-600 mb-4 text-center">Minimum 100 AED investment. Annual dividends based on shares; QiTaah offers equity returns in 45 days.</p>
      <form id="invest-form" class="form-container">
        <label for="invest-amount" class="form-label">Investment Amount</label>
        <input type="number" id="invest-amount" class="form-input" min="100" required/>
        <p class="text-sm md:text-base text-gray-600 mb-2 text-center">Your Contribution: <span id="invest-percent">0%</span></p>
        <p class="text-sm md:text-base text-gray-600 mb-2 text-center">Profit Share: <span id="profit-share">0%</span> (after 10% equity)</p>
        <button type="submit" class="custom-button w-full" id="invest-button">Confirm Payment</button>
        <button type="button" class="custom-button w-full mt-2" id="complete-payment" disabled>Complete Payment</button>
        <div class="mt-4">
          <p class="text-sm md:text-base text-gray-600">Payment Options:</p>
          <button onclick="makePayment('bank')" class="custom-button w-full mt-2">Bank Transfer</button>
          <button onclick="makePayment('crypto')" class="custom-button w-full mt-2">Cryptocurrency</button>
          <button onclick="makePayment('paypal')" class="custom-button w-full mt-2">PayPal</button>
        </div>
      </form>
    </div>
  </section>
    )
}

export default InvestForm
