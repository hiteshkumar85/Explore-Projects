import { useState } from "react";
import { FaPlus, FaEdit, FaTrash, FaSearch } from "react-icons/fa";
import ProjectForm from "./ProjectForm";

export default function Projects() {
  const initialProjects = [
    {
      id: "PRJ-1001",
      name: "Phoenix",
      client: "GlobalTech",
      startDate: "2023-06-15",
      deadline: "2023-11-30",
      progress: 80,
      status: "On Track",
    },
    {
      id: "PRJ-1002",
      name: "Nebula",
      client: "Starlight Inc.",
      startDate: "2023-07-01",
      deadline: "2023-12-15",
      progress: 40,
      status: "Delayed",
    },
  ];

  const [projects, setProjects] = useState(initialProjects);
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editData, setEditData] = useState(null);

  const filteredProjects = projects.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.client.toLowerCase().includes(search.toLowerCase()) ||
      p.id.toLowerCase().includes(search.toLowerCase())
  );

  const handleSave = (data) => {
    if (data.id) {
      setProjects((prev) =>
        prev.map((p) => (p.id === data.id ? data : p))
      );
    } else {
      const newProject = {
        ...data,
        id: "PRJ-" + (projects.length + 1001),
      };
      setProjects([...projects, newProject]);
    }
    setShowForm(false);
    setEditData(null);
  };

  const handleEdit = (project) => {
    setEditData(project);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    setProjects((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-extrabold text-gray-800">
          📊 Project Management
        </h2>
        <button
          onClick={() => { setShowForm(true); setEditData(null); }}
          className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-5 py-2 rounded-xl flex items-center gap-2 shadow hover:opacity-90 transition"
        >
          <FaPlus /> New Project
        </button>
      </div>

      {/* Search */}
      <div className="flex items-center mb-5 bg-white shadow-md px-4 py-2 rounded-xl w-1/3 border border-gray-100">
        <FaSearch className="text-gray-400 mr-2" />
        <input
          type="text"
          placeholder="Search projects..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full outline-none text-gray-700"
        />
      </div>

      {/* Table */}
      <div className="bg-white shadow-xl rounded-xl overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 text-sm uppercase">
            <tr>
              <th className="px-4 py-3">Project ID</th>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Client</th>
              <th className="px-4 py-3">Start Date</th>
              <th className="px-4 py-3">Deadline</th>
              <th className="px-4 py-3">Progress</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredProjects.map((p, idx) => (
              <tr
                key={p.id}
                className={`${idx % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-blue-50 transition`}
              >
                <td className="px-4 py-3 font-medium">{p.id}</td>
                <td className="px-4 py-3">{p.name}</td>
                <td className="px-4 py-3">{p.client}</td>
                <td className="px-4 py-3">{p.startDate}</td>
                <td className="px-4 py-3">{p.deadline}</td>
                <td className="px-4 py-3">
                  <div className="w-28 bg-gray-200 rounded-full h-2 overflow-hidden">
                    <div
                      className={`h-2 rounded-full transition-all duration-500 ${
                        p.progress >= 70
                          ? "bg-gradient-to-r from-green-400 to-green-600"
                          : p.progress >= 40
                          ? "bg-gradient-to-r from-yellow-400 to-yellow-600"
                          : "bg-gradient-to-r from-blue-400 to-blue-600"
                      }`}
                      style={{ width: `${p.progress}%` }}
                    />
                  </div>
                </td>
                <td className="px-4 py-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      p.status === "On Track"
                        ? "bg-green-100 text-green-700"
                        : p.status === "Delayed"
                        ? "bg-yellow-100 text-yellow-700"
                        : p.status === "Final Review"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {p.status}
                  </span>
                </td>
                <td className="px-4 py-3 flex gap-3">
                  <button
                    onClick={() => handleEdit(p)}
                    className="text-indigo-600 hover:text-indigo-800"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => handleDelete(p.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Form Modal */}
      {showForm && (
        <ProjectForm
          onSave={handleSave}
          onCancel={() => { setShowForm(false); setEditData(null); }}
          initialData={editData}
        />
      )}
    </div>
  );
}
