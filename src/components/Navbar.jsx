
import { Link } from "react-router-dom";
import { Search, UserRound, ShoppingBag, X, LogOut } from "lucide-react";

function Navbar({
  searchTerm,
  setSearchTerm,
  cartCount = 0,
  onCartClick,
  isLoggedIn = false,
  onLogout,
}) {
  return (
    <header className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between flex-wrap gap-4">

        <Link to="/" className="text-2xl font-extrabold tracking-wider text-gray-900">
          FASHION<span className="text-amber-700">HUB.</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
          <Link to="/" className="hover:text-amber-700 transition">Home</Link>
          <Link to="/women" className="hover:text-amber-700 transition">Women</Link>
          <Link to="/men" className="hover:text-amber-700 transition">Men</Link>
          <Link to="/kids" className="hover:text-amber-700 transition">Kids</Link>
         <Link to="/contact" className="hover:text-amber-700 transition">
  Contact
</Link>
        </nav>

        <div className="flex items-center gap-4 text-gray-800">

          <div className="w-full md:w-56">
            <div className="flex items-center border border-gray-300 px-3 py-2 focus-within:border-amber-700">
              <Search size={18} className="text-gray-500" />

              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search products..."
                className="w-full px-2 text-sm outline-none"
              />

              {searchTerm && (
                <button onClick={() => setSearchTerm("")} aria-label="Clear search">
                  <X size={17} />
                </button>
              )}
            </div>
          </div>

          {isLoggedIn ? (
            <button
              onClick={onLogout}
              className="flex items-center gap-2 text-sm font-semibold hover:text-amber-700 transition"
            >
              <LogOut size={19} />
              Logout
            </button>
          ) : (
            <div className="flex items-center gap-3">
              <Link
                to="/login"
                className="text-sm font-semibold hover:text-amber-700 transition"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="bg-gray-900 text-white px-4 py-2 text-sm hover:bg-amber-800 transition"
              >
                Register
              </Link>
            </div>
          )}

          <button
            onClick={onCartClick}
            className="relative hover:text-amber-700 transition"
            aria-label="Shopping Cart"
          >
            <ShoppingBag size={22} />

            <span className="absolute -top-2 -right-2 bg-amber-700 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          </button>

        </div>
      </div>
    </header>
  );
}

export default Navbar;
