// ==================== ------ Hover wala code ------============================

// import { useState } from "react";
// import { NavLink, Outlet, useNavigate } from "react-router-dom";
// import {
//   FaFolderOpen,
//   FaUsers,
//   FaChartBar,
//   FaUserCircle,
//   FaCog,
//   FaSignOutAlt,
//   FaChevronDown,
//   FaChevronUp,
//   FaBell,
//   FaTools,
//   FaIndustry,
//   FaCogs,
//   FaStar,
//   FaLaptopCode,
//   FaBlog,
//   FaLightbulb,
//   FaBars,
//   FaTimes,
// } from "react-icons/fa";

// function MainDashboard() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeSubmenu, setActiveSubmenu] = useState(null);
//   const [showDropdown, setShowDropdown] = useState(false);
//   const navigate = useNavigate();

//   const menuItems = [
//     { to: "", label: "Dashboard", icon: <FaChartBar /> },
//     { to: "projects", label: "Projects", icon: <FaFolderOpen /> },
//     { to: "clients", label: "Clients", icon: <FaUsers /> },
//     { to: "reports", label: "Reports", icon: <FaChartBar /> },
//     {
//       label: "Services",
//       icon: <FaTools />,
//       submenu: [
//         { to: "services/client-rating", label: "Client Rating", icon: <FaStar /> },
//         { to: "services/project-showcase", label: "Project Showcase", icon: <FaLaptopCode /> },
//         { to: "services/blog", label: "Blog", icon: <FaBlog /> },
//         { to: "services/solutions", label: "Solutions", icon: <FaLightbulb /> },
//       ],
//     },
//     { to: "notification", label: "Notification", icon: <FaBell /> },
//     { to: "industry-analysis", label: "Industry Analysis", icon: <FaIndustry /> },
//     {
//       label: "User Management",
//       icon: <FaUsers />,
//       submenu: [
//         { to: "manager", label: "Manager", icon: <FaUsers /> },
//         { to: "employ", label: "Employee", icon: <FaUsers /> },
//       ],
//     },
//     { to: "developmant-toolkit", label: "Development Toolkit", icon: <FaCogs /> },
//   ];

//   const handleSignOut = () => {
//     console.log("User signed out");
//     navigate("/login");
//   };
//   return (
// <>
//  <div className="flex h-screen bg-gray-100">
//       {/* Sidebar */}
//       <aside
//         className={`bg-gray-900 text-white flex flex-col justify-between transition-all duration-500 ease-in-out relative`}
//         style={{ width: isOpen ? "16rem" : "5rem" }}
//         onMouseEnter={() => setIsOpen(true)}
//         onMouseLeave={() => setIsOpen(false)}
//       >
//         {/* Sidebar Top */}
//         <div className="flex items-center gap-3 p-5 border-b border-gray-700">
//           {isOpen && <h2 className="text-2xl font-bold">Dashboard</h2>}
//           {isOpen ? (
//             <FaTimes size={28} className="ml-auto text-red-400 cursor-pointer" />
//           ) : (
//             <FaBars size={28} className="ml-auto text-blue-300 cursor-pointer" />
//           )}
//         </div>

//         {/* Menu */}
//         <nav className="flex-1 p-2">
//           {menuItems.map((item) =>
//             item.submenu ? (
//               <div
//                 key={item.label}
//                 className="mb-2 group"
//                 onMouseEnter={() => setActiveSubmenu(item.label)}
//                 onMouseLeave={() => setActiveSubmenu(null)}
//               >
//                 <div className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-gray-700 cursor-pointer transition-colors duration-300 min-h-[40px]">
//                   <div className="flex items-center gap-3">
//                     {item.icon}
//                     {isOpen && <span>{item.label}</span>}
//                   </div>
//                   {isOpen && (activeSubmenu === item.label ? <FaChevronUp size={14} /> : <FaChevronDown size={14} />)}
//                 </div>

//                 {/* Submenu inside sidebar */}
//                 <div
//                   className={`flex flex-col ml-4 overflow-hidden transition-all duration-300 ${
//                     activeSubmenu === item.label ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
//                   }`}
//                 >
//                   {item.submenu.map((sub) => (
//                     <NavLink
//                       key={sub.to}
//                       to={sub.to}
//                       end
//                       className={({ isActive }) =>
//                         `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors duration-300 min-h-[40px] ${
//                           isActive ? "bg-blue-500 text-white font-semibold" : "text-gray-300 hover:bg-gray-700"
//                         }`
//                       }
//                     >
//                       {sub.icon}
//                       {isOpen && <span>{sub.label}</span>}
//                     </NavLink>
//                   ))}
//                 </div>
//               </div>
//             ) : (
//               <NavLink
//                 key={item.to}
//                 to={item.to}
//                 end
//                 className={({ isActive }) =>
//                   `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors duration-300 min-h-[40px] mb-2 ${
//                     isActive ? "bg-blue-500 text-white font-semibold" : "text-gray-300 hover:bg-gray-700"
//                   }`
//                 }
//               >
//                 {item.icon}
//                 {isOpen && <span>{item.label}</span>}
//               </NavLink>
//             )
//           )}
//         </nav>

//         {/* Profile Dropdown */}
//         <div
//           className="relative"
//           onMouseEnter={() => setShowDropdown(true)}
//           onMouseLeave={() => setShowDropdown(false)}
//         >
//           <div className="flex items-center justify-between w-full p-4 hover:bg-gray-700 cursor-pointer min-h-[50px]">
//             <div className="flex items-center gap-3">
//               <FaUserCircle size={28} />
//               {isOpen && <span className="font-medium">John Doe</span>}
//             </div>
//             {isOpen && <span>{showDropdown ? <FaChevronUp /> : <FaChevronDown />}</span>}
//           </div>

