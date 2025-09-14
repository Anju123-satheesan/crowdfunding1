import React from 'react'

function Project() {
    return (
         <section id="projects" class="section hidden">
    <div class="content-block">
      <h2 class="text-2xl md:text-3xl font-semibold text-[#333333] mb-4 text-center">Explore Opportunities</h2>
      <div class="row">
        <div className='col-md-6'>
        <select id="filter-stage" class="p-2 form-select "  aria-label="Default select example">
          <option value="">All Stages</option>
          <option value="Ideation">Ideation</option>
          <option value="Pre-Seed">Pre-Seed</option>
          <option value="Seed">Seed</option>
          <option value="Series A">Series A</option>
          <option value="Series B">Series B</option>
          <option value="Series C">Series C</option>
          <option value="IPO">IPO</option>
        </select>
        </div>
        <div className='col-md-6'>
        <p class="text-sm md:text-base text-gray-600 text-center w-full md:w-2/3 col-md-6">Verified projects for profitable investments</p>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-center" id="project-grid">
      
      </div>
    </div>
  </section>
    )
}

export default Project
