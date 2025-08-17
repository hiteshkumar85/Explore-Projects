import { NavLink, Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white flex flex-col p-6">
        <h2 className="text-2xl font-bold mb-10 text-center">Dashboard</h2>
        <nav className="flex flex-col space-y-4">
          <NavLink
            to="projects"
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg transition ${
                isActive ? "bg-blue-500 text-white font-semibold" : "text-gray-300 hover:bg-gray-700"
              }`
            }
          >
            📁 Projects
          </NavLink>
          <NavLink
            to="clients"
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg transition ${
                isActive ? "bg-blue-500 text-white font-semibold" : "text-gray-300 hover:bg-gray-700"
              }`
            }
          >
            👥 Clients
          </NavLink>
          <NavLink
            to="reports"
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg transition ${
                isActive ? "bg-blue-500 text-white font-semibold" : "text-gray-300 hover:bg-gray-700"
              }`
            }
          >
            📊 Reports
          </NavLink>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}