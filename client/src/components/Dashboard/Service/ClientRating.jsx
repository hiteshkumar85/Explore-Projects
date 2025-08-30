// import React, { useState } from 'react';

// const EmployeePage = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filter, setFilter] = useState('All'); // Can be 'All', 'Incoming', 'Pending', 'Completed', 'Active'

//   const tasks = [
//     { id: 'T001', name: 'Review Q3 Report', status: 'Incoming', assignee: 'John Doe', deadline: '2023-10-26' },
//     { id: 'T002', name: 'Develop new feature X', status: 'Active', assignee: 'Jane Smith', deadline: '2023-11-15' },
//     { id: 'T003', name: 'Prepare marketing presentation', status: 'Pending', assignee: 'Peter Jones', deadline: '2023-10-30' },
//     { id: 'T004', name: 'Onboard new hire', status: 'Completed', assignee: 'Sarah Brown', deadline: '2023-10-20' },
//     { id: 'T005', name: 'Bug fix for module A', status: 'Active', assignee: 'John Doe', deadline: '2023-10-28' },
//     { id: 'T006', name: 'Research competitor analysis', status: 'Incoming', assignee: 'Jane Smith', deadline: '2023-11-05' },
//     { id: 'T007', name: 'Update documentation', status: 'Pending', assignee: 'Peter Jones', deadline: '2023-11-01' },
//     { id: 'T008', name: 'Client meeting preparation', status: 'Active', assignee: 'Sarah Brown', deadline: '2023-10-27' },
//   ];

//   const filteredTasks = tasks.filter(task => {
//     const matchesSearch = task.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                           task.assignee.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                           task.id.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesFilter = filter === 'All' || task.status === filter;
//     return matchesSearch && matchesFilter;
//   });

//   const incomingTasksCount = tasks.filter(task => task.status === 'Incoming').length;
//   const pendingTasksCount = tasks.filter(task => task.status === 'Pending').length;
//   const completedTasksCount = tasks.filter(task => task.status === 'Completed').length;
//   const activeTasksCount = tasks.filter(task => task.status === 'Active').length;

//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 5;
//   const totalPages = Math.ceil(filteredTasks.length / itemsPerPage);

//   const paginatedTasks = filteredTasks.slice(
//     (currentPage - 1) * itemsPerPage,
//     currentPage * itemsPerPage
//   );

//   const handleView = (taskId) => {
//     alert(`Viewing Task: ${taskId}`);
//     // Implement your view logic here, e.g., navigate to a task detail page
//   };

//   const handleReport = (taskId) => {
//     alert(`Reporting on Task: ${taskId}`);
//     // Implement your report generation logic here
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-8">
//       <h1 className="text-3xl font-bold mb-8 text-gray-800">Employee Dashboard</h1>

//       {/* Task Summary Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//         <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
//           <h2 className="text-xl font-semibold text-gray-700">Incoming Tasks</h2>
//           <p className="text-4xl font-bold text-blue-600 mt-2">{incomingTasksCount}</p>
//         </div>
//         <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-yellow-500">
//           <h2 className="text-xl font-semibold text-gray-700">Pending Tasks</h2>
//           <p className="text-4xl font-bold text-yellow-600 mt-2">{pendingTasksCount}</p>
//         </div>
//         <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
//           <h2 className="text-xl font-semibold text-gray-700">Completed Tasks</h2>
//           <p className="text-4xl font-bold text-green-600 mt-2">{completedTasksCount}</p>
//         </div>
//         <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-500">
//           <h2 className="text-xl font-semibold text-gray-700">Active Tasks</h2>
//           <p className="text-4xl font-bold text-purple-600 mt-2">{activeTasksCount}</p>
//         </div>
//       </div>

//       {/* Task Table */}
//       <div className="bg-white rounded-lg shadow-md p-6">
//         <div className="flex flex-col md:flex-row justify-between items-center mb-6">
//           <div className="flex items-center space-x-4 mb-4 md:mb-0">
//             <input
//               type="text"
//               placeholder="Search tasks..."
//               className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//             <select
//               className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               value={filter}
//               onChange={(e) => {
//                 setFilter(e.target.value);
//                 setCurrentPage(1); // Reset to first page on filter change
//               }}
//             >
//               <option value="All">All Statuses</option>
//               <option value="Incoming">Incoming</option>
//               <option value="Pending">Pending</option>
//               <option value="Completed">Completed</option>
//               <option value="Active">Active</option>
//             </select>
//           </div>
//         </div>

