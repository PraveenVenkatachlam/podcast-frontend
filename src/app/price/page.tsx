"use client";

import Link from "next/link";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-10 py-4 bg-white shadow-sm">
        {/* Left – Logo */}
        <Link href="/">
          <h1 className="text-gray-900 text-2xl font-bold cursor-pointer">
            Podcast Studio
          </h1>
        </Link>

        {/* Center menu */}
        <div className="flex items-center gap-6 text-gray-700">
          {/* <button className="hover:text-gray-900">Podcasting</button> */}
           <Link href="/" className="hover:text-gray-900 transition-colors">
            Podcasting
          </Link>
          <button className="hover:text-gray-900">Solution</button>
          <button className="text-purple-600 font-medium">Pricing</button>
          <button className="hover:text-gray-900">Resources</button>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="Search"
            className="rounded-full px-4 py-1 border border-gray-300 text-black"
          />
          <button className="text-gray-700 hover:text-gray-900">Log in</button>
          <button className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700">
            Sign Up
          </button>
        </div>
      </nav>

      {/* PRICING CONTENT */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              There's a plan for every story.
            </h1>
            <p className="text-gray-600">
              And you can always{" "}
              <span className="text-purple-600 underline cursor-pointer">
                start for free
              </span>
              .
            </p>

            {/* Monthly Toggle */}
            <div className="mt-8 inline-flex items-center bg-gray-100 rounded-full p-1">
              <button className="px-6 py-2 rounded-full bg-purple-600 text-white font-medium">
                Monthly
              </button>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {/* Free Plan */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Free</h2>
                <p className="text-gray-500 mt-2">Get started with basics</p>
              </div>

              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">₹0</span>
                <span className="text-gray-500">/month</span>
              </div>

              <button className="w-full py-3 px-6 border-2 border-gray-900 rounded-lg font-medium text-gray-900 hover:bg-gray-900 hover:text-white transition-colors mb-8">
                Get Started Free
              </button>

              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900">What's included:</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-500 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-600">1 Free Video Podcast</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-500 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-600">Basic Quality</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Premium Plan */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-purple-600 relative hover:shadow-xl transition-shadow">
              {/* Popular Badge */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-purple-600 text-white text-sm font-medium px-4 py-1 rounded-full">
                  ★ Most Popular
                </span>
              </div>

              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Premium</h2>
                <p className="text-gray-500 mt-2">Unlimited 4K video podcasts</p>
              </div>

              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">₹200</span>
                <span className="text-gray-500">/month</span>
              </div>

              <button className="w-full py-3 px-6 bg-purple-600 rounded-lg font-medium text-white hover:bg-purple-700 transition-colors mb-8">
                Buy Now
              </button>

              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900">What's included:</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-500 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-600">Unlimited Video Podcasts</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-500 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-600">4K Video Quality</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-500 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-600">Priority Support</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-500 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-600">48kHz Audio Quality</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Help Section */}
          <div className="text-center mt-12">
            <p className="text-gray-500">
              Not sure which plan you need?{" "}
              <span className="text-purple-600 underline cursor-pointer">
                Let us help you
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}