import React from 'react';

const Footer = () => {
  return (
    <>
      <div className='h-2 w-full bg-myColor-600' aria-hidden='true' />
      <footer className="bg-black text-white py-8">
        <div className="text-center">
          <div className="flex flex-row justify-between gap-8">
            <div className="w-full sm:w-1/2 lg:w-1/4 mb-8">
              <h2 className="text-lg font-bold mb-4">About Us</h2>
              <ul>
                <li className="mb-2">
                  <a
                    role="link"
                    data-uia="footer-link"
                    target="_self"
                    className="hover:underline"
                    href="/about"
                  >
                    About
                  </a>
                </li>
                {/* Add more links as needed */}
              </ul>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/4 mb-8">
              <h2 className="text-lg font-bold mb-4">Support</h2>
              <ul>
                <li className="mb-2">
                  <a
                    role="link"
                    data-uia="footer-link"
                    target="_self"
                    className="hover:underline"
                    href="/support"
                  >
                    Support
                  </a>
                </li>
                {/* Add more links as needed */}
              </ul>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/4 mb-8">
              <h2 className="text-lg font-bold mb-4">Contact</h2>
              <ul>
                <li className="mb-2">
                  <a
                    role="link"
                    data-uia="footer-link"
                    target="_self"
                    className="hover:underline"
                    href="/contact"
                  >
                    Contact
                  </a>
                </li>
                {/* Add more links as needed */}
              </ul>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; {new Date().getFullYear()} ZenG. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