//           {/* Dropdown Menu */}
//           <div
//             className={`absolute bottom-16 left-0  overflow-hidden transition-all duration-300 ${
//               showDropdown ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
//             }`}
//             style={{ width: isOpen ? "16rem" : "5rem" }}
//           >
//             <ul className="flex flex-col">
//               <li>
//                 <NavLink
//                   to="/profile"
//                   className="flex items-center gap-3 px-4 py-2 hover:bg-gray-700 transition-colors duration-300"
//                 >
//                   <FaUserCircle />
//                   {isOpen && <span>Profile</span>}
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   to="/settings"
//                   className="flex items-center gap-3 px-4 py-2 hover:bg-gray-700 transition-colors duration-300"
//                 >
//                   <FaCog />
//                   {isOpen && <span>Settings</span>}
//                 </NavLink>
//               </li>
//               <li>
//                 <button
//                   onClick={handleSignOut}
//                   className="flex items-center gap-3 px-4 py-2 hover:bg-gray-700 text-red-400 w-full text-left transition-colors duration-300"
//                 >
//                   <FaSignOutAlt />
//                   {isOpen && <span>Sign Out</span>}
//                 </button>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-1 p-8 overflow-auto transition-all duration-300">
//         <Outlet />
//       </main>
//     </div>
// </>

//   )
// }

// export default MainDashboard















// ==================== ------ onclick wala code ------============================



import { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
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
  FaCogs,
  FaStar,
  FaLaptopCode,
  FaBlog,
  FaLightbulb,
  FaBars,
} from "react-icons/fa";

function MainDashboard() {
  const [isOpen, setIsOpen] = useState(true);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
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
      ],
    },
    { to: "notification", label: "Notification", icon: <FaBell /> },
    { to: "industry-analysis", label: "Industry Analysis", icon: <FaIndustry /> },
    {
      label: "User Management",
      icon: <FaUsers />,
      submenu: [
        { to: "manager", label: "Manager", icon: <FaUsers /> },
        { to: "employ", label: "Employee", icon: <FaUsers /> },
      ],
    },
    { to: "developmant-toolkit", label: "Development Toolkit", icon: <FaCogs /> },
  ];

  const handleSignOut = () => {
    navigate("/login");
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`bg-gray-900 text-white flex flex-col transition-all duration-500 ease-in-out shadow-xl`}
        style={{ width: isOpen ? "18rem" : "5rem" }}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-800">
          {isOpen && <h2 className="text-xl font-semibold tracking-wide">Workspace</h2>}
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-400 hover:text-white">
            <FaBars size={20} />
          </button>
        </div>

        {/* Menu Items */}
        <nav className="flex-1 px-2 py-4 overflow-y-auto">
          {menuItems.map((item) =>
            item.submenu ? (
              <div key={item.label} className="mb-2">
                <button
                  onClick={() =>
                    setActiveSubmenu(activeSubmenu === item.label ? null : item.label)
                  }
                  className="flex items-center justify-between w-full px-3 py-2 rounded-lg hover:bg-gray-800 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    {item.icon}
                    {isOpen && <span>{item.label}</span>}
                  </div>
                  {isOpen &&
                    (activeSubmenu === item.label ? <FaChevronUp size={14} /> : <FaChevronDown size={14} />)}
                </button>

                {/* Submenu */}
                <div
                  className={`flex flex-col ml-6 mt-1 space-y-1 transition-all duration-300 overflow-hidden ${
                    activeSubmenu === item.label ? "max-h-96" : "max-h-0"
                  }`}
                >
                  {item.submenu.map((sub) => (
                    <NavLink
                      key={sub.to}
                      to={sub.to}
                      end
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                          isActive
                            ? "bg-green-500 text-white font-medium"
                            : "text-gray-400 hover:bg-gray-800 hover:text-white"
                        }`
                      }
                    >
                      {sub.icon}
                      {isOpen && <span>{sub.label}</span>}
                    </NavLink>
                  ))}
                </div>
              </div>
            ) : (
              <NavLink
                key={item.to}
                to={item.to}
                end
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                    isActive
                      ? "bg-green-500 text-white font-medium"
                      : "text-gray-400 hover:bg-gray-800 hover:text-white"
                  }`
                }
              >
                {item.icon}
                {isOpen && <span>{item.label}</span>}
              </NavLink>
            )
          )}
        </nav>

        {/* User Profile */}
        <div
          className="p-4 border-t border-gray-800 hover:bg-gray-800 cursor-pointer transition-colors"
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >
          <div className="flex items-center gap-3">
            <FaUserCircle size={32} className="text-green-400" />
            {isOpen && (
              <div>
                <p className="text-sm font-semibold">John Doe</p>
                <p className="text-xs text-gray-400">Admin</p>
              </div>
            )}
          </div>

          {/* Dropdown */}
          {showDropdown && (
            <ul
              className={`mt-3 space-y-2 text-sm transition-all duration-300 ${
                isOpen ? "block" : "hidden"
              }`}
            >
              <li>
                <NavLink
                  to="/profile"
                  className="flex items-center gap-2 px-2 py-1 hover:bg-gray-700 rounded-lg"
                >
                  <FaUserCircle />
                  Profile
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/settings"
                  className="flex items-center gap-2 px-2 py-1 hover:bg-gray-700 rounded-lg"
                >
                  <FaCog />
                  Settings
                </NavLink>
              </li>
              <li>
                <button
                  onClick={handleSignOut}
                  className="flex items-center gap-2 px-2 py-1 text-red-400 hover:bg-gray-700 rounded-lg w-full text-left"
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
