// Employee dashbord / interface / 

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch, FaEye, FaCode, FaChevronDown } from "react-icons/fa";

function ClientRating() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("All");
  const [isOpen, setIsOpen] = useState(false);
  const [Employee] = useState([
    {
      id: "T001",
      Taskname: "Basics ui design ",
      Deadline: "2023-10-28",
      status: "Incoming",
    },
    {
      id: "T002",
      Taskname: "form management level ",
      Deadline: "2025-10-28",
      status: "Pending",
    },
    {
      id: "T003",
      Taskname: "template design",
      Deadline: "2024-03-18",
      status: "Completed",
    },
    {
      id: "T004",
      Taskname: "login and sigup page create",
      Deadline: "2023-08-08",
      status: "Incoming",
    },
    {
      id: "T005",
      Taskname: "Dev ooPs management ",
      Deadline: "2024-09-28",
      status: "Completed",
    },
    {
      id: "T006",
      Taskname: "Create the angular frame",
      Deadline: "2024-11-01",
      status: "Active",
    },
  ]);

  //  Filter  Search function
  const filteredEmployee = Employee.filter(
    (E) =>
      (filter === "All" || E.status === filter) &&
      (E.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        E.Projectname.toLowerCase().includes(searchTerm.toLowerCase()) ||
        E.Deadline.toLowerCase().includes(searchTerm.toLowerCase()))
  );

//  next or previous function section 
  
  const [currentPage, setCurrentPage] = useState(1);
  const EmployeePerPage = 5;
  const indexOfLast = currentPage * EmployeePerPage;
  const indexOfFirst = indexOfLast - EmployeePerPage;
  const currentEmployee = filteredEmployee.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredEmployee.length / EmployeePerPage);

  //  Status Colors
  const statusColors = {
    Active: "bg-green-100 text-green-700",
    Inactive: "bg-gray-200 text-gray-600",
    Pending: "bg-yellow-100 text-yellow-700",
    Completed: "bg-blue-100 text-blue-700",
    Incoming: "bg-purple-100 text-purple-700",
  };

  const navigate = useNavigate();

  //  Dropdown 
  const filterOptions = ["All", "Active", "Incoming", "Completed", "Pending"];

  return (
    <div className="p-4">
      {/*   Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-600">
          <h2 className="text-lg font-semibold text-gray-700 normal-case">
            Completed Task
          </h2>
          <p className="text-3xl font-bold text-blue-500 mt-2">
            {Employee.filter((E) => E.status === "Completed").length}
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-600">
          <h2 className="text-lg font-semibold text-gray-700 normal-case">
            Active Task
          </h2>
          <p className="text-3xl font-bold text-green-500 mt-2">
            {Employee.filter((E) => E.status === "Active").length}
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-yellow-500">
          <h2 className="text-lg font-semibold text-gray-700 normal-case">
            Pending Task
          </h2>
          <p className="text-3xl font-bold text-yellow-500 mt-2 ">
            {Employee.filter((E) => E.status === "Pending").length}
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-600">
          <h2 className="text-lg font-semibold text-gray-700 normal-case">
            Incoming Task
          </h2>
          <p className="text-3xl font-bold text-purple-600 mt-2">
            {Employee.filter((E) => E.status === "Incoming").length}
          </p>
        </div>
      </div>

      {/*   Filter Bar */}
      <div className="flex justify-between items-center mb-4 gap-3">
        {/* Search Bar Left*/}
        <div className="flex items-center bg-white px-4 py-2 rounded-full w-80 shadow-md">
          <FaSearch className="text-slate-400 mr-2" />
          <input
            type="text"
            placeholder="Search by ID, Name "
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="outline-none w-full text-sm bg-transparent text-slate-700"
          />
        </div>

        {/*   Filter Dropdown */}
        <div className="relative w-52">
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-between bg-white px-4 py-2 rounded-full shadow-md cursor-pointer select-none"
          >
            <span className="text-sm text-slate-700">{filter}</span>
            <FaChevronDown
              className={`text-slate-400 transform transition-transform ${
                isOpen ? "rotate-180" : "rotate-0"
              }`}
            />
          </div>

          {/* Options */}
          {isOpen && (
            <div className="absolute mt-2 w-full bg-white rounded-lg shadow-lg z-10 overflow-hidden">
              {filterOptions.map((option) => (
                <div
                  key={option}
                  onClick={() => {
                    setFilter(option);
                    setIsOpen(false);
                  }}
                  className={`px-4 py-2 text-sm cursor-pointer hover:bg-indigo-50 ${
                    filter === option
                      ? "bg-indigo-100 font-medium text-indigo-700"
                      : "text-slate-700"
                  }`}
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/*  Table */}
      <div className="bg-white shadow-lg rounded-xl overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-slate-100 text-sm text-slate-600">
              <th className="px-6 py-4 text-left font-semibold uppercase">
                S.no
              </th>
              <th className="px-6 py-4 text-left font-semibold uppercase">
                Task ID
              </th>
              <th className="px-6 py-4 text-left font-semibold uppercase">
                Task name
              </th>
              <th className="px-6 py-4 text-left font-semibold uppercase">
                Deadline
              </th>
              <th className="px-6 py-4 text-left font-semibold uppercase">
                Status
              </th>
              <th className="px-6 py-4 text-left font-semibold uppercase">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {currentEmployee.map((E, index) => (
              <tr key={E.id} className="hover:bg-slate-50 transition">
                <td className="px-6 py-4 text-slate-800 font-medium">
                  {index + 1}
                </td>
                <td className="px-6 py-4">{E.id}</td>
                <td className="px-6 py-4 ">{E.Taskname}</td>
                <td className="px-6 py-4 text-slate-500">{E.Deadline}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      statusColors[E.status] || "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {E.status}
                  </span>
                </td>
                {/* Actions */}
                <td className="px-6 py-4 text-center">
                  <div className="flex justify-center gap-4 text-slate-500">
                    <button
                      onClick={() => navigate("/managerdetails")}
                      className="hover:text-green-600 transition"
                    >
                      <FaEye />
                    </button>
                    <button
                      onClick={() =>
                        window.open("https://github.com/", "_blank")
                      }
                      className="hover:text-gray-700 transition"
                    >
                      <FaCode />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>


{/* next or  Previous section */}

        <div className="flex justify-between items-center px-5 py-5 bg-slate-50">
          {/* PageInfo Left */}
          <span className="text-sm text-slate-600">
            Page {currentPage} of {totalPages}
          </span>

          {/* Buttons Right */}
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
  );
}

export default ClientRating;
