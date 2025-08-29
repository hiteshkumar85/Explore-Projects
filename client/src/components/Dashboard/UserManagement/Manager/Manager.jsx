

import React, { useState } from "react";
import { FaSearch, FaEye, FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import ManagerForm from "./ManagerForm";

export default function ManagerDashboard() {
  const [searchTerm, setSearchTerm] = useState("");
  const [managers, setManagers] = useState([
    {
      id: "M001",
      name: "Arjun Sharma",
      email: "arjun.sharma@example.com",
      type: "Project Manager",
      status: "Active",
    },
    {
      id: "M002",
      name: "Priya Verma",
      email: "priya.verma@example.com",
      type: "Client Manager",
      status: "Inactive",
    },
    {
      id: "M003",
      name: "Rahul Mehta",
      email: "rahul.mehta@example.com",
      type: "Operations Manager",
      status: "Active",
    },
    {
      id: "M004",
      name: "Sneha Kapoor",
      email: "sneha.kapoor@example.com",
      type: "HR Manager",
      status: "Active",
    },
    {
      id: "M005",
      name: "Vikas Yadav",
      email: "vikas.yadav@example.com",
      type: "Tech Manager",
      status: "Inactive",
    },
    {
      id: "M006",
      name: "Aditi Singh",
      email: "aditi.singh@example.com",
      type: "Finance Manager",
      status: "Active",
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);
  const [editData, setEditData] = useState({ name: "", type: "", status: "" });

  // 🔹 Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const managersPerPage = 3;

  // 🔹 Filter managers by search
  const filteredManagers = managers.filter(
    (m) =>
      m.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      m.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      m.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      m.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // 🔹 Slice data for pagination
  const indexOfLast = currentPage * managersPerPage;
  const indexOfFirst = indexOfLast - managersPerPage;
  const currentManagers = filteredManagers.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(filteredManagers.length / managersPerPage);

  const addManager = (newManager) => {
    setManagers([...managers, newManager]);
  };

  const deleteManager = (id) => {
    if (window.confirm("Are you sure you want to delete this manager?")) {
      setManagers(managers.filter((m) => m.id !== id));
    }
  };

  const startEdit = (m) => {
    setEditId(m.id);
    setEditData({ name: m.name, type: m.type, status: m.status });
  };

  const saveEdit = (id) => {
    setManagers(
      managers.map((m) =>
        m.id === id
          ? {
              ...m,
              name: editData.name,
              type: editData.type,
              status: editData.status,
            }
          : m
      )
    );
    setEditId(null);
  };

  return (
    <div className="p-6">
      {/* Top bar */}
      <div className="flex justify-between items-center mb-6">
        {/* Search bar */}
        <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-md w-80">
          <FaSearch className="text-slate-400 mr-2" />
          <input
            type="text"
            placeholder="Search by ID, Name, Type or Status"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="outline-none w-full text-sm bg-transparent text-slate-700"
          />
        </div>

        {/* Add new manager */}
        <button
          onClick={() => window.open("/add-manager", "_blank")}
          className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 transition text-white px-5 py-2 rounded-full shadow-md"
        >
          <FaPlus />
          <span className="hidden sm:inline">Add Manager</span>
        </button>
      </div>

      {/* Table Card */}
      <div className="bg-white shadow-lg rounded-xl overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-slate-100 text-sm text-slate-600">
              <th className="px-6 py-4 text-left font-semibold">Manager ID</th>
              <th className="px-6 py-4 text-left font-semibold">Name</th>
              <th className="px-6 py-4 text-left font-semibold">Email</th>
              <th className="px-6 py-4 text-left font-semibold">Type</th>
              <th className="px-6 py-4 text-left font-semibold">Status</th>
              <th className="px-6 py-4 text-center font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {currentManagers.map((m) => (
              <tr key={m.id} className="hover:bg-slate-50 transition">
                <td className="px-6 py-4 text-slate-800 font-medium">{m.id}</td>

                {/* Editable Name */}
                <td className="px-6 py-4">
                  {editId === m.id ? (
                    <input
                      type="text"
                      value={editData.name}
                      onChange={(e) =>
                        setEditData({ ...editData, name: e.target.value })
                      }
                      className="border border-slate-200 px-2 py-1 rounded-lg w-full text-sm shadow-sm focus:ring-2 focus:ring-indigo-500"
                    />
                  ) : (
                    <span className="text-slate-700">{m.name}</span>
                  )}
                </td>

                {/* Email */}
                <td className="px-6 py-4 text-slate-500">{m.email}</td>

                {/* Editable Type */}
                <td className="px-6 py-4">
                  {editId === m.id ? (
                    <input
                      type="text"
                      value={editData.type}
                      onChange={(e) =>
                        setEditData({ ...editData, type: e.target.value })
                      }
                      className="border border-slate-200 px-2 py-1 rounded-lg w-full text-sm shadow-sm focus:ring-2 focus:ring-indigo-500"
                    />
                  ) : (
                    <span className="text-slate-700">{m.type}</span>
                  )}
                </td>

                {/* Editable Status */}
                <td className="px-6 py-4">
                  {editId === m.id ? (
                    <select
                      value={editData.status}
                      onChange={(e) =>
                        setEditData({ ...editData, status: e.target.value })
                      }
                      className="border border-slate-200 px-2 py-1 rounded-lg w-full text-sm shadow-sm focus:ring-2 focus:ring-indigo-500"
                    >
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                    </select>
                  ) : (
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        m.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {m.status}
                    </span>
                  )}
                </td>

                {/* Actions */}
                <td className="px-6 py-4 text-center">
                  {editId === m.id ? (
                    <div className="flex justify-center gap-2">
                      <button
                        onClick={() => saveEdit(m.id)}
                        className="bg-indigo-600 hover:bg-indigo-700 text-white p-2 rounded-full shadow-sm"
                      >
                        ✔
                      </button>
                      <button
                        onClick={() => setEditId(null)}
                        className="bg-slate-400 hover:bg-slate-500 text-white p-2 rounded-full shadow-sm"
                      >
                        ✖
                      </button>
                    </div>
                  ) : (
                    <div className="flex justify-center gap-4 text-slate-500">
                      <button
                        onClick={() =>
                          window.open(`/managerdetails`, "_blank") // 🔹 Opens new page for View
                        }
                        className="hover:text-green-600 transition"
                      >
                        <FaEye />
                      </button>
                      <button
                        onClick={() => startEdit(m)}
                        className="hover:text-yellow-600 transition"
                      >
                        <FaEdit />
                      </button>
                      <button
                        onClick={() => deleteManager(m.id)}
                        className="hover:text-red-600 transition"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* 🔹 Pagination Controls */}
        <div className="flex items-center gap-4 px-6 py-3 bg-slate-50">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className={`px-4 py-1 rounded-md text-sm font-medium shadow ${
              currentPage === 1
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-indigo-600 text-white hover:bg-indigo-700"
            }`}
          >
            Previous
          </button>

          <span className="text-sm text-slate-600">
            Page {currentPage} of {totalPages}
          </span>

          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className={`px-4 py-1 rounded-md text-sm font-medium shadow ${
              currentPage === totalPages
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-indigo-600 text-white hover:bg-indigo-700"
            }`}
          >
            Next
          </button>
        </div>
      </div>

      {/* Form Modal */}
      {showForm && (
        <ManagerForm onClose={() => setShowForm(false)} onAdd={addManager} />
      )}
    </div>
  );
}
