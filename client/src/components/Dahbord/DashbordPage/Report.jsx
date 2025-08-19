import { useState } from "react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { FaDownload, FaTrashAlt, FaEye } from "react-icons/fa";

export default function Reports() {
  // Dummy Data for Reports
  const initialReports = [
    { id: "RPT-001", name: "Sales Q1 2025", type: "Sales", date: "2025-03-31" },
    { id: "RPT-002", name: "Employee Performance", type: "HR", date: "2025-06-30" },
    { id: "RPT-003", name: "Project Progress", type: "Project", date: "2025-07-15" },
  ];

  const [reports, setReports] = useState(initialReports);

  // Chart Data
  const salesData = [
    { month: "Jan", revenue: 4000, expenses: 2400 },
    { month: "Feb", revenue: 3000, expenses: 1398 },
    { month: "Mar", revenue: 2000, expenses: 9800 },
    { month: "Apr", revenue: 2780, expenses: 3908 },
    { month: "May", revenue: 1890, expenses: 4800 },
  ];

  const pieData = [
    { name: "Completed", value: 70 },
    { name: "Pending", value: 20 },
    { name: "Delayed", value: 10 },
  ];

  const colors = ["#4CAF50", "#FF9800", "#F44336"];

  // Handlers
  const handleDelete = (id) => {
    setReports(reports.filter((r) => r.id !== id));
  };

  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <h2 className="text-2xl font-bold mb-4">📑 Reports & Analytics</h2>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Bar Chart */}
        <div className="bg-white rounded-xl shadow-md p-4">
          <h3 className="text-lg font-semibold mb-2">Revenue vs Expenses</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={salesData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="revenue" fill="#4CAF50" />
              <Bar dataKey="expenses" fill="#F44336" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="bg-white rounded-xl shadow-md p-4">
          <h3 className="text-lg font-semibold mb-2">Project Status</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                outerRadius={80}
                fill="#8884d8"
                label
              >
                {pieData.map((entry, index) => (
                  <Cell key={index} fill={colors[index % colors.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Report List */}
      <div className="bg-white rounded-xl shadow-md p-4">
        <h3 className="text-lg font-semibold mb-4">Report Management</h3>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 text-left">ID</th>
              <th className="p-2 text-left">Name</th>
              <th className="p-2 text-left">Type</th>
              <th className="p-2 text-left">Date</th>
              <th className="p-2 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report) => (
              <tr key={report.id} className="border-b hover:bg-gray-50">
                <td className="p-2">{report.id}</td>
                <td className="p-2">{report.name}</td>
                <td className="p-2">{report.type}</td>
                <td className="p-2">{report.date}</td>
                <td className="p-2 flex justify-center space-x-3">
                  <button className="text-blue-500 hover:text-blue-700">
                    <FaEye />
                  </button>
                  <button className="text-green-500 hover:text-green-700">
                    <FaDownload />
                  </button>
                  <button
                    className="text-red-500 hover:text-red-700"
                    onClick={() => handleDelete(report.id)}
                  >
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}








