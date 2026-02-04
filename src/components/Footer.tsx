export default function Footer() {
  return (
    <footer className="bg-[#007878] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

        {/* Logo + Buttons */}
        <div className="col-span-2 flex flex-col items-center md:items-start">
          <h1 className="text-4xl font-bold mb-6">Podcast Studio</h1>

          <div className="flex gap-4 mb-6">
            <button className="bg-[#1e6262] px-6 py-3 rounded-full font-semibold hover:opacity-80">
              START ON LIBSYN
            </button>
            <button className="bg-[#1e6262] px-6 py-3 rounded-full font-semibold hover:opacity-80">
              MOVE TO LIBSYN
            </button>
          </div>

          <p className="text-sm opacity-80">
            © Copyright 2025 – Liberated Syndication (Libsyn)
          </p>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm opacity-90">
            <li>About</li>
            <li>Investor Relations</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Community */}
        <div>
          <h3 className="font-semibold mb-4">Community</h3>
          <ul className="space-y-2 text-sm opacity-90">
            <li>Our Blog</li>
            <li>Testimonials</li>
            <li>Education, Events and Webinars</li>
            <li>Directory</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-sm opacity-90">
            <li>System Status</li>
            <li>Libsyn Support</li>
            <li>Legal</li>
            <li>Privacy Policy</li>
            <li>Help Center</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="font-semibold mb-4">Follow Us</h3>
          <ul className="space-y-2 text-sm opacity-90">
            <li>Facebook</li>
            <li>Instagram</li>
            <li>X.com</li>
            <li>LinkedIn</li>
            <li>YouTube</li>
          </ul>
        </div>

      </div>
    </footer>
  );
}
