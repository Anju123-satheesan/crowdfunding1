import React from 'react'

function StartprojectFrom() {
    return (
         <section id="start-project" class="section hidden">
    <div class="content-block">
      <h2 class="text-2xl md:text-3xl font-semibold text-[#333333] mb-4 text-center">Launch Project</h2>
      <div class="flex flex-col md:flex-row gap-2 justify-center">
        <div class="w-full md:w-2/3 text-center">
          <p class="text-sm md:text-base text-gray-600 mb-4 font-bold">Free submission from Ideation to IPO.</p>
          <form id="project-form" class="form-container">
            <label for="project-name" class="form-label">Project Name</label>
            <input type="text" id="project-name" class="form-input" required/>
            <label for="project-desc" class="form-label">Description</label>
            <textarea id="project-desc" class="form-input" required></textarea>
            <label for="project-goal" class="form-label">Funding Goal (AED)</label>
            <input type="number" id="project-goal" class="form-input" required/>
            <label for="project-logo" class="form-label">Logo URL</label>
            <input type="url" id="project-logo" class="form-input"/>
            <label for="project-banner" class="form-label">Banner URL</label>
            <input type="url" id="project-banner" class="form-input"/>
            <label for="project-category" class="form-label">Category</label>
            <select id="project-category" class="form-input" required>
              <option value="Tech">Tech</option>
              <option value="Retail">Retail</option>
              <option value="Healthcare">Healthcare</option>
              <option value="Other">Other</option>
            </select>
            <label for="project-stage" class="form-label">Stage</label>
            <select id="project-stage" class="form-input" required>
              <option value="Ideation">Ideation</option>
              <option value="Pre-Seed">Pre-Seed</option>
              <option value="Seed">Seed</option>
              <option value="Series A">Series A</option>
              <option value="Series B">Series B</option>
              <option value="Series C">Series C</option>
              <option value="IPO">IPO</option>
            </select>
            <label for="project-timeline" class="form-label">Timeline (e.g., 12 months)</label>
            <input type="text" id="project-timeline" class="form-input" required/>
            <label for="project-team" class="form-label">Team (e.g., John - CEO)</label>
            <textarea id="project-team" class="form-input" required></textarea>
            <label for="project-risks" class="form-label">Risks (e.g., market competition)</label>
            <textarea id="project-risks" class="form-input" required></textarea>
            <label for="project-vision" class="form-label">Your Vision (e.g., Empowering youth)</label>
            <textarea id="project-vision" class="form-input" required></textarea>
            <button type="submit" class="custom-button w-full">Submit Project</button>
          </form>
        </div>
        <div class="w-full md:w-1/3 text-center">
          <p class="text-sm md:text-base text-gray-600 mb-4">Connect with investors post-7 PM at <a href="https://meet.google.com/qxd-hzxc-ggo" target="_blank" class="text-[#D4AF37] underline">Google Meet</a>.</p>
        </div>
      </div>
    </div>
  </section>
    )
}

export default StartprojectFrom
