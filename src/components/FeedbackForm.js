import React from 'react'

function FeedbackForm() {
    return (
         <section id="feedback" class="section hidden">
    <div class="content-block">
      <h2 class="text-2xl md:text-3xl font-semibold text-[#333333] mb-4 text-center">Submit Feedback</h2>
      <form id="feedback-form" class="form-container">
        <label for="feedback-project-id" class="form-label">Project ID</label>
        <input type="number" id="feedback-project-id" class="form-input" value="1" readonly/>
        <label for="feedback-text" class="form-label">Your Feedback</label>
        <textarea id="feedback-text" class="form-input" required></textarea>
        <label for="feedback-sentiment" class="form-label">Sentiment</label>
        <select id="feedback-sentiment" class="form-input" required>
          <option value="Positive">Positive</option>
          <option value="Negative">Negative</option>
          <option value="Neutral">Neutral</option>
        </select>
        <button type="submit" class="custom-button w-full">Submit</button>
      </form>
    </div>
  </section>
    )
}

export default FeedbackForm
