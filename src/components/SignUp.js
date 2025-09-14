import React from 'react'

function SignUp() {
    return (
         <section id="signup" class="section hidden">
    <div class="content-block form-container">
      <h2 class="text-2xl md:text-3xl font-semibold text-[#333333] mb-4 text-center">Sign Up</h2>
      <p class="text-sm md:text-base text-gray-600 mb-4 text-center">For founders and investors. Admins, contact support.</p>
      <form id="signup-form" class="space-y-4">
        <label for="signup-username" class="form-label">Username</label>
        <input type="text" id="signup-username" class="form-input" required/>
        <label for="signup-email" class="form-label">Email</label>
        <input type="email" id="signup-email" class="form-input" required/>
        <label for="signup-password" class="form-label">Password</label>
        <input type="password" id="signup-password" class="form-input" required/>
        <label for="signup-role" class="form-label">Role</label>
        <select id="signup-role" class="form-input" required>
          <option value="founder">Founder</option>
          <option value="investor">Investor</option>
          <option value="admin">Admin</option>
        </select>
        <button type="submit" class="custom-button w-full" disabled>Sign Up</button>
      </form>
    </div>
  </section>

    )
}

export default SignUp
