
function Footer() {
  return (
    <footer id="contact" className="bg-gray-950 text-white pt-14 pb-6 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          <div>
            <h2 className="text-2xl font-extrabold tracking-wider">
              FASHION<span className="text-amber-600">HUB.</span>
            </h2>
            <p className="text-gray-400 text-sm leading-7 mt-4 max-w-xs">
              Discover your style with our latest fashion collections
              for women, men and kids.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-5">Quick Links</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#home" className="hover:text-amber-500">Home</a></li>
              <li><a href="#collections" className="hover:text-amber-500">Collections</a></li>
              <li><a href="#women" className="hover:text-amber-500">Women</a></li>
              <li><a href="#men" className="hover:text-amber-500">Men</a></li>
              <li><a href="#kids" className="hover:text-amber-500">Kids</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-5">Customer Service</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>Contact Us</li>
              <li>Shipping Information</li>
              <li>Returns & Exchanges</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-5">Stay Connected</h3>
            <p className="text-sm text-gray-400 leading-6">
              Follow us for the latest fashion updates and new arrivals.
            </p>
            <div className="flex gap-4 mt-5 text-sm">
              <a href="#" className="hover:text-amber-500">Instagram</a>
              <a href="#" className="hover:text-amber-500">Facebook</a>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            © 2026 Fashion Hub. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
