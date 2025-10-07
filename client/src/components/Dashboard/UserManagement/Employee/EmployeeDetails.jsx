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
} from "recharts";
import { FaEnvelope, FaSpinner, FaTasks, FaWhatsapp } from "react-icons/fa";
import { FaPhoneFlip } from "react-icons/fa6"
import { GiSandsOfTime } from "react-icons/gi";

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

    const score = [{ name: "Performance", value: 87, fill: "#22c55e" }];

    return (
        <div className="w-full min-h-screen bg-gray-100">
            <div className="p-4 max-w-[1600px] mx-auto">
                <h1 className="text-2xl font-bold mb-2 sticky top-4">Employee Performance Dashboard</h1>

                {/* LAYOUT FIXED FOR LAPTOP */}
                <div className="flex min-h-[90vh]">

                    {/* LEFT PROFILE CARD */}
                    <div className="bg-white rounded-xl p-4 sticky top-14 h-[90vh] w-[30%] flex flex-col gap-1 shadow border border-gray-100 hover:shadow-xl transition-shadow duration-200">

                        {/* --- Profile Section --- */}
                        <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                            <div className="flex items-center gap-15">
                                <img
                                    src="https://i.pravatar.cc/150?img=32"
                                    alt="profile"
                                    className="w-28 h-28 rounded-full border-4 border-blue-100 shadow-md hover:scale-105 transition-transform duration-300"
                                />
                                <div>
                                    <h2 className="text-lg font-bold text-gray-900 leading-tight">
                                        Sarah Johnson
                                    </h2>
                                    <p className="text-sm text-gray-600">Web Developer</p>
                                    <p className="text-xs text-gray-500">EMP-2023-0015</p>
                                    <div className="flex items-center gap-2 mt-1">
                                        <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></span>
                                        <h3 className="text-xs bg-green-100 text-green-700 px-3 py-0.5 rounded-full font-medium">
                                            Active
                                        </h3>
                                    </div>
                                </div>
                            </div>

                            {/* Contact Icons */}
                            <div className="flex flex-col gap-3 text-lg">
                                <FaEnvelope className="text-xl text-blue-500 cursor-pointer hover:text-blue-700 transition-transform hover:scale-110" />
                                <FaPhoneFlip className="text-xl text-green-500 cursor-pointer hover:text-green-700 transition-transform hover:scale-110" />
                                <FaWhatsapp className="text-xl text-green-600 cursor-pointer hover:text-green-800 transition-transform hover:scale-110" />
                            </div>
                        </div>

                        {/* --- Employee Info --- */}
                        <div className="grid grid-cols-2 gap-x-3 gap-y-1 text-sm">
                            <p className="font-semibold text-gray-800">DOB:</p><span>01/01/2000</span>
                            <p className="font-semibold text-gray-800">Gender:</p><span>Male</span>
                            <p className="font-semibold text-gray-800">Address:</p><span>New York, USA</span>
                            <p className="font-semibold text-gray-800">Joining:</p><span>05/01/2025</span>
                            <p className="font-semibold text-gray-800">Salary:</p><span>₹35,000/year</span>
                        </div>

                        {/* --- Qualification --- */}
                        <div className="text-sm border-t border-gray-200 ">
                            <h3 className="font-semibold text-gray-900 mb-1 text-base">Qualification</h3>
                            <div className="grid grid-cols-2 gap-x-3 gap-y-1">
                                <p className="font-semibold text-gray-800">Degree:</p><span>B.Tech CSE</span>
                                <p className="font-semibold text-gray-800">Institute:</p>
                                <span>Kothiwal Institute of Technology</span>
                                <p className="font-semibold text-gray-800">Exp:</p><span>8 years</span>
                                <p className="font-semibold text-gray-800">Resume:</p>
                                <a href="#" className="text-blue-600 hover:underline">hitesh.pdf</a>
                            </div>
                        </div>

                        {/* --- Skills --- */}
                        <div className="text-sm border-t border-gray-200 pb-1">
                            <h3 className="font-semibold text-gray-900 mb-1 text-base">Skills</h3>
                            <ul className="flex flex-wrap gap-2">
                                {["React.js", "Node.js", "Express.js", "MongoDB"].map((skill) => (
                                    <li
                                        key={skill}
                                        className="bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 text-xs px-3 py-1 rounded-full font-medium shadow-sm hover:shadow-md transition"
                                    >
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* --- Bank Details --- */}
                        <div className="text-sm border-t border-gray-200">
                            <h3 className="font-semibold text-gray-900 mb-1 text-base">Bank Details</h3>
                            <div className="grid grid-cols-2 gap-x-3 gap-y-1">
                                <p className="font-semibold text-gray-800">Acc No:</p><span>XXXXXX1234</span>
                                <p className="font-semibold text-gray-800">IFSC:</p><span>SBIN0001234</span>
                                <p className="font-semibold text-gray-800">Bank:</p><span>State Bank of India</span>
                                <p className="font-semibold text-gray-800">Name:</p><span>Sarah Johnson</span>
                            </div>
                        </div>

                        {/* --- Edit Button --- */}
                        <div className="flex justify-end items-center border-t border-gray-200 pt-4">
                            <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-1.5 rounded-lg text-sm font-medium shadow-md hover:shadow-lg hover:scale-105 transition">
                                Edit Details
                            </button>
                        </div>
                    </div>

                    {/* RIGHT MAIN CONTENT */}
                    <div className="flex-1 ml-4 overflow-y-auto no-scrollbar h-[90vh]">

                        {/* SUMMARY CARDS */}
                        <div className="grid grid-cols-3 gap-4 mb-4">
                            <div className="bg-white p-4 rounded-xl shadow cursor-pointer flex flex-col items-center justify-center h-40 border-l-4 border-green-500 hover:shadow-lg transition-shadow duration-200 hover:scale-99">
                                <FaTasks className='h-9 w-9 mb-2 text-green-500' />
                                <p className="font-semibold">Completed Tasks</p>
                                <h1 className="text-2xl font-bold text-green-600">100</h1>
                            </div>
                            <div className="bg-white p-4 rounded-xl shadow cursor-pointer flex flex-col items-center justify-center h-40 border-l-4 border-blue-500 hover:shadow-lg transition-shadow duration-200 hover:scale-99">
                                <FaSpinner className='h-9 w-9 mb-2 text-blue-500' />
                                <p className="font-semibold">Active Tasks</p>
                                <h1 className="text-2xl font-bold text-blue-600">24</h1>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow cursor-pointer flex flex-col items-center justify-center h-40 border-l-4 border-orange-500 hover:shadow-lg transition-shadow duration-200 hover:scale-99">
                                <GiSandsOfTime className='h-9 w-9 mb-2 text-orange-500' />
                                <p className="font-semibold">Pending Tasks</p>
                                <h1 className="text-2xl font-bold text-orange-500">7</h1>
                            </div>
                        </div>

                        {/* PERFORMANCE & TASK CHARTS */}
                        <div className="grid grid-cols-2 gap-4 mb-4">
                            {/* Radial Performance Chart */}
                            <div className="bg-white p-4 rounded-lg flex flex-col items-center shadow hover:shadow-xl transition-shadow duration-200">
                                <h3 className="font-semibold text-2xl">Performance Score</h3>
                                <ResponsiveContainer width="100%" height={355}>
                                    <RadialBarChart
                                        cx="50%"
                                        cy="50%"
                                        innerRadius="40%"
                                        outerRadius="100%"
                                        barSize={20}
                                        data={score}
                                        startAngle={87}
                                        endAngle={-220}
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
                                <p className="text-lg text-gray-500">Excellent Performance</p>
                            </div>

                            {/* Task Distribution */}
                            <div className="bg-white p-4 rounded-lg shadow hover:shadow-xl transition-shadow duration-200">
                                <h3 className="font-semibold text-xl">Task Distribution</h3>
                                <ResponsiveContainer width="100%" height={370}>
                                    <PieChart>
                                        <Pie data={taskDistribution} dataKey="value" outerRadius={140} label>
                                            {taskDistribution.map((entry, index) => (
                                                <Cell key={index} fill={entry.color} />
                                            ))}
                                        </Pie>
                                    </PieChart>
                                </ResponsiveContainer>
                            </div>
                        </div>

                        {/* PERFORMANCE TREND + SKILLS */}
                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <div className="bg-white p-4 rounded-lg shadow hover:shadow-xl transition-shadow duration-200">
                                <h3 className="font-semibold">Monthly Performance Trend</h3>
                                <ResponsiveContainer width="100%" height={330}>
                                    <LineChart data={performanceData}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="month" />
                                        <YAxis />
                                        <Tooltip />
                                        <Line type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={2} />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>

                            <div className="bg-white p-4 rounded-lg shadow hover:shadow-xl transition-shadow duration-200">
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

                        {/* ACTIVITY + TASKS */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white p-4 rounded-lg shadow hover:shadow-xl transition-shadow duration-200">
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

                            <div className="bg-white p-4 rounded-lg shadow hover:shadow-xl transition-shadow duration-200">
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
