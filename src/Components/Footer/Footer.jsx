import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#101412] text-white pt-16 pb-4">
      {/* Newsletter Section */}
      <div className="container mx-auto px-6 mb-12">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">
            Subscribe to Our Newsletter
          </h2>
          <div className="flex gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Email here"
              className="flex-1 px-4 py-2 rounded border border-gray-600 bg-transparent focus:outline-none focus:border-emerald-500"
            />
            <button className="px-6 py-2 bg-emerald-500 text-white rounded hover:bg-emerald-600 transition-colors">
              Submit
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Useful Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-emerald-500">
              Useful Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-emerald-400">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-emerald-400">
                  Products & Services
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="hover:text-emerald-400">
                  Client Testimonials
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-emerald-400">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Area */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-emerald-500">
              Service Area
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/mentorship" className="hover:text-emerald-400">
                  Mentorship Solutions
                </Link>
              </li>
              <li>
                <Link to="/career" className="hover:text-emerald-400">
                  Career Guidance
                </Link>
              </li>
              <li>
                <Link to="/consulting" className="hover:text-emerald-400">
                  Professional Consulting
                </Link>
              </li>
            </ul>
          </div>

          {/* Get In Touch */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-emerald-500">
              Get In Touch
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <svg
                  className="w-5 h-5 mt-1 text-emerald-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>Kochi, Kerala 682022</span>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-emerald-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>+91 7668809090</span>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-emerald-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>contact@whatnext.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/terms"
                className="text-sm text-gray-400 hover:text-emerald-400"
              >
                Terms Of Use
              </Link>
              <Link
                to="/privacy"
                className="text-sm text-gray-400 hover:text-emerald-400"
              >
                Privacy Policy
              </Link>
              <Link
                to="/cookies"
                className="text-sm text-gray-400 hover:text-emerald-400"
              >
                Cookies
              </Link>
              <Link
                to="/help"
                className="text-sm text-gray-400 hover:text-emerald-400"
              >
                Help
              </Link>
              <Link
                to="/faqs"
                className="text-sm text-gray-400 hover:text-emerald-400"
              >
                FAQs
              </Link>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-2 text-sm text-gray-400">
              <p>
                © {new Date().getFullYear()} WhatNext Corporation. All Rights
                Reserved.
              </p>
              <p className="md:border-l md:border-gray-800 md:pl-2">
                Developed & Maintained By WhatNext Solutions
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
