import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Menu, Search } from "lucide-react";
import useAuthStore from "../stores/authUser";
import { useContentStore } from "../stores/content";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const { user, logout } = useAuthStore();
  const profileMenuRef = useRef(null);

  // State to track the active link
  const [activeLink, setActiveLink] = useState("movie"); // Default is movie link
  const { setContentType } = useContentStore();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsProfileMenuOpen(false); // Ensure profile menu is closed in mobile view
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileMenuRef.current && !profileMenuRef.current.contains(event.target)) {
        setIsProfileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Function to handle link click
  const handleLinkClick = (linkType) => {
    setActiveLink(linkType);  // Set active link state for UI
    setContentType(linkType); // Set content type for backend data fetch
  };

  return (
    <header className="max-w-6xl mx-auto flex flex-wrap items-center justify-between p-4 h-20">
      <div className="flex items-center gap-10 z-50">
        <Link to="/">
          <img src="/logo2.png" alt="ZenG Logo" className="w-32 sm:w-40" />
        </Link>

        {/* Desktop Navbar Items */}
        <div className="hidden sm:flex gap-4 items-center">
          <Link
            to="/"
            className={`hover:underline ${activeLink === "movie" ? "text-purple-500" : "text-white"}`}
            onClick={() => handleLinkClick("movie")}
          >
            Movies
          </Link>
          <Link
            to="/"
            className={`hover:underline ${activeLink === "tv" ? "text-purple-500" : "text-white"}`}
            onClick={() => handleLinkClick("tv")}
          >
            TV Shows
          </Link>
          <Link
            to="/history"
            className={`hover:underline ${activeLink === "history" ? "text-purple-500" : "text-white"}`}
            onClick={() => handleLinkClick("history")}
          >
            Search History
          </Link>
        </div>
      </div>

      <div className="flex gap-5 items-center z-50">
        <Link to="/search">
          <Search className="size-6 cursor-pointer" />
        </Link>

        {/* User Avatar and Profile Menu for Desktop View */}
        {!isMobileMenuOpen && (
          <div className="hidden sm:block relative">
            <img
              src={user.image}
              alt="Avatar"
              className="h-12 w-12 rounded cursor-pointer"
              onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
            />
            {isProfileMenuOpen && (
              <div
                ref={profileMenuRef}
                className="absolute right-0 top-12 bg-black text-white rounded-md p-4 w-48 border border-gray-700"
              >
                <div className="flex items-center space-x-2">
                  <img src={user.image} alt="User Avatar" className="h-10 w-10 rounded-full" />
                  <span className="font-semibold">{user.username}</span>
                </div>
                <button
                  className="w-full mt-2 px-4 py-2 bg-myColor-500 text-white rounded hover:bg-myColor-600"
                  onClick={logout}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
        <div className="sm:hidden">
          <Menu className="size-6 cursor-pointer" onClick={toggleMobileMenu} />
        </div>
      </div>

      {/* Mobile Navbar Items */}
      {isMobileMenuOpen && (
        <div className="w-full sm:hidden mt-4 z-50 bg-black border rounded border-gray-800">
          {/* User Info in Mobile Menu */}
          <div className="flex items-center p-4">
            <img
              src={user.image}
              alt="User Avatar"
              className="h-10 w-10 rounded-full mr-4 cursor-default"
            />
            <span className="text-sm font-semibold">{user.username}</span>
          </div>

          {/* Menu Links */}
          <Link
            to="/"
            className={`block hover:underline p-2 ${activeLink === "movie" ? "text-purple-500" : "text-white"}`}
            onClick={() => handleLinkClick("movie")}
          >
            Movies
          </Link>
          <Link
            to="/"
            className={`block hover:underline p-2 ${activeLink === "tv" ? "text-purple-500" : "text-white"}`}
            onClick={() => handleLinkClick("tv")}
          >
            TV Shows
          </Link>
          <Link
            to="/history"
            className={`block hover:underline p-2 ${activeLink === "history" ? "text-purple-500" : "text-white"}`}
            onClick={() => handleLinkClick("history")}
          >
            Search History
          </Link>

          {/* Logout Button */}
          <button
            className="w-full mt-2 px-4 py-2 bg-myColor-500 text-white rounded hover:bg-myColor-600"
            onClick={logout}
          >
            Logout
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
