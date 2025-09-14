import React from 'react'

function Login() {
    return (
         <section id="login" class="section hidden">
    <div class="content-block form-container">
      <h2 class="text-2xl md:text-3xl font-semibold text-[#333333] mb-4 text-center">Login</h2>
      <p class="text-sm md:text-base text-gray-600 mb-4 text-center">For founders and investors. Admins, use <a href="#" onclick="navigate('admin-login')" class="text-[#D4AF37] underline">Admin Login</a>.</p>
      <form id="login-form" class="space-y-4">
        <label for="login-username" class="form-label">Username</label>
        <input type="text" id="login-username" class="form-input" required/>
        <label for="login-password" class="form-label">Password</label>
        <input type="password" id="login-password" class="form-input" required/>
        <label for="login-role" class="form-label">Role</label>
        <select id="login-role" class="form-input" required>
          <option value="founder">Founder</option>
          <option value="investor">Investor</option>
          <option value="admin">Admin</option>
        </select>
        <button type="submit" class="custom-button w-full">Login</button>
      </form>
    </div>
  </section>

    )
}

export default Login
