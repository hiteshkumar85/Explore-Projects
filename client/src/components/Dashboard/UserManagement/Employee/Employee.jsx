

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

function Employee() {
  const [searchTerm, setSearchTerm] = useState("");
  const [Employee, setEmployee] = useState([
    {
      id: "E001",
      name: "Arjun Sharma",
      email: "arjun.sharma@example.com",
      Role: "Front-end developer",
      status: "Active",
    },
    {
      id: "E002",
      name: "Priya Verma",
      email: "priya.verma@example.com",
      Role: "Front-end developer",
      status: "Inactive",
    },
    {
      id: "E003",
      name: "Rahul Mehta",
      email: "rahul.mehta@example.com",
      Role: "Front-end developer",
      status: "Active",
    },
    {
      id: "E004",
      name: "Sneha Kapoor",
      email: "sneha.kapoor@example.com",
      Role:"UI/UX designer",
      status: "Active",
    },
    {
      id: "E005",
      name: "Vikas Yadav",
      email: "vikas.yadav@example.com",
      Role:"UI/UX designer",
      status: "Inactive",
    },
    {
      id: "E006",
      name: "Aditi Singh",
      email: "aditi.singh@example.com",
      Role:"UI/UX designer",
      status: "Active",
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);
  const [editData, setEditData] = useState({ name: "", type: "", status: "" });

  // 🔹 Filter by search
  const filteredEmployee = Employee.filter(
    (E) =>
      E.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      E.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      E.Role.toLowerCase().includes(searchTerm.toLowerCase()) ||
      E.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // 🔹 Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const EmployeePerPage = 5;
  const indexOfLast = currentPage * EmployeePerPage;
  const indexOfFirst = indexOfLast - EmployeePerPage;
  const currentEmployee = filteredEmployee.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredEmployee.length / EmployeePerPage);

  const addEmployee = (newEmployee) => {
    setEmployee([...Employee, newEmployee]);
  };

  const deleteEmployee = (id) => {
    if (window.confirm("Are you sure you want to delete this Employee?")) {
      setEmployee(Employee.filter((E) => E.id !== id));
    }
  };

  const startEdit = (E) => {
    setEditId(E.id);
    setEditData({ name: E.name, type: E.type, status: E.status });
  };

  const saveEdit = (id) => {
    setEmployee(
      Employee.map((E) =>
        E.id === id
          ? {
              ...E,
              name: editData.name,
              type: editData.type,
              status: editData.status,
            }
          : E
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
          {/* Total Employees */}
          <div className="bg-white rounded-lg shadow-md px-8 py-6 border-l-4 border-blue-500 w-72 text-center">
            <h2 className="text-lg font-semibold text-gray-700">
              Total Employees
            </h2>
            <p className="text-4xl font-bold text-blue-600 mt-2">
              {Employee.length}
            </p>
          </div>

          {/* Active Employees */}
          <div className="bg-white rounded-lg shadow-md px-8 py-6 border-l-4 border-green-500 w-72 text-center">
            <h2 className="text-lg font-semibold text-gray-700">
              Active Employees
            </h2>
            <p className="text-4xl font-bold text-green-600 mt-2">
              {Employee.filter((e) => e.status === "Active").length}
            </p>
          </div>

          {/* Inactive Employees */}
          <div className="bg-white rounded-lg shadow-md px-8 py-6 border-l-4 border-red-700 w-72 text-center">
            <h2 className="text-lg font-semibold text-gray-700">
              Inactive Employees
            </h2>
            <p className="text-4xl font-bold text-purple-600 mt-2">
              {Employee.filter((e) => e.status === "Inactive").length}
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
              placeholder="Search by ID, Name, Role or Status"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="outline-none w-full text-sm bg-transparent text-slate-700"
            />
          </div>

          {/* Add new Employee */}
          <button
            onClick={() => navigate("/add-manager")}
            className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 transition text-white px-5 py-2 rounded-full shadow-md"
          >
            <FaPlus />
            <span className="hidden sm:inline">Add Employee</span>
          </button>
        </div>

        {/* Employee Table */}
        <div className=" bg-white shadow-lg rounded-xl overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-slate-100 text:sm text-slate-600">
                <th className="px-6 py-4 text-left font-semibold">
                  Employee ID
                </th>
                <th className="px-6 py-4 text-left font-semibold">Name</th>
                <th className="px-6 py-4 text-left font-semibold">Email</th>
                <th className="px-6 py-4 text-left font-semibold">Role</th>
                <th className="px-6 py-4 text-left font-semibold">Status</th>
                <th className="px-6 py-4 text-left font-semibold">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {currentEmployee.map((E) => (
                <tr key={E.id} className="hover:bg-slate-50 transition">
                  <td className="px-6 py-4 text-slate-800 font-medium">
                    {E.id}
                  </td>

                  {/* Editable Name */}
                  <td className="px-6 py-4">
                    {editId === E.id ? (
                      <input
                        type="text"
                        value={editData.name}
                        onChange={(e) =>
                          setEditData({ ...editData, name: e.target.value })
                        }
                        className="border border-slate-200 px-2 py-1 rounded-lg w-full text-sm shadow-sm focus:ring-2 outline-none"
                      />
                    ) : (
                      <span className="text-slate-700">{E.name}</span>
                    )}
                  </td>

                  {/* Email */}
                  <td className="px-6 py-4 text-slate-500">{E.email}</td>

                  {/* Editable Role */}
                  <td className="px-6 py-4">
                    {editId === E.id ? (
                      <input
                        type="text"
                        value={editData.type}
                        onChange={(e) =>
                          setEditData({ ...editData, type: e.target.value })
                        }
                        className="border border-slate-200 px-2 py-1 rounded-lg w-full text-sm shadow-sm focus:ring-2 outline-none"
                      />
                    ) : (
                      <span className="text-slate-700">{E.Role}</span>
                    )}
                  </td>

                  {/* Editable Status */}
                  <td className="px-6 py-4">
                    {editId === E.id ? (
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
                          E.status === "Active"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {E.status}
                      </span>
                    )}
                  </td>

                  {/* Actions */}
                  <td className="px-6 py-4 text-center">
                    {editId === E.id ? (
                      <div className="flex justify-center gap-2">
                        <button
                          onClick={() => saveEdit(E.id)}
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
                          onClick={() => startEdit(E)}
                          className="hover:text-yellow-600 transition"
                        >
                          <FaEdit />
                        </button>
                        <button
                          onClick={() => deleteEmployee(E.id)}
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

          {/* Pagination */}
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

export default Employee;
