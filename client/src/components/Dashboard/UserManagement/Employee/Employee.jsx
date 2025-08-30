import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { FaSearch, FaEye, FaEdit, FaTrash, FaPlus } from "react-icons/fa";

function Employee() {
  const [searchTerm, setSearchTerm] = useState("");
  const [Employee, setEmployee] = useState([
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
       {
      id: "M007",
      name: "Aditi Singh",
      email: "aditi.singh@example.com",
      type: "Finance Manager",
      status: "Active",
    },
       {
      id: "M008",
      name: "Aditi Singh",
      email: "aditi.singh@example.com",
      type: "Finance Manager",
      status: "Active",
    },
       {
      id: "M009",
      name: "Aditi Singh",
      email: "aditi.singh@example.com",
      type: "Finance Manager",
      status: "Active",
    },
  ]);

    const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);   // editable 

    const [editData, setEditData] = useState({ name: "", type: "", status: "" });
// 🔹 Filter managers by search
  const filteredEmployee = Employee.filter(
    (E) =>
      E.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      E.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      E.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      E.status.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  // 🔹 Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const EmployeePerPage = 5;
  
  // 🔹 Slice data for pagination
  const indexOfLast = currentPage * EmployeePerPage;
  const indexOfFirst = indexOfLast - EmployeePerPage;
  const currentEmployee = filteredEmployee.slice(indexOfFirst, indexOfLast);
 const totalPages = Math.ceil(filteredEmployee.length / EmployeePerPage);

  const addEmployee = (newEmployee) => {
    setEmployee([...Employee, newEmployee]);
  };

  const deleteEmployee = (id) => {
    if (window.confirm("Are you sure you want to delete this manager?")) {
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

  const deleteEmploye = (id) => {
    if (window.confirm("Are you sure you want to delete this Employee?")) {
      setEmployee(Employee.filter((E) => E.id !== id));
    }
  };
  const navigate = useNavigate();


  return (
    <>
      <div className=" p-5">
         {/* Task Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-13 border-l-4 border-blue-500">
          <h2 className="text-xl font-semibold text-gray-700">Total Employees</h2>
          <p className="text-4xl font-bold text-blue-600 mt-2"></p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-13 border-l-4 border-orange-600">
          <h2 className="text-xl font-semibold text-gray-700">Pending Tasks</h2>
          <p className="text-4xl font-bold text-yellow-600 mt-2"></p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-13 border-l-4 border-green-500">
          <h2 className="text-xl font-semibold text-gray-700">Active Employees</h2>
          <p className="text-4xl font-bold text-green-600 mt-2"></p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-13 border-l-4 border-red-700">
          <h2 className="text-xl font-semibold text-gray-700">InActive Employees 2 </h2>
          <p className="text-4xl font-bold text-purple-600 mt-2"></p>
        </div>
      </div>
        {/* tap bar  */}

        <div className="flex justify-between items-center mb-2">
          {/* Search bar */}
          <div className="flex items-center bg-white px-4 py-2 rounded-full w-80 shadow-md">
            <FaSearch className="text-slate-400 mr-2" />
            <input
              type="text"
              placeholder="Search by ID, Name, Type or Status"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="outline-none w-full text-sm bg-transparent text-slate-700"
            />
          </div>

          {/* Add new  Employee */}
          <button
            onClick={() => navigate("/add-manager")}

            className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 transition text-white px-5 py-2 rounded-full shadow-md"
          >
            <FaPlus />
            <span className="hidden sm:inline">Add Employee</span>
          </button>
        </div>

        {/* table card */}
        <div className=" bg-white shadow-lg  rounded-xl overflow-hidden">
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
                <td className="px-6 py-4 text-slate-800 font-medium">{E.id}</td>

                {/* Editable Name */}
                <td className="px-6 py-4">
                  {editId === E.id ? (
                    <input
                      type="text"
                      value={editData.name}
                      onChange={(e) =>
                        setEditData({ ...editData, name: e.target.value })
                      }
                      className="border border-slate-200 px-2 py-1 rounded-lg w-full text-sm shadow-sm focus:ring-2 focus:ring-indigo-500"
                    />
                  ) : (
                    <span className="text-slate-700">{E.name}</span>
                  )}
                </td>

                {/* Email */}
                <td className="px-6 py-4 text-slate-500">{E.email}</td>

                {/* Editable Type */}
                <td className="px-6 py-4">
                  {editId === E.id ? (
                    <input
                      type="text"
                      value={editData.type}
                      onChange={(e) =>
                        setEditData({ ...editData, type: e.target.value })
                      }
                      className="border border-slate-200 px-2 py-1 rounded-lg w-full text-sm shadow-sm focus:ring-2 focus:ring-indigo-500"
                    />
                  ) : (
                    <span className="text-slate-700">{E.type}</span>
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
                      className="px-3 py-2 w-full text-sm rounded-xl shadow-md bg-white/70 backdrop-blur-sm focus:outline-none focus:ring-2  transition-all duration-300"

                    >
                      <option
                      className="px-3 py-2 w-full text-sm rounded-xl shadow-md bg-white/70 backdrop-blur-sm focus:outline-none focus:ring-2  transition-all duration-300"
                      
                      value="Active">Active</option>
                      <option 
                      className="px-3 py-2 w-full text-sm rounded-xl shadow-md bg-white/70 backdrop-blur-sm focus:outline-none focus:ring-2  transition-all duration-300"
                      
                      value="Inactive">Inactive</option>
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
                        className="bg-indigo-300 hover:bg-indigo-700 text-white p-2 rounded-full shadow-sm"
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
                        onClick={() => deleteEmploye(E.id)}
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
        <div className="flex items-center gap-7 px-5 py-5 bg-slate-50">
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

        
      </div>
    </>
  );
}

export default Employee;
