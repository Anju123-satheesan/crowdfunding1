import React from 'react'

function Dashboard() {
    return (
       <section id="dashboard" class="section hidden">
    <div class="content-block">
      <h2 class="text-2xl md:text-3xl font-semibold text-[#333333] mb-4 text-center">Dashboard</h2>
      <div class="flex flex-col md:flex-row gap-4 justify-center">
        <div class="w-full md:w-1/2 text-center">
          <h3 class="text-lg md:text-xl font-semibold text-[#333333] mb-2">Projects/Investments</h3>
          <div id="user-projects" class="text-gray-600 text-center"></div>
        </div>
        <div class="w-full md:w-1/2 text-center">
          <h3 class="text-lg md:text-xl font-semibold text-[#333333] mb-2">Stats</h3>
          <p class="text-sm md:text-base text-gray-600 mb-2">Founders: <span id="founders-joined">1</span></p>
          <p class="text-sm md:text-base text-gray-600 mb-2">Investors: <span id="investors">0</span></p>
          <p class="text-sm md:text-base text-gray-600 mb-2">Raised: <span id="total-raised">0 AED</span></p>
          <h4 class="text-base md:text-lg font-medium text-[#333333] mt-2 mb-2 text-center">Stages</h4>
          <div id="projects-by-stage" class="text-gray-600 text-center"><p>Seed: 1</p></div>
        </div>
      </div>
    </div>
  </section>
 
    )
}

export default Dashboard
