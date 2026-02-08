"use client";

import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  // const handleGoogleLogin = () => {
  //   console.log("Google login clicked");
  // };

  // const handleEmailLogin = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   console.log("Email login:", email, password);
  // };
    const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    console.log("Email login:", email, password);

    try {
     
      // const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/auth/login`, {
       const res = await fetch("http://localhost:5001/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
console.log(data);
console.log(process.env.REACT_APP_BACKEND_URL);  // should print http://localhost:5001
      if (res.ok) {
        console.log("Login success:", data);
        alert("Login successful!");
        // TODO: store JWT token in localStorage or cookie
      } else {
        console.error("Login failed:", data.message || data);
        alert(`Error: ${data.message || "Login failed"}`);
      }
    } catch (error) {
      console.error("Network error:", error);
      alert("Network error. Please try again.");
    }

    setLoading(false);
  };

  // Google login
  const handleGoogleLogin = () => {
    console.log("Google login clicked");
    // TODO: redirect to your backend Google OAuth endpoint
    window.location.href = `${process.env.REACT_APP_BACKEND_URL}/ap/auth/google`;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-4 sm:px-6 lg:px-10 py-4 bg-white border-b border-gray-200">
        <Link href="/">
          <h1 className="text-gray-900 text-xl sm:text-2xl font-bold cursor-pointer">
            Podcast Studio
          </h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6 text-gray-600">
          <Link href="/" className="hover:text-gray-900 transition-colors text-sm lg:text-base">
            Podcasting
          </Link>
          <Link href="/" className="hover:text-gray-900 transition-colors text-sm lg:text-base">
            Solution
          </Link>
          <Link href="/price" className="hover:text-gray-900 transition-colors text-sm lg:text-base">
            Pricing
          </Link>
          <Link href="/" className="hover:text-gray-900 transition-colors text-sm lg:text-base">
            Resources
          </Link>
        </div>

        {/* Desktop Right Side */}
        <div className="hidden md:flex items-center gap-3 lg:gap-4">
          <input
            type="text"
            placeholder="Search"
            className="rounded-full px-3 lg:px-4 py-2 border border-gray-300 text-gray-900 placeholder-gray-400 focus:border-purple-500 focus:outline-none text-sm lg:text-base w-24 lg:w-auto"
          />
          <span className="text-purple-600 font-medium text-sm lg:text-base">Log in</span>
          <Link href="/signup">
            <button className="bg-purple-600 text-white px-4 lg:px-5 py-2 rounded-full hover:bg-purple-700 transition-colors text-sm lg:text-base">
              Sign Up
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-gray-900 p-2"
        >
          {isMobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 px-4 py-4">
          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Search"
              className="rounded-full px-4 py-2 border border-gray-300 text-gray-900 placeholder-gray-400 focus:border-purple-500 focus:outline-none"
            />
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-600 hover:text-gray-900 py-2">
              Podcasting
            </Link>
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-600 hover:text-gray-900 py-2">
              Solution
            </Link>
            <Link href="/price" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-600 hover:text-gray-900 py-2">
              Pricing
            </Link>
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-600 hover:text-gray-900 py-2">
              Resources
            </Link>
            <div className="h-px bg-gray-200 my-2"></div>
            <span className="text-purple-600 font-medium py-2">Log in</span>
            <Link href="/signup" onClick={() => setIsMobileMenuOpen(false)}>
              <button className="w-full bg-purple-600 text-white px-5 py-2 rounded-full hover:bg-purple-700 transition-colors">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      )}

      {/* LOGIN CONTENT */}
      <div className="py-8 sm:py-12 lg:py-16 px-4">
        <div className="max-w-md mx-auto">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-10">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              Welcome back
            </h1>
            <p className="text-gray-500">Sign in to your account</p>
          </div>

          {/* Login Card */}
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-200">
            {/* OAuth Buttons */}
            <div className="space-y-3 mb-6">
              {/* Google Login Button */}
              <button
                onClick={handleGoogleLogin}
                className="w-full flex items-center justify-center gap-3 bg-white hover:bg-gray-50 text-gray-700 py-3 px-4 rounded-lg border border-gray-300 transition-colors text-sm sm:text-base"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                Continue with Google
              </button>

              {/* SSO Button */}
              <button className="w-full flex items-center justify-center gap-3 bg-white hover:bg-gray-50 text-gray-700 py-3 px-4 rounded-lg border border-gray-300 transition-colors text-sm sm:text-base">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Continue with SSO
              </button>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex-1 h-px bg-gray-200"></div>
              <span className="text-gray-400 text-sm">or</span>
              <div className="flex-1 h-px bg-gray-200"></div>
            </div>

            {/* Email/Password Form */}
            <form onSubmit={handleEmailLogin} className="space-y-4">
              {/* Email Field */}
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full bg-white text-gray-900 placeholder-gray-400 py-3 px-4 rounded-lg border border-gray-300 focus:border-purple-500 focus:outline-none transition-colors text-sm sm:text-base"
                />
              </div>

              {/* Password Field */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-gray-700 text-sm font-medium">
                    Password
                  </label>
                  <Link
                    href="/forgot-password"
                    className="text-purple-600 text-xs sm:text-sm hover:text-purple-700 transition-colors"
                  >
                    Forgot password?
                  </Link>
                </div>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full bg-white text-gray-900 placeholder-gray-400 py-3 px-4 rounded-lg border border-gray-300 focus:border-purple-500 focus:outline-none transition-colors pr-12 text-sm sm:text-base"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {showPassword ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {/* Sign In Button */}
              <button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-4 rounded-lg transition-colors mt-2"
              >
                Sign in
              </button>
            </form>
          </div>

          {/* Sign Up Link */}
          <p className="text-center text-gray-500 mt-6 text-sm sm:text-base">
            Don't have an account?{" "}
            <Link
              href="/signup"
              className="text-purple-600 underline hover:text-purple-700 transition-colors"
            >
              Sign up
            </Link>
          </p>

          {/* Terms */}
          <p className="text-center text-gray-400 text-xs sm:text-sm mt-6 px-4">
            By continuing, you agree to Podcast Studio's{" "}
            <Link href="/terms" className="underline hover:text-gray-600">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="underline hover:text-gray-600">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}