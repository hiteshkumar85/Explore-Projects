import { useState } from "react";
import { FaEdit, FaTrash, FaClock } from "react-icons/fa";

export default function EmployeeManagement() {
  const [employees, setEmployees] = useState([
    { id: 201, name: "Rahul Singh", role: "Developer", email: "rahul@company.com", loginTime: "09:00" },
    { id: 202, name: "Sneha Kapoor", role: "Designer", email: "sneha@company.com", loginTime: "14:30" },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  const [formData, setFormData] = useState({
    id: "",
    name: "",
    role: "",
    email: "",
    password: "",
    loginTime: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAdd = () => {
    setFormData({ id: "", name: "", role: "", email: "", password: "", loginTime: "" });
    setIsEditing(false);
    setShowForm(true);
  };

  const handleEdit = (employee) => {
    setFormData(employee);
    setCurrentId(employee.id);
    setIsEditing(true);
    setShowForm(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      setEmployees(employees.map((emp) => (emp.id === currentId ? { ...emp, ...formData } : emp)));
    } else {
      setEmployees([
        ...employees,
        { ...formData, id: employees.length ? employees[employees.length - 1].id + 1 : 201 },
      ]);
    }
    setShowForm(false);
    setFormData({ id: "", name: "", role: "", email: "", password: "", loginTime: "" });
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      setEmployees(employees.filter((emp) => emp.id !== id));
    }
  };

  const getStatus = (loginTime) => {
    if (!loginTime) return "Offline";
    const now = new Date();
    const [hours, minutes] = loginTime.split(":").map(Number);
    const loginDate = new Date();
    loginDate.setHours(hours, minutes, 0);

    const diff = (now - loginDate) / (1000 * 60);
    return diff < 120 ? "Online" : "Offline";
  };

  const formatTime = (time) => {
    if (!time) return "N/A";
    let [hours, minutes] = time.split(":").map(Number);
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")} ${ampm}`;
  };

  return (
    <div className="p-6">
      {/* Add Button */}
      <button
        onClick={handleAdd}
        className="px-5 py-2 mb-6 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition text-lg"
      >
        Add New Employee
      </button>

      {/* Table */}
      <div className="overflow-hidden shadow-lg rounded-xl border border-gray-200">
        <table className="w-full border-collapse">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="p-3 text-left">S.No.</th>
              <th className="p-3 text-left">Employee ID</th>
              <th className="p-3 text-left">Role</th>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Login Time</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp, index) => (
              <tr
                key={emp.id}
                className={`${index % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-gray-100 transition`}
              >
                <td className="p-3">{index + 1}</td>
                <td className="p-3 font-semibold">#{emp.id}</td>
                <td className="p-3">{emp.role}</td>
                <td className="p-3">{emp.name}</td>
                <td className="p-3">{emp.email}</td>
                <td className="p-3 flex items-center gap-1">
                  <FaClock className="text-gray-500" /> {formatTime(emp.loginTime)}
                </td>
                <td className="p-3">
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      getStatus(emp.loginTime) === "Online"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {getStatus(emp.loginTime)}
                  </span>
                </td>
                <td className="p-3 flex gap-2">
                  {/* Edit Icon */}
                  <button
                    onClick={() => handleEdit(emp)}
                    className="p-2 bg-yellow-100 text-yellow-700 rounded hover:bg-yellow-200 hover:text-yellow-800 transition shadow-sm"
                    title="Edit Employee"
                  >
                    <FaEdit />
                  </button>

                  {/* Delete Icon */}
                  <button
                    onClick={() => handleDelete(emp.id)}
                    className="p-2 bg-red-100 text-red-700 rounded hover:bg-red-200 hover:text-red-800 transition shadow-sm"
                    title="Delete Employee"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal Form */}
      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
          <div className="bg-white p-6 rounded-xl w-96 shadow-xl">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              {isEditing ? "Edit Employee" : "Add New Employee"}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              {!isEditing && (
                <div>
                  <label className="block text-sm font-medium text-gray-700">Employee ID (Auto)</label>
                  <input
                    type="text"
                    value={employees.length ? employees[employees.length - 1].id + 1 : 201}
                    disabled
                    className="w-full border p-2 rounded mt-1 bg-gray-100 cursor-not-allowed"
                  />
                </div>
              )}
              <div>
                <label className="block text-sm font-medium text-gray-700">Role</label>
                <input
                  type="text"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="w-full border p-2 rounded mt-1 focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border p-2 rounded mt-1 focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border p-2 rounded mt-1 focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              {!isEditing && (
                <div>
                  <label className="block text-sm font-medium text-gray-700">Password</label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full border p-2 rounded mt-1 focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              )}
              <div>
                <label className="block text-sm font-medium text-gray-700">Login Time</label>
                <input
                  type="time"
                  name="loginTime"
                  value={formData.loginTime}
                  onChange={handleChange}
                  className="w-full border p-2 rounded mt-1 focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex justify-between mt-4">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                >
                  {isEditing ? "Update Employee" : "Save Employee"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
