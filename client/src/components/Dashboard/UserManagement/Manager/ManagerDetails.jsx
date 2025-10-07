import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  RadialBarChart,
  RadialBar,
  Legend,
} from "recharts";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function EmployeeDashboard() {
  const performanceData = [
    { month: "Jan", value: 70 },
    { month: "Feb", value: 75 },
    { month: "Mar", value: 80 },
    { month: "Apr", value: 78 },
    { month: "May", value: 85 },
    { month: "Jun", value: 83 },
    { month: "Jul", value: 88 },
    { month: "Aug", value: 90 },
    { month: "Sep", value: 92 },
    { month: "Oct", value: 95 },
    { month: "Nov", value: 91 },
    { month: "Dec", value: 87 },
  ];

  const taskDistribution = [
    { name: "Completed", value: 75, color: "#22c55e" },
    { name: "Active", value: 15, color: "#3b82f6" },
    { name: "Pending", value: 10, color: "#ef4444" },
  ];

  const skills = [
    { name: "Leadership", value: 92, color: "bg-blue-500" },
    { name: "Communication", value: 88, color: "bg-green-500" },
    { name: "Technical Skills", value: 76, color: "bg-amber-500" },
    { name: "Teamwork", value: 85, color: "bg-purple-500" },
  ];

  const activities = [
    { task: "Completed Q1 Marketing Report", time: "2 days ago", color: "bg-blue-500" },
    { task: "Team Meeting - Campaign Strategy", time: "5 days ago", color: "bg-green-500" },
    { task: "Achieved monthly target early", time: "1 week ago", color: "bg-amber-500" },
    { task: "Completed leadership training", time: "2 weeks ago", color: "bg-purple-500" },
  ];

  const currentTasks = [
    { task: "Client Presentation", status: "Due Tomorrow", color: "text-blue-600 bg-blue-100" },
    { task: "Budget Planning", status: "In Progress", color: "text-green-600 bg-green-100" },
    { task: "Team Training", status: "Next Week", color: "text-amber-600 bg-amber-100" },
  ];

  // Performance Score for radial chart
  const score = [{ name: "Performance", value: 87, fill: "#22c55e" }];

  return (
    <div className="w-full overflow-y-auto overflow-x-hidden">
      <div className="p-6 md:p-8 max-w-[1600px] mx-auto">
        <h1 className="text-2xl font-bold mb-8">Employee Performance Dashboard</h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* LEFT PROFILE CARD */}
          <div className="lg:col-span-3 bg-white rounded-xl shadow-lg p-6 sticky top-8 h-fit">
            <div className="flex flex-col items-center">
              <img
                src="https://i.pravatar.cc/150?img=32"
                alt="profile"
                className="w-28 h-28 rounded-full mb-4 border-4 border-gray-200 shadow"
              />
              <h2 className="text-lg font-bold">Sarah Johnson</h2>
              <p className="text-sm text-gray-600">Senior Marketing Manager</p>
              <p className="text-xs text-gray-400">Employee ID: EMP-2023-0015</p>
            </div>

            <div className="mt-6 text-sm space-y-2">
              <p><strong>Department:</strong> Marketing</p>
              <p><strong>Join Date:</strong> April 15, 2020</p>
              <p>
                <strong>Status:</strong>{" "}
                <span className="text-green-600 font-semibold">Active</span>
              </p>
            </div>

            <div className="mt-6">
              <h3 className="font-semibold">Contact Information</h3>
              <p className="flex items-center text-sm mt-2">
                <FaEnvelope className="mr-2" /> sarah.johnson@company.com
              </p>
              <p className="flex items-center text-sm mt-1">
                <FaPhone className="mr-2" /> +1 (925) 124-4567
              </p>
              <p className="flex items-center text-sm mt-1">
                <FaMapMarkerAlt className="mr-2" /> San Francisco, CA
              </p>
            </div>

            <div className="mt-6">
              <h3 className="font-semibold">Qualifications</h3>
              <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                <li>MBA - Stanford University</li>
                <li>Digital Marketing Certification</li>
                <li>Google Analytics Certified</li>
              </ul>
            </div>
          </div>

          {/* MAIN CONTENT */}
          <div className="lg:col-span-9 flex flex-col gap-8">
            {/* TOP CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow text-center">
                <p className="text-2xl font-bold text-green-600">156</p>
                <p className="text-gray-600">Completed Tasks</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow text-center">
                <p className="text-2xl font-bold text-blue-600">24</p>
                <p className="text-gray-600">Active Tasks</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow text-center">
                <p className="text-2xl font-bold text-red-600">7</p>
                <p className="text-gray-600">Pending Tasks</p>
              </div>
            </div>

            {/* PERFORMANCE & TASK CHARTS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Performance Score Radial Chart */}
              <div className="bg-white p-6 rounded-lg shadow flex flex-col items-center">
                <h3 className="font-semibold mb-4">Performance Score</h3>
                <ResponsiveContainer width="100%" height={220}>
                  <RadialBarChart
                    cx="50%"
                    cy="50%"
                    innerRadius="60%"
                    outerRadius="100%"
                    barSize={18}
                    data={score}
                    startAngle={90}
                    endAngle={-270}
                  >
                    <RadialBar minAngle={15} clockWise dataKey="value" cornerRadius={50} />
                    <text
                      x="50%"
                      y="50%"
                      textAnchor="middle"
                      dominantBaseline="middle"
                      className="text-xl font-bold fill-green-600"
                    >
                      87%
                    </text>
                  </RadialBarChart>
                </ResponsiveContainer>
                <p className="text-sm text-gray-500">Excellent Performance</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-semibold mb-4">Task Distribution</h3>
                <ResponsiveContainer width="100%" height={220}>
                  <PieChart>
                    <Pie data={taskDistribution} dataKey="value" outerRadius={90} label>
                      {taskDistribution.map((entry, index) => (
                        <Cell key={index} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* BOTTOM SECTION */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Performance Trend */}
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-semibold mb-4">Monthly Performance Trend</h3>
                <ResponsiveContainer width="100%" height={280}>
                  <LineChart data={performanceData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              {/* Skills Assessment */}
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-semibold mb-4">Skills Assessment</h3>
                {skills.map((skill, index) => (
                  <div key={index} className="mb-5">
                    <p className="text-sm font-medium">
                      {skill.name} - {skill.value}%
                    </p>
                    <div className="w-full bg-gray-200 rounded h-3 mt-1">
                      <div
                        className={`${skill.color} h-3 rounded`}
                        style={{ width: `${skill.value}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Activity & Tasks */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Recent Activity */}
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-semibold mb-4">Recent Activity</h3>
                <ul className="space-y-3 text-sm">
                  {activities.map((act, i) => (
                    <li key={i} className="flex items-center">
                      <span className={`w-3 h-3 rounded-full ${act.color} mr-2`}></span>
                      <div>
                        <p>{act.task}</p>
                        <p className="text-xs text-gray-500">{act.time}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Current Tasks */}
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-semibold mb-4">Current Tasks</h3>
                <ul className="space-y-3 text-sm">
                  {currentTasks.map((task, i) => (
                    <li key={i} className="flex justify-between items-center">
                      <p>{task.task}</p>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${task.color}`}
                      >
                        {task.status}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



