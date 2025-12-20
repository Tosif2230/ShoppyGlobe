import React from "react";

function Footer() {
  return (
    <footer className="bg-[#232f3e] text-white">
      {/* Footer Like Amazon Site */}

      {/* Links Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-6 md:px-24 py-10 border-b border-gray-600">
        <div>
          <h4 className="font-semibold mb-3">Get to Know Us</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="hover:underline cursor-pointer">
              About ShoppyGlobe
            </li>
            <li className="hover:underline cursor-pointer">
              ShoppyGlobe Science
            </li>
            <li className="hover:underline cursor-pointer">Careers</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Connect with Us</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <a href="" target="_blank">
              <li className="hover:underline cursor-pointer">GitHub</li>
            </a>
            <a href="" target="_blank">
              <li className="hover:underline cursor-pointer">Facebook</li>
            </a>
            <a href="" target="_blank">
              <li className="hover:underline cursor-pointer">LinkedIn</li>
            </a>
            <a href="" target="_blank">
              <li className="hover:underline cursor-pointer">Twitter</li>
            </a>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Make Money with Us</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="hover:underline cursor-pointer">
              Sell under ShoppyGlobe Accelerator
            </li>

            <li className="hover:underline cursor-pointer">
              Supply to ShoppyGlobe
            </li>
            <li className="hover:underline cursor-pointer">
              Fulfilment by ShoppyGlobe
            </li>
            <li className="hover:underline cursor-pointer">
              Advertise Your Products
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Let Us Help You</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="hover:underline cursor-pointer">Your Account</li>
            <li className="hover:underline cursor-pointer">
              100% Purchase Protection
            </li>
            <li className="hover:underline cursor-pointer">Help</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 py-6">
        <h2 className="text-xl font-bold">
          Shoppy-Globe 🌐{" "}
          <span className="text-sm font-light">© 2025 Inc.</span>
        </h2>

        <div className="flex gap-3 text-sm">
          <span className="border border-gray-500 px-3 py-1 cursor-pointer">
            English
          </span>
          <span className="border border-gray-500 px-3 py-1 cursor-pointer">
            🇮🇳 India
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
