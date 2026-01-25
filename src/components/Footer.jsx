import React from 'react';

function Footer() {
  return (
    <footer className="bg-neutral text-neutral-content p-10">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-lg font-bold mb-2">CS — Ticket System</h2>
          <p className="text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has been the industry's standard dummy text since the 1500s.
          </p>
        </div>

        {/* Services */}
        <div>
          <h6 className="footer-title">Services</h6>
          <ul className="space-y-1">
            <li><a className="link link-hover">Products & Services</a></li>
            <li><a className="link link-hover">Customer Stories</a></li>
            <li><a className="link link-hover">Download Apps</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h6 className="footer-title">Company</h6>
          <ul className="space-y-1">
            <li><a className="link link-hover">About Us</a></li>
            <li><a className="link link-hover">Our Mission</a></li>
            <li><a className="link link-hover">Contact Sales</a></li>
          </ul>
        </div>

        {/* Information */}
        <div>
          <h6 className="footer-title">Information</h6>
          <ul className="space-y-1">
            <li><a className="link link-hover">Terms & Conditions</a></li>
            <li><a className="link link-hover">Privacy Policy</a></li>
            <li><a className="link link-hover">Join Us</a></li>
          </ul>
        </div>

        {/* Social Buttons */}
        <div>
          <h6 className="footer-title">Social Login</h6>
          <div className="flex flex-wrap gap-2">
            <button className="btn btn-sm bg-white text-black border-gray-300">Email</button>
            <button className="btn btn-sm bg-black text-white">GitHub</button>
            <button className="btn btn-sm bg-white text-black border-gray-300">Google</button>
            <button className="btn btn-sm bg-[#1A77F2] text-white">Facebook</button>
            <button className="btn btn-sm bg-[#5EBB2B] text-white">WeChat</button>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 text-center text-sm bg-base-300 text-base-content p-4">
        <p>© {new Date().getFullYear()} All rights reserved by ACME Industries Ltd</p>
      </div>
    </footer>
  );
}

export default Footer;
