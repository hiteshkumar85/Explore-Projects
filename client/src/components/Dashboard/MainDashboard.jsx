import { useState, useEffect, useRef } from "react";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import {
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
  FaStar,
  FaLaptopCode,
  FaBlog,
  FaLightbulb,
  FaBars,
  FaThLarge,
  FaWrench,
} from "react-icons/fa";

function MainDashboard() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  const sidebarRef = useRef(null);
  const location = useLocation();

  const menuItems = [
    { to: "", label: "Dashboard", icon: <FaChartBar />, allowedRoles: ["admin", "employee", "project_manager", "client_manager", "employee_manager", "service_manager"] },
    { to: "projects", label: "Projects", icon: <FaFolderOpen />, allowedRoles: ["admin", "project_manager"] },
    { to: "clients", label: "Clients", icon: <FaUsers />, allowedRoles: ["admin", "client_manager"] },
    {
      label: "Services",
      icon: <FaTools />,
      allowedRoles: ["admin", "service_manager"],
      submenu: [
        { to: "services/clientrating", label: "Client Rating", icon: <FaStar />, allowedRoles: ["admin", "service_manager"] },
        { to: "services/projectshowcase", label: "Project Showcase", icon: <FaLaptopCode />, allowedRoles: ["admin", "service_manager"] },
        { to: "services/blog", label: "Blog", icon: <FaBlog />, allowedRoles: ["admin", "service_manager"] },
        { to: "services/solutions", label: "Solutions", icon: <FaLightbulb />, allowedRoles: ["admin", "service_manager"] },
        {
          to: "developmentToolkit", label: "Development Toolkit", icon: <FaWrench />, allowedRoles: ["admin", "service_manager"]
        }
      ],
    },
    {
      label: "User Management",
      icon: <FaUsers />,
      allowedRoles: ["admin", "employee_manager"],
      submenu: [
        { to: "managers", label: "Manager", icon: <FaUsers />, allowedRoles: ["admin"] },
        { to: "employee", label: "Employee", icon: <FaUsers />, allowedRoles: ["admin", "employee_manager"] },
      ],
    },
    { to: "workspace", label: "Work Space", icon: <FaThLarge />, allowedRoles: ["employee"] },
    { to: "reports", label: "Reports", icon: <FaChartBar />, allowedRoles: ["admin"] },
    { to: "industry-analysis", label: "Industry Analysis", icon: <FaIndustry />, allowedRoles: ["admin"] },
    { to: "notification", label: "Notification", icon: <FaBell />, allowedRoles: ["admin", "employee", "project_manager", "client_manager", "employee_manager", "service_manager"] },
  ];

  const handleSignOut = () => {
    localStorage.removeItem("token");
    navigate("/dashboard/login")
  };

  const [role, setRole] = useState('');
  useEffect(() => {
    const storedRole = localStorage.getItem("token");
    setRole(storedRole);

    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setActiveSubmenu(null);
        setShowDropdown(false);
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex h-screen bg-gray-100">
      <aside
        ref={sidebarRef}
        className={`bg-gray-900 text-gray-400 flex flex-col relative`}
        style={{ width: isOpen ? "16rem" : "4rem" }}
      >
        {/* Sidebar Header */}
        <div className="flex items-center p-4.5 border-b border-gray-800 gap-8 h-14">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-400 hover:text-white">
            <FaBars size={26} />
          </button>
          {isOpen && <h2 className="text-2xl font-semibold tracking-wide">Workspace</h2>}
        </div>

        {/* Menu Items */}
        <nav className="flex-1 px-2 py-2 space-y-1">
          {menuItems
            .filter((item) => !role || item.allowedRoles.includes(role))
            .map((item) => {
              const isParentActive = item.submenu?.some((sub) => location.pathname.includes(sub.to));
              return item.submenu ? (
                <div key={item.label} className="space-y-1">
                  <button
                    onClick={() => setActiveSubmenu(activeSubmenu === item.label ? null : item.label)}
                    className={`relative group flex items-center justify-between w-full px-3.5 h-10 rounded-lg transition-colors ${isParentActive
                      ? " bg-green-500 text-white font-medium"
                      : activeSubmenu === item.label
                        ? "bg-gray-800 text-white"
                        : "hover:bg-gray-800 hover:text-white"
                      }`}
                  >
                    <div className="flex items-center gap-3">
                      {item.icon}
                      {isOpen && <span>{item.label}</span>}
                    </div>

                    {isOpen &&
                      (activeSubmenu === item.label ? <FaChevronUp size={14} /> : <FaChevronDown size={14} />)}

                    {!isOpen && (
                      <span className="pointer-events-none absolute left-full top-1/2 -translate-y-1/2 ml-3 px-2 py-1 text-xs rounded bg-gray-800 text-white opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-150 whitespace-nowrap shadow-lg z-50">
                        {item.label}
                      </span>
                    )}

                  </button>

                  {/* Submenu */}
                  <div
                    className={`flex flex-col ${activeSubmenu === item.label ? "max-h-72 overflow-visible" : "max-h-0 overflow-hidden"
                      }`}
                  >
                    {item.submenu
                      .filter((sub) => !role || sub.allowedRoles.includes(role))
                      .map((sub) => (
                        <NavLink
                          key={sub.to}
                          to={sub.to}
                          end
                          onClick={() => {
                            setActiveSubmenu(null);
                            setIsOpen(false);
                          }}
                          className={({ isActive }) =>
                            `relative group flex items-center gap-3 h-9 px-4 rounded-lg text-sm transition-all ${isActive
                              ? "bg-green-700 text-white font-medium"
                              : "text-gray-400 hover:bg-gray-800 hover:text-white hover:pl-4.5"
                            }`
                          }
                        >
                          {sub.icon}
                          {isOpen && <span>{sub.label}</span>}

                          {!isOpen && (
                            <span className="pointer-events-none absolute left-full top-1/2 -translate-y-1/2 ml-3 px-2 py-1 text-xs rounded bg-gray-800 text-white opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-150 whitespace-nowrap shadow-lg z-50">
                              {sub.label}
                            </span>
                          )}

                        </NavLink>

                      ))}
                  </div>
                </div>
              ) : (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end
                  onClick={() => {
                    setActiveSubmenu(null);
                    setIsOpen(false);
                  }}
                  className={({ isActive }) =>
                    `relative group flex items-center gap-3 px-3.5 h-10 rounded-lg transition-colors ${isActive
                      ? "bg-green-500 text-white font-medium"
                      : "text-gray-400 hover:bg-gray-800 hover:text-white"
                    }`
                  }
                >
                  {item.icon}
                  {isOpen && <span>{item.label}</span>}

                  {!isOpen && (
                    <span className="pointer-events-none absolute left-full top-1/2 -translate-y-1/2 ml-3 px-2 py-1 text-xs rounded bg-gray-800 text-white opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-150 whitespace-nowrap shadow-lg z-50">
                      {item.label}
                    </span>
                  )}

                </NavLink>

              )
            }
            )}
        </nav>

        {/* User Profile */}
        <div
          className="p-3.5 border-t border-gray-800 hover:bg-gray-800 cursor-pointer transition-colors"
          onMouseEnter={() => {
            setShowDropdown(true);
            setIsOpen(true);
            setActiveSubmenu(null);
          }}
          onMouseLeave={() => {
            setShowDropdown(false);
          }}
        >
          <div className="flex items-center gap-3">
            <FaUserCircle size={32} className="text-green-400" />
            {isOpen && (
              <div>
                <p className="text-sm font-semibold">John Doe</p>
                <p className="text-xs text-gray-400">{role || "User"}</p>
              </div>
            )}
          </div>

          {/* Dropdown */}
          {showDropdown && (
            <ul
              className={`mt-2 space-y-1 text-sm transition-all duration-300 ${isOpen ? "block" : "hidden"
                }`}
            >
              <li>
                <NavLink
                  to="/profile"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 px-3 py-2 hover:bg-gray-700 rounded-lg"
                >
                  <FaUserCircle />
                  Profile
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/settings"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 px-3 py-2 hover:bg-gray-700 rounded-lg"
                >
                  <FaCog />
                  Settings
                </NavLink>
              </li>
              <li>
                <button
                  onClick={handleSignOut}
                  className="flex items-center gap-2 px-3 py-2 text-red-400 hover:bg-gray-700 rounded-lg w-full text-left"
                >
                  <FaSignOutAlt />
                  Sign Out
                </button>
              </li>
            </ul>
          )}
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-auto bg-gray-50 transition-all duration-300">
        <Outlet />
      </main>
    </div>
  );
}

export default MainDashboard;