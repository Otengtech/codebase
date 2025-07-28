import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [accountMenu, setAccountMenu] = useState(false);
  const [showLearnDropdown, setShowLearnDropdown] = useState(false);
  const [selectedLang, setSelectedLang] = useState("");
  const [userName, setUserName] = useState(localStorage.getItem("name") || "");
  const [userEmail, setUserEmail] = useState(localStorage.getItem("email") || "");
  const [profileImage, setProfileImage] = useState(localStorage.getItem("profileImage") || null);

  const navigate = useNavigate();
  const location = useLocation();
  const accountRef = useRef();
  const learnRef = useRef();

  const learnItems = ["HTML", "CSS", "JavaScript", "NodeJS", "TailwindCss", "MongoDB"];
  const navItems = ["Blog", "Course", "Quiz", "About", "Contact"];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (accountRef.current && !accountRef.current.contains(e.target)) {
        setAccountMenu(false);
      }
      if (learnRef.current && !learnRef.current.contains(e.target)) {
        setShowLearnDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      setProfileImage(reader.result);
      localStorage.setItem("profileImage", reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleLogout = () => {
    localStorage.clear();
    setUserName("");
    setUserEmail("");
    setProfileImage(null);
    setAccountMenu(false);
    setIsOpen(false);
    navigate("/login");
  };

  const handleSelectChange = (e) => {
    const selected = e.target.value;
    setSelectedLang(selected);
    if (selected) navigate(`/${selected}`);
    setIsOpen(false);
  };

  const bottomLinks = [
    { to: "/", icon: "fa-home", label: "Home" },
    { to: "/course", icon: "fa-book", label: "Course" },
    { to: "/quiz", icon: "fa-lightbulb", label: "Quiz" },
    { to: "/blog", icon: "fa-blog", label: "Blog" },
    { to: "/reviews", icon: "fa-star", label: "Review" },
  ];

  return (
    <>
      {/* TOP NAVBAR */}
      <nav className="bg-gradient-to-r from-gray-900 to-violet-900 fixed top-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center text-lg font-bold text-sky-200 gap-2">
              <div className="flex items-center mt-2 space-x-3">
                {[...Array(1)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-2 h-2 rounded-full bg-sky-200 animate-bounce-custom1`}
                    style={{ animationDelay: `${i * 0.2}s` }}
                  ></div>
                ))}
              </div>
              <i className="fas fa-graduation-cap"></i> CodeBase
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6 text-sm relative">
              <Link to="/" className="text-sky-200 hover:text-sky-100">Home</Link>

              <div>
                <select
                  id="learnSelect"
                  value={selectedLang}
                  onChange={handleSelectChange}
                  className="bg-violet-900 text-sky-200 px-3 py-2 rounded hover:bg-violet-800"
                >
                  <option value="">Learn</option>
                  {learnItems.map((lang, i) => (
                    <option key={i} value={lang.toLowerCase()}>{lang}</option>
                  ))}
                </select>
              </div>

              {navItems.map((item) => (
                <Link key={item} to={`/${item.toLowerCase()}`} className="text-sky-200 hover:text-sky-100">
                  {item}
                </Link>
              ))}

              {/* Account Menu */}
              <div className="relative" ref={accountRef}>
                <button onClick={() => setAccountMenu((prev) => !prev)} className="text-sky-400">
                  <i className="fas fa-user text-xl"></i>
                </button>

                <div className={`absolute top-14 right-0 z-50 p-5 w-64 bg-white/5 border border-white/10 backdrop-blur-md shadow-xl rounded-xl transition-all duration-300 ${
                  accountMenu ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0 pointer-events-none"
                }`}>
                  <div className="flex flex-col items-center space-y-2 text-white">
                    <div className="relative">
                      {profileImage ? (
                        <img src={profileImage} alt="Profile" className="w-16 h-16 rounded-full object-cover border-2 border-white" />
                      ) : (
                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-2xl font-semibold">
                          {userName ? userName.charAt(0).toUpperCase() : "G"}
                        </div>
                      )}
                      <label className="absolute -bottom-2 -right-2 cursor-pointer bg-white rounded-full p-1 shadow hover:bg-gray-100">
                        <i className="fa-solid fa-camera text-yellow-500 text-sm"></i>
                        <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
                      </label>
                    </div>
                    <div className="font-bold text-lg">{userName || "Guest"}</div>
                    <div className="text-sm text-center text-gray-100">{userEmail || "No email provided"}</div>
                    <button onClick={handleLogout} className="w-full mt-3 py-2 bg-gray-900 hover:bg-gray-800 text-white rounded-full">Logout</button>
                    <Link to="/adminpanel" className="w-full">
                      <button onClick={() => setAccountMenu(false)} className="w-full mt-2 py-2 bg-white/20 hover:bg-white/30 text-white rounded-full text-sm">
                        Dashboard
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Toggle */}
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-400 z-50">
              <i className={`fas ${isOpen ? "fa-times" : "fa-bars"} fa-lg`}></i>
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE SLIDE-IN MENU */}
      <div className={`fixed top-0 left-0 h-screen w-4/5 max-w-xs bg-white/5 border border-white/10 backdrop-blur-md text-white z-40 transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}>
        <div className="flex flex-col h-full p-6 space-y-6">
          <div className="flex items-center space-x-3">
            {profileImage ? (
              <img src={profileImage} alt="Profile" className="w-10 h-10 rounded-full object-cover border-2 border-white" />
            ) : (
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-lg font-semibold">
                {userName ? userName.charAt(0).toUpperCase() : "G"}
              </div>
            )}
            <div>
              <p className="font-semibold">{userName || "Guest"}</p>
              <p className="text-xs text-gray-300">{userEmail || "No email"}</p>
            </div>
          </div>

          <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-sky-400">Home</Link>

          <div ref={learnRef}>
            <button onClick={() => setShowLearnDropdown((prev) => !prev)} className="w-full text-left hover:text-sky-400 flex justify-between items-center">
              Learn <i className={`fas fa-chevron-${showLearnDropdown ? "up" : "down"}`}></i>
            </button>
            {showLearnDropdown && (
              <div className="ml-4 mt-2 space-y-2">
                {learnItems.map((lang, index) => (
                  <Link key={index} to={`/${lang.toLowerCase()}`} onClick={() => {
                    setShowLearnDropdown(false);
                    setIsOpen(false);
                  }} className="block hover:text-sky-300">{lang}</Link>
                ))}
              </div>
            )}
          </div>

          {navItems.map((item) => (
            <Link key={item} to={`/${item.toLowerCase()}`} onClick={() => setIsOpen(false)} className="hover:text-sky-400">
              {item}
            </Link>
          ))}

          <Link to="/adminpanel" onClick={() => setIsOpen(false)}>
            <button className="w-full py-2 mt-4 bg-sky-300 text-gray-900 rounded-md font-semibold hover:bg-sky-400">Dashboard</button>
          </Link>

          <div className="mt-auto">
            <button onClick={handleLogout} className="w-full py-2 bg-gray-900 hover:bg-gray-700 rounded-md">
              {userEmail ? "Logout" : "Login"}
            </button>
          </div>
        </div>
      </div>

      {isOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden" onClick={() => setIsOpen(false)} />}

      {/* BOTTOM NAVBAR */}
      <div className="md:hidden fixed bottom-0 left-0 pb-3 right-0 z-50 bg-gray-900 text-sky-300 flex justify-around items-center h-20 shadow-lg border-t border-white/10">
        {bottomLinks.map((item) => {
          const isActive = location.pathname === item.to;
          return (
            <Link
              key={item.to}
              to={item.to}
              className={`flex flex-col items-center text-xs transition-transform duration-200 ${
                isActive ? "scale-110 text-sky-400" : "hover:scale-105"
              }`}
            >
              <i className={`fas ${item.icon} text-xl`}></i>
              {item.label}
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Navbar;
