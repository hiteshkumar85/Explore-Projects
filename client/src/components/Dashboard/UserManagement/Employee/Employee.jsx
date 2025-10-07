import { FaBed, FaUsers } from "react-icons/fa";
import { BsLightningChargeFill } from "react-icons/bs";
import { MdDangerous } from "react-icons/md";
import { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import { useNavigate } from "react-router-dom";

const Employee = () => {

  const chartRef = useRef(null);
  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");
    new Chart(ctx, {
      type: "bar",
      data: {
        labels: [
          "Sarah Johnson",
          "Michael Chen",
          "Maria Rodriguez",
          "David Kim",
          "James Wilson",
        ],
        datasets: [
          {
            label: "Performance",
            data: [95, 85, 80, 70, 60],
            backgroundColor: [
              "#6366f1",
              "#06b6d4",
              "#10b981",
              "#f59e0b",
              "#ef4444",
            ],
            borderRadius: 8,
          },
        ],
      },
      options: {
        plugins: { legend: { display: false } },
        scales: {
          y: { beginAtZero: true, ticks: { color: "#222" } },
          x: { ticks: { color: "#222" } },
        },
      },
    });
  }, []);

  const navigate = useNavigate();
  const employees = [
    { id: "EMP-001", name: "Alice Johnson", role: "Developer", email: "sarahj@company.com", lastLogin: "Today, 09:24 AM", status: "Active" },
    { id: "EMP-002", name: "Bob Smith", role: "Designer", email: "sarahj@company.com", lastLogin: "Yesterday, 3:45 PM", status: "Active" },
    { id: "EMP-003", name: "Charlie Brown", role: "Product Manager", email: "sarahj@company.com", lastLogin: "2 days ago", status: "On Leave" },
    { id: "EMP-004", name: "David Wilson", role: "QA Engineer", email: "sarahj@company.com", lastLogin: "Today, 11:30 AM", status: "Active" },
    { id: "EMP-005", name: "Eva Green", role: "DevOps Engineer", email: "sarahj@company.com", lastLogin: "3 days ago", status: "Suspended" },
    { id: "EMP-006", name: "Frank Miller", role: "Business Analyst", email: "sarahj@company.com", lastLogin: "5 days ago", status: "Active" },
    { id: "EMP-007", name: "Grace Lee", role: "HR Manager", email: "sarahj@company.com", lastLogin: "Today, 08:15 AM", status: "Active" },
    { id: "EMP-008", name: "Hannah Davis", role: "Marketing Specialist", email: "sarahj@company.com", lastLogin: "Yesterday, 4:20 PM", status: "On Leave" },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const employeesPerPage = 5;

  // Filter employees by id, name, role, status
  const filteredEmployees = employees.filter((emp) =>
    [emp.id, emp.name, emp.role, emp.status]
      .some((field) => field.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredEmployees.length / employeesPerPage);
  const startIndex = (currentPage - 1) * employeesPerPage;
  const currentEmployees = filteredEmployees.slice(
    startIndex,
    startIndex + employeesPerPage
  );

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className='overflow-y-auto no-scrollbar h-full'>
      <h1 className='text-3xl font-bold mb-6'>Employee Dashboard</h1>
      {/* Card */}
      <div className='grid grid-cols-1 md:grid-cols-4 gap-6 mb-6'>
        <div className='bg-white p-4 rounded-xl shadow cursor-pointer hover:shadow-xl transition-shadow duration-200 hover:-translate-y-0.5 ease-in-out flex flex-col items-center justify-center h-40 border-l-4 border-blue-500'>
          <FaUsers className='h-10 w-10 mb-2 text-blue-500' />
          <p className="font-semibold">Total employees</p> 
          <h1 className="text-2xl font-bold text-blue-500">100</h1>
        </div>
        <div className='bg-white p-4 rounded-xl shadow cursor-pointer hover:shadow-xl transition-shadow duration-200 hover:-translate-y-0.5 ease-in-out flex flex-col items-center justify-center h-40 border-l-4 border-green-500'>
          <BsLightningChargeFill className='h-10 w-10 mb-2 text-green-500' />
          <p className="font-semibold">Active</p>
          <h1 className="text-2xl font-bold text-green-500">95</h1>
        </div>
        <div className='bg-white p-4 rounded-xl shadow cursor-pointer hover:shadow-xl transition-shadow duration-200 hover:-translate-y-0.5 ease-in-out flex flex-col items-center justify-center h-40 border-l-4 border-yellow-500'>
          <FaBed className='h-10 w-10 mb-2 text-yellow-500' />
          <p className="font-semibold">On leave</p>
          <h1 className="text-2xl font-bold text-yellow-500">4</h1>
        </div>
        <div className='bg-white p-4 rounded-xl shadow cursor-pointer hover:shadow-xl transition-shadow duration-200 hover:-translate-y-0.5 ease-in-out flex flex-col items-center justify-center h-40 border-l-4 border-red-500'>
          <MdDangerous className='h-10 w-10 mb-2 text-red-500' />
          <p className="font-semibold">Suspended</p>
          <h1 className="text-2xl font-bold text-red-500">1</h1> 
        </div>
      </div>
      {/* Chart  */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition-shadow duration-200 hover:-translate-y-0.5">
          <h2 className="text-lg font-semibold mb-4">Top 5 Performers</h2>
          <canvas ref={chartRef} className="w-full h-60"></canvas>
        </div>
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition-shadow duration-200 hover:-translate-y-0.5 flex flex-col items-center justify-center">
          <h2 className="text-lg font-semibold mb-6">Employee of the Company</h2>
          <img src="https://i.pravatar.cc/100" alt="Employee" className="w-24 h-24 rounded-full border-4 border-blue-500 mb-4" />
          <h3 className="text-xl font-bold">Sarah Johnson</h3>
          <p className="text-sm text-gray-500">Senior Developer</p>
          <span className="bg-green-500 text-white text-xs px-3 py-1 rounded-full mt-2">Active</span>
          <p className="text-gray-600 text-center mt-3 text-sm">
            Recognized for outstanding performance and dedication to the team.
          </p>
        </div>
      </div>
      {/* Table  */}
      <div className="bg-white rounded-xl shadow p-4">
        <div className="flex justify-between items-center mb-3"> 
          <h1 className="text-lg font-semibold">All Employees</h1>
          <div className="flex gap-2">
            <input type="text"
              placeholder="Search employees by ID, name, role, status" 
              className="px-3 py-2 rounded-lg text-sm border border-gray-300 outline-none w-74" 
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
            />
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg" onClick={() => navigate('/dashboard/add-employee')}>Add Employee</button>
          </div>
        </div>
        <hr className="mb-2"/>
        <table className="w-full text-center border-collapse">
          <thead className="text-gray-500 text-sm border-b border-gray-300">
            <tr>
              <th className="py-3">ID</th>
              <th className="py-3">Employee</th>
              <th className="py-3">Role</th>
              <th className="py-3">Last Login</th>
              <th className="py-3">Status</th>
              <th className="py-3">Actions</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {currentEmployees.length > 0 ? currentEmployees.map((emp) => (
              <tr key={emp.id} className="border-b border-gray-200">
                <td className="py-3 text-blue-500">{emp.id}</td>
                <td className="py-3 font-semibold">
                  {emp.name}<br />
                  <span className="text-gray-500 text-xs">{emp.email}</span>
                </td>
                <td className="py-3">{emp.role}</td>
                <td className="py-3">{emp.lastLogin}</td>
                <td className="py-3">
                  <span className={`px-2 py-1 rounded-full text-xs text-white ${emp.status === 'Active' ? 'bg-green-500' : emp.status === 'On Leave' ? 'bg-yellow-500' : 'bg-red-500'}`}>{emp.status}</span>
                </td>
                <td className="py-3 flex gap-2 justify-center">
                  <button className="text-yellow-500">✏️</button>
                  <button className="text-blue-500" onClick={() => navigate('/dashboard/employeedetails')}>👁️</button>
                  <button className="text-red-500">🗑️</button>
                </td>
              </tr>
            )) : (
              <tr>
                <td colSpan="6" className="py-4 text-gray-500">No employees found.</td>
              </tr>
            )}
          </tbody>
        </table>
        {filteredEmployees.length > employeesPerPage &&
          <div className="flex justify-between items-center mt-4 text-gray-500 text-sm">
            <p>Page {currentPage} of {totalPages}</p>
            <div className="flex gap-2">
              <button
                className="px-5 py-2 bg-red-500 text-white rounded-sm"
                onClick={handlePrevPage}
                disabled={currentPage === 1}
              >
                Prev</button>
              <button
                className="px-5 py-2 bg-blue-500 text-white rounded-sm "
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
              >
                Next</button>
            </div>
          </div>
        }
      </div>
    </div >
  )
}

export default Employee
