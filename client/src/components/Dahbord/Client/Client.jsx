import { useState } from "react";
import { FaPlus, FaEdit, FaTrash, FaSearch, FaBuilding, FaPhone } from "react-icons/fa";
import ClientForm from "./ClientForm";

export default function Clients() {
  const initialClients = [
    {
      id: "CL-1001",
      name: "Alice Johnson",
      company: "GlobalTech",
      email: "alice@globaltech.com",
      phone: "+1-202-555-0176",
      status: "Active",
    },
    {
      id: "CL-1002",
      name: "David Smith",
      company: "Starlight Inc.",
      email: "david@starlight.com",
      phone: "+1-202-555-0198",
      status: "Pending",
    },
  ];

  const [clients, setClients] = useState(initialClients);
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editData, setEditData] = useState(null);

  const filteredClients = clients.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.company.toLowerCase().includes(search.toLowerCase()) ||
      c.id.toLowerCase().includes(search.toLowerCase())
  );

  const handleSave = (data) => {
    if (data.id) {
      setClients((prev) => prev.map((c) => (c.id === data.id ? data : c)));
    } else {
      const newClient = {
        ...data,
        id: "CL-" + (clients.length + 1001),
      };
      setClients([...clients, newClient]);
    }
    setShowForm(false);
    setEditData(null);
  };

  const handleEdit = (client) => {
    setEditData(client);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    setClients((prev) => prev.filter((c) => c.id !== id));
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-extrabold text-gray-800 flex items-center gap-2">
          <FaBuilding className="text-blue-500" /> Client Management
        </h2>
        <button
          onClick={() => { setShowForm(true); setEditData(null); }}
          className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-5 py-2 rounded-xl flex items-center gap-2 shadow hover:opacity-90 transition"
        >
          <FaPlus /> New Client
        </button>
      </div>

      {/* Search */}
      <div className="flex items-center mb-5 bg-white shadow-md px-4 py-2 rounded-xl w-1/3 border border-gray-100">
        <FaSearch className="text-gray-400 mr-2" />
        <input
          type="text"
          placeholder="Search clients..."
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
              <th className="px-4 py-3">Client ID</th>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Company</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Phone</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredClients.map((c, idx) => (
              <tr
                key={c.id}
                className={`${idx % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-blue-50 transition`}
              >
                <td className="px-4 py-3 font-medium">{c.id}</td>
                <td className="px-4 py-3">{c.name}</td>
                <td className="px-4 py-3">{c.company}</td>
                <td className="px-4 py-3">{c.email}</td>

                {/* Phone with icon & style */}
                <td className="px-4 py-3">
                  <a
                    href={`tel:${c.phone}`}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-50 text-blue-600 font-medium hover:bg-blue-100 transition shadow-sm"
                  >
                    <FaPhone className="text-blue-500" /> {c.phone}
                  </a>
                </td>

                <td className="px-4 py-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      c.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : c.status === "Inactive"
                        ? "bg-red-100 text-red-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {c.status}
                  </span>
                </td>
                <td className="px-4 py-3 flex gap-3">
                  <button
                    onClick={() => handleEdit(c)}
                    className="text-indigo-600 hover:text-indigo-800"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => handleDelete(c.id)}
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
        <ClientForm
          onSave={handleSave}
          onCancel={() => { setShowForm(false); setEditData(null); }}
          initialData={editData}
        />
      )}
    </div>
  );
}