//         <div className="overflow-x-auto">
//           <table className="min-w-full divide-y divide-gray-200">
//             <thead className="bg-gray-50">
//               <tr>
//                 <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   S.No
//                 </th>
//                 <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Task ID
//                 </th>
//                 <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Task Name
//                 </th>
//                 <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Status
//                 </th>
//                 <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Deadline
//                 </th>
//                    <th scope="col" className="px-6 py-3  text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   action
//                 </th>
//                 <th scope="col" className="relative px-6 py-3">
//                   <span className="sr-only">Actions</span>
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="bg-white divide-y divide-gray-200">
//               {paginatedTasks.length > 0 ? (
//                 paginatedTasks.map((task, index) => (
//                   <tr key={task.id}>
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       <div className="text-sm text-gray-900">{(currentPage - 1) * itemsPerPage + index + 1}</div>
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       <div className="text-sm font-medium text-gray-900">{task.id}</div>
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       <div className="text-sm text-gray-900">{task.name}</div>
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       <span
//                         className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
//                           task.status === 'Incoming'
//                             ? 'bg-blue-100 text-blue-800'
//                             : task.status === 'Pending'
//                             ? 'bg-yellow-100 text-yellow-800'
//                             : task.status === 'Completed'
//                             ? 'bg-green-100 text-green-800'
//                             : 'bg-purple-100 text-purple-800'
//                         }`}
//                       >
//                         {task.status}
//                       </span>
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                       {task.deadline}
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
//                       <button
//                         onClick={() => handleView(task.id)}
//                         className="text-indigo-600 hover:text-indigo-900 mr-4"
//                       >
//                         View
//                       </button>
//                       <button
//                         onClick={() => handleReport(task.id)}
//                         className="text-red-600 hover:text-red-900"
//                       >
//                         Report
//                       </button>
//                     </td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan="6" className="px-6 py-4 text-center text-gray-500">
//                     No tasks found.
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>

//         {/* Pagination */}
//         {filteredTasks.length > 0 && (
//           <div className="flex justify-end mt-6">
//             <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
//               <button
//                 onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
//                 disabled={currentPage === 1}
//                 className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
//               >
//                 <span className="sr-only">Previous</span>
//                 {/* Heroicon name: solid/chevron-left */}
//                 <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
//                   <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
//                 </svg>
//               </button>
//               {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
//                 <button
//                   key={page}
//                   onClick={() => setCurrentPage(page)}
//                   className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
//                     currentPage === page
//                       ? 'z-10 bg-blue-50 border-blue-500 text-blue-600'
//                       : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
//                   }`}
//                 >
//                   {page}
//                 </button>
//               ))}
//               <button
//                 onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
//                 disabled={currentPage === totalPages}
//                 className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
//               >
//                 <span className="sr-only">Next</span>
//                 {/* Heroicon name: solid/chevron-right */}
//                 <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
//                   <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
//                 </svg>
//               </button>
//             </nav>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };
// export default EmployeePage;



import React, { useState } from 'react';
import { FaEye, FaFileAlt } from 'react-icons/fa'; // Importing react-icons
// import { FaSearch, FaEye, FaEdit, FaTrash, FaPlus } from "react-icons/fa";


const EmployeePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('All');

  const tasks = [
    { id: 'T001', name: 'Review Q3 Report', status: 'Incoming', assignee: 'John Doe', deadline: '2023-10-26' },
    { id: 'T002', name: 'Develop new feature X', status: 'Active', assignee: 'Jane Smith', deadline: '2023-11-15' },
    { id: 'T003', name: 'Prepare marketing presentation', status: 'Pending', assignee: 'Peter Jones', deadline: '2023-10-30' },
    { id: 'T004', name: 'Onboard new hire', status: 'Completed', assignee: 'Sarah Brown', deadline: '2023-10-20' },
    { id: 'T005', name: 'Bug fix for module A', status: 'Active', assignee: 'John Doe', deadline: '2023-10-28' },
    { id: 'T006', name: 'Research competitor analysis', status: 'Incoming', assignee: 'Jane Smith', deadline: '2023-11-05' },
    { id: 'T007', name: 'Update documentation', status: 'Pending', assignee: 'Peter Jones', deadline: '2023-11-01' },
    { id: 'T008', name: 'Client meeting preparation', status: 'Active', assignee: 'Sarah Brown', deadline: '2023-10-27' },
  ];

  const filteredTasks = tasks.filter(task => {
    const matchesSearch = task.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          task.assignee.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          task.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === 'All' || task.status === filter;
    return matchesSearch && matchesFilter;
  });

  const incomingTasksCount = tasks.filter(task => task.status === 'Incoming').length;
  const pendingTasksCount = tasks.filter(task => task.status === 'Pending').length;
  const completedTasksCount = tasks.filter(task => task.status === 'Completed').length;
  const activeTasksCount = tasks.filter(task => task.status === 'Active').length;

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(filteredTasks.length / itemsPerPage);

  const paginatedTasks = filteredTasks.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleView = (taskId) => {
    alert(`Viewing Task: ${taskId}`);
  };

  const handleReport = (taskId) => {
    alert(`Reporting on Task: ${taskId}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Employee Dashboard</h1>

      {/* Task Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
          <h2 className="text-xl font-semibold text-gray-700">Incoming Tasks</h2>
          <p className="text-4xl font-bold text-blue-600 mt-2">{incomingTasksCount}</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-yellow-500">
          <h2 className="text-xl font-semibold text-gray-700">Pending Tasks</h2>
          <p className="text-4xl font-bold text-yellow-600 mt-2">{pendingTasksCount}</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
          <h2 className="text-xl font-semibold text-gray-700">Completed Tasks</h2>
          <p className="text-4xl font-bold text-green-600 mt-2">{completedTasksCount}</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-500">
          <h2 className="text-xl font-semibold text-gray-700">Active Tasks</h2>
          <p className="text-4xl font-bold text-purple-600 mt-2">{activeTasksCount}</p>
        </div>
      </div>

      {/* Task Table */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <input
              type="text"
              placeholder="Search tasks..."
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <select
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={filter}
              onChange={(e) => {
                setFilter(e.target.value);
                setCurrentPage(1);
              }}
            >
              <option value="All">All Statuses</option>
              <option value="Incoming">Incoming</option>
              <option value="Pending">Pending</option>
              <option value="Completed">Completed</option>
              <option value="Active">Active</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">S.No</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Task ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Task Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Deadline</th>
                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {paginatedTasks.length > 0 ? (
                paginatedTasks.map((task, index) => (
                  <tr key={task.id}>
                    <td className="px-6 py-4">{(currentPage - 1) * itemsPerPage + index + 1}</td>
                    <td className="px-6 py-4 font-medium text-gray-900">{task.id}</td>
                    <td className="px-6 py-4 text-gray-900">{task.name}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          task.status === 'Incoming'
                            ? 'bg-blue-100 text-blue-800'
                            : task.status === 'Pending'
                            ? 'bg-yellow-100 text-yellow-800'
                            : task.status === 'Completed'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-purple-100 text-purple-800'
                        }`}
                      >
                        {task.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">{task.deadline}</td>
                    <td className="px-6 py-4 text-sm font-medium flex space-x-4">
                      {/* View Icon */}
                      <button
                        onClick={() => handleView(task.id)}
                        className="text-blue-600 hover:text-blue-800 transition"
                        title="View Task"
                      >
                        <FaEye size={18} />
                      </button>

                      {/* Report Icon */}
                      <button
                        onClick={() => handleReport(task.id)}
                        className=" transition"
                        title="Generate Report"
                      >
                        <FaFileAlt size={18} />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="px-6 py-4 text-center text-gray-500">No tasks found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {filteredTasks.length > 0 && (
          <div className="flex justify-end mt-6">
            <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-2 py-2 rounded-l-md border border-gray-300 bg-white text-gray-500 hover:bg-gray-50 disabled:opacity-50"
              >
                ‹
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-4 py-2 border text-sm font-medium ${
                    currentPage === page
                      ? 'bg-blue-50 border-blue-500 text-blue-600'
                      : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {page}
                </button>
              ))}
              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-2 py-2 rounded-r-md border border-gray-300 bg-white text-gray-500 hover:bg-gray-50 disabled:opacity-50"
              >
                ›
              </button>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmployeePage;
