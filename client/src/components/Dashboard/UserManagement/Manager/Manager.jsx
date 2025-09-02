

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  FaSearch,
  FaEye,
  FaEdit,
  FaTrash,
  FaPlus,
  FaCheck,
  FaTimes,
} from "react-icons/fa";

function Manager() {
  const [searchTerm, setSearchTerm] = useState("");
  const [Manager, setManager] = useState([
    {
      id: "M001",
      name: "Arjun Sharma",
      email: "arjun.sharma@example.com",
      Role: "Project Manager",
      status: "Active",
    },
    {
      id: "M002",
      name: "Priya Verma",
      email: "priya.verma@example.com",
      Role: "Client Manager",
      status: "Inactive",
    },
    {
      id: "M003",
      name: "Rahul Mehta",
      email: "rahul.mehta@example.com",
      Role: "Client Manager",
      status: "Active",
    },
    {
      id: "M004",
      name: "Sneha Kapoor",
      email: "sneha.kapoor@example.com",
      Role: "Services Manager",
      status: "Active",
    },
    {
      id: "M005",
      name: "Vikas Yadav",
      email: "vikas.yadav@example.com",
      Role: "Services Manager",
      status: "Inactive",
    },
    {
      id: "M006",
      name: "Aditi Singh",
      email: "aditi.singh@example.com",
      Role: "Finance Manager",
      status: "Active",
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);
  const [editData, setEditData] = useState({ name: "", type: "", status: "" });

  // 🔹 Filter by search
  const filteredManager = Manager.filter(
    (M) =>
      M.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      M.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      M.Role.toLowerCase().includes(searchTerm.toLowerCase()) ||
      M.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // 🔹 Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const ManagerPerPage = 5;
  const indexOfLast = currentPage * ManagerPerPage;
  const indexOfFirst = indexOfLast - ManagerPerPage;
  const currentManager = filteredManager.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredManager.length / ManagerPerPage);

  const addManager = (newManager) => {
    setManager([...Manager, newManager]);
  };

  const deleteManager = (id) => {
    if (window.confirm("Are you sure you want to delete this Manager?")) {
      setManager(Manager.filter((M) => M.id !== id));
    }
  };

  const startEdit = (M) => {
    setEditId(M.id);
    setEditData({ name: M.name, type: M.type, status: M.status });
  };

  const saveEdit = (id) => {
    setManager(
      Manager.map((M) =>
        M.id === id
          ? {
              ...M,
              name: editData.name,
              type: editData.type,
              status: editData.status,
            }
          : M
      )
    );
    setEditId(null);
  };

  const navigate = useNavigate();

  return (
    <>
      <div className="p-4 ">
        {/* Summary Cards */}
        <div className="flex justify-center gap-8 mb-8 flex-wrap">
          {/* Total Manager */}
          <div className="bg-white rounded-lg shadow-md px-8 py-6 border-l-4 border-blue-500 w-72 text-center">
            <h2 className="text-lg font-semibold text-gray-700">
              Total Manager
            </h2>
            <p className="text-4xl font-bold text-blue-600 mt-2">
              {Manager.length}
            </p>
          </div>

          {/* Active Manager */}
          <div className="bg-white rounded-lg shadow-md px-8 py-6 border-l-4 border-green-500 w-72 text-center">
            <h2 className="text-lg font-semibold text-gray-700">
              Active Manager
            </h2>
            <p className="text-4xl font-bold text-green-600 mt-2">
              {Manager.filter((e) => e.status === "Active").length}
            </p>
          </div>

          {/* Inactive Manager */}
          <div className="bg-white rounded-lg shadow-md px-8 py-6 border-l-4 border-red-700 w-72 text-center">
            <h2 className="text-lg font-semibold text-gray-700">
              Inactive Manager
            </h2>
            <p className="text-4xl font-bold text-purple-600 mt-2">
              {Manager.filter((e) => e.status === "Inactive").length}
            </p>
          </div>
        </div>

        {/* Search + Add bar */}
        <div className="flex justify-between items-center mb-2">
          {/* Search bar */}
          <div className="flex items-center bg-white px-4 py-2 rounded-full w-80 shadow-md">
            <FaSearch className="text-slate-400 mr-2" />
            <input
              type="text"
              placeholder="Search by ID, Name,  Role or Status"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="outline-none w-full text-sm bg-transparent text-slate-700"
            />
          </div>

          {/* Add new Manager */}
          <button
            onClick={() => navigate("/add-manager")}
            className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 transition text-white px-5 py-2 rounded-full shadow-md "
          >
            <FaPlus />
            <span className="hidden sm:inline">Add Manager</span>
          </button>
        </div>

        {/* Manager Table */}
        <div className=" bg-white shadow-lg rounded-xl overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-slate-100 text:sm text-slate-600">
                <th className="px-6 py-4 text-left font-semibold">
                  Manager ID
                </th>
                <th className="px-6 py-4 text-left font-semibold">Name</th>
                <th className="px-6 py-4 text-left font-semibold">Email</th>
                <th className="px-6 py-4 text-left font-semibold">Role</th>
                <th className="px-6 py-4 text-left font-semibold">Status</th>
                <th className="px-6 py-4 text-left font-semibold">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {currentManager.map((M) => (
                <tr key={M.id} className="hover:bg-slate-50 transition">
                  <td className="px-6 py-4 text-slate-800 font-medium">
                    {M.id}
                  </td>

                  {/* Editable Name */}
                  <td className="px-6 py-4">
                    {editId === M.id ? (
                      <input
                        type="text"
                        value={editData.name}
                        onChange={(e) =>
                          setEditData({ ...editData, name: e.target.value })
                        }
                        className="border border-slate-200 px-2 py-1 rounded-lg w-full text-sm shadow-sm focus:ring-2 outline-none"
                      />
                    ) : (
                      <span className="text-slate-700">{M.name}</span>
                    )}
                  </td>

                  {/* Email */}
                  <td className="px-6 py-4 text-slate-500">{M.email}</td>

                  {/* Editable Role */}
                  <td className="px-6 py-4">
                    {editId === M.id ? (
                      <input
                        type="text"
                        value={editData.type}
                        onChange={(e) =>
                          setEditData({ ...editData, type: e.target.value })
                        }
                        className="border border-slate-200 px-2 py-1 rounded-lg w-full text-sm shadow-sm focus:ring-2 outline-none"
                      />
                    ) : (
                      <span className="text-slate-700">{M.Role}</span>
                    )}
                  </td>

                  {/* Editable Status */}
                  <td className="px-6 py-4">
                    {editId === M.id ? (
                      <select
                        value={editData.status}
                        onChange={(e) =>
                          setEditData({ ...editData, status: e.target.value })
                        }
                        className="px-3 py-2 w-full text-sm rounded-xl shadow-md bg-gray-300 backdrop-blur-sm outline-none focus:ring-2 transition-all duration-300"
                      >
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                      </select>
                    ) : (
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          M.status === "Active"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {M.status}
                      </span>
                    )}
                  </td>

                  {/* Actions */}
                  <td className="px-6 py-4 text-center">
                    {editId === M.id ? (
                      <div className="flex justify-center gap-2">
                        <button
                          onClick={() => saveEdit(M.id)}
                          className="bg-green-400 hover:bg-green-600 text-black p-3 rounded-full shadow-sm transition"
                        >
                          <FaCheck className="text-lg" />
                        </button>
                        <button
                          onClick={() => setEditId(null)}
                          className="bg-red-400 hover:bg-red-600 text-black p-3 rounded-full shadow-sm transition"
                        >
                          <FaTimes className="text-lg" />
                        </button>
                      </div>
                    ) : (
                      <div className="flex justify-center gap-4 text-slate-500">
                        <button
                          onClick={() => navigate("/managerdetails")}
                          className="hover:text-green-600 transition"
                        >
                          <FaEye />
                        </button>
                        <button
                          onClick={() => startEdit(M)}
                          className="hover:text-yellow-600 transition"
                        >
                          <FaEdit />
                        </button>
                        <button
                          onClick={() => deleteManager(M.id)}
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

                {/* Previous Next btn  */}

          <div className="flex justify-between items-center px-5 py-5 bg-slate-50">
            <span className="text-sm text-slate-600">
              Page {currentPage} of {totalPages}
            </span>

            <div className="flex gap-3">
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
        </div>
      </div>
    </>
  );
}

export default Manager;
