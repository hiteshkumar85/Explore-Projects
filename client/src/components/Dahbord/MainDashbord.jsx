
import { useState, useEffect, useRef } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaFolderOpen,
  FaUsers,
  FaChartBar,
  FaUserCircle,
  FaCog,
  FaSignOutAlt,
  FaChevronDown,
  FaChevronUp,
  FaBell,
  FaTools,
  FaIndustry,
  FaCogs,
  FaStar,
  FaLaptopCode,
  FaBlog,
  FaLightbulb,
} from "react-icons/fa";

export default function Dashboard() {
  const [isOpen, setIsOpen] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showServiceMenu, setShowServiceMenu] = useState(false); // for service submenu
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const menuItems = [
    { to: "", label: "Dashboard", icon: <FaChartBar /> },
    { to: "projects", label: "Projects", icon: <FaFolderOpen /> },
    { to: "clients", label: "Clients", icon: <FaUsers /> },
    { to: "reports", label: "Reports", icon: <FaChartBar /> },
    { 
      label: "Services", 
      icon: <FaTools />, 
      submenu: [
        { to: "services/client-rating", label: "Client Rating", icon: <FaStar /> },
        { to: "services/project-showcase", label: "Project Showcase", icon: <FaLaptopCode /> },
        { to: "services/blog", label: "Blog", icon: <FaBlog /> },
        { to: "services/solutions", label: "Solutions", icon: <FaLightbulb /> },
      ]
    },
    { to: "notification", label: "Notification", icon: <FaBell /> },
    { to: "industry-analysis", label: "Industry Analysis", icon: <FaIndustry /> },
    { to: "user-management", label: "User Management", icon: <FaUsers /> },
    { to: "developmant-toolkit", label: "Development Toolkit", icon: <FaCogs /> },
  ];

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle Sign Out
  const handleSignOut = () => {
    console.log("User signed out");
    navigate("/login");
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`${
          isOpen ? "w-64" : "w-20"
        } bg-gray-900 text-white flex flex-col justify-between transition-all duration-300`}
      >
        {/* Sidebar Top */}
        <div>
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-700">
            {isOpen && <h2 className="text-xl font-bold">Dashboard</h2>}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-gray-700"
            >
              {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>

          {/* Menu */}
          <nav className="flex flex-col p-4 space-y-2">
            {menuItems.map((item) => (
              item.submenu ? (
                <div key={item.label}>
                  <button
                    onClick={() => setShowServiceMenu(!showServiceMenu)}
                    className="flex items-center justify-between w-full px-3 py-2 rounded-lg hover:bg-gray-700 transition"
                  >
                    <div className="flex items-center gap-3">
                      {item.icon}
                      {isOpen && <span>{item.label}</span>}
                    </div>
                    {isOpen && (
                      showServiceMenu ? <FaChevronUp size={14} /> : <FaChevronDown size={14} />
                    )}
                  </button>

                  {/* Submenu */}
                  {showServiceMenu && (
                    <div className="ml-8 mt-1 flex flex-col gap-1">
                      {item.submenu.map((sub) => (
                        <NavLink
                          key={sub.to}
                          to={sub.to}
                          end
                          className={({ isActive }) =>
                            `flex items-center gap-3 px-3 py-2 rounded-lg transition ${
                              isActive
                                ? "bg-blue-500 text-white font-semibold"
                                : "text-gray-300 hover:bg-gray-700"
                            }`
                          }
                        >
                          {sub.icon}
                          {isOpen && <span>{sub.label}</span>}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-3 py-2 rounded-lg transition ${
                      isActive
                        ? "bg-blue-500 text-white font-semibold"
                        : "text-gray-300 hover:bg-gray-700"
                    }`
                  }
                >
                  {item.icon}
                  {isOpen && <span>{item.label}</span>}
                </NavLink>
              )
            ))}
          </nav>
        </div>

        {/* Bottom Profile Section */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="flex items-center justify-between w-full p-4 hover:bg-gray-700 transition"
          >
            <div className="flex items-center gap-3">
              <FaUserCircle size={28} />
              {isOpen && <span className="font-medium">John Doe</span>}
            </div>
            {isOpen && (
              <span>
                {showDropdown ? <FaChevronUp size={14} /> : <FaChevronDown size={14} />}
              </span>
            )}
          </button>

          {/* Dropdown */}
          {showDropdown && (
            <div
              className={`absolute bottom-16 left-0 ${
                isOpen ? "w-64" : "w-48"
              } bg-gray-800 border border-gray-700 rounded-lg shadow-lg`}
            >
              <ul className="flex flex-col">
                <li>
                  <NavLink
                    to="/profile"
                    className="flex items-center gap-3 px-4 py-2 hover:bg-gray-700"
                  >
                    <FaUserCircle />
                    {isOpen && <span>Profile</span>}
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/settings"
                    className="flex items-center gap-3 px-4 py-2 hover:bg-gray-700"
                  >
                    <FaCog />
                    {isOpen && <span>Settings</span>}
                  </NavLink>
                </li>
                <li>
                  <button
                    onClick={handleSignOut}
                    className="flex items-center gap-3 px-4 py-2 hover:bg-gray-700 text-red-400 w-full text-left"
                  >
                    <FaSignOutAlt />
                    {isOpen && <span>Sign Out</span>}
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}
