import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/pages/Home";
import ProjectSection from "./components/pages/Project/ProjectSection.jsx";
import ProjectInformation from "./components/pages/Project/ProjectInformation.jsx";
import LoginPage from "./components/Dashboard/LoginPage.jsx";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard.jsx";
import MainDashbord from "./components/Dashboard/MainDashboard.jsx";
import Project from "./components/Dashboard/Projects/Project.jsx";
import Client from "./components/Dashboard/Client/Client.jsx";
import Report from "./components/Dashboard/Report/Report.jsx";
import IndustryAnalysis from "./components/Dashboard/IndustryAnalysis/IndustryAnalysis.jsx";
import Notification from "./components/Dashboard/Notification/Notification.jsx";
import Workspace from "./components/Dashboard/WorkSpace/Workspace.jsx";
import Employee from "./components/Dashboard/UserManagement/Employee/Employee.jsx";
import Manager from "./components/Dashboard/UserManagement/Manager/Manager.jsx";
import ManagerForm from "./components/Dashboard/UserManagement/Manager/ManagerForm.jsx";
import ManagerDetails from "./components/Dashboard/UserManagement/Manager/ManagerDetails.jsx";
import Solutions from "./components/Dashboard/Service/Solutions.jsx";
import Blog from "./components/Dashboard/Service/Blog.jsx";
import ClientRating from "./components/Dashboard/Service/ClientRating.jsx";
import ProjectShowCase from "./components/Dashboard/Service/ProjectShowCase.jsx";
import ProtectedRoutes from "./components/Dashboard/ProtectedRoutes.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "portfolio",
        element: <ProjectSection />,
      },
      {
        path: "portfolio/project-information",
        element: <ProjectInformation />,
      },
    ],
  },
  {
    path: "/dashboard/login",
    element: <LoginPage />,
  },
  {
    element: <ProtectedRoutes allowedFor={['admin', 'employee', 'project_manager', 'client_manager', 'employee_manager', 'service_manager']} />,
    children: [
      {
        path: "/dashboard",
        element: <MainDashbord />,
        children: [
          {
            path: "",
            element: <Dashboard />,
          },
          {
            path: "notification",
            element: <Notification />,
          },
        ]
      },
    ]
  },
  {
    element: <ProtectedRoutes allowedFor={['admin']} />,
    children: [
      {
        path: "/dashboard",
        element: <MainDashbord />,
        children: [
          {
            path: "reports",
            element: <Report />,
          },
          {
            path: "industry-analysis",
            element: <IndustryAnalysis />,
          },
          {
            path: "managers",
            element: <Manager />
          }
        ]
      },
      {
        path: "/dashboard/add-manager",
        element: <ManagerForm />
      },
      {
        path: "/dashboard/managerdetails",
        element: <ManagerDetails />
      }
    ]
  },
  {
    element: <ProtectedRoutes allowedFor={['employee']} />,
    children: [
      {
        path: "/dashboard",
        element: <MainDashbord />,
        children: [
          {
            path: "workspace",
            element: <Workspace />
          }
        ]
      }
    ]
  },
  {
    element: <ProtectedRoutes allowedFor={['project_manager', 'admin']} />,
    children: [
      {
        path: "/dashboard",
        element: <MainDashbord />,
        children: [
          {
            path: "projects",
            element: <Project />
          }
        ]
      }
    ]
  },
  {
    element: <ProtectedRoutes allowedFor={['client_manager', 'admin']} />,
    children: [
      {
        path: "/dashboard",
        element: <MainDashbord />,
        children: [
          {
            path: "clients",
            element: <Client />
          }
        ]
      }
    ]
  },
  {
    element: <ProtectedRoutes allowedFor={['employee_manager', 'admin']} />,
    children: [
      {
        path: "/dashboard",
        element: <MainDashbord />,
        children: [
          {
            path: "employee",
            element: <Employee />
          }
        ]
      },
      {
        path: "/dashboard/add-employee",
        element: <ManagerForm />
      },
      {
        path: "/dashboard/employeedetails",
        element: <ManagerDetails />
      }
    ]
  },
  {
    element: <ProtectedRoutes allowedFor={['service_manager', 'admin']} />,
    children: [
      {
        path: "/dashboard",
        element: <MainDashbord />,
        children: [
          {
            path: "services/clientrating",
            element: <ClientRating />
          },
          {
            path: "services/solutions",
            element: <Solutions />
          },
          { 
            path: "services/blog",
            element: <Blog />
          },
          {
            path: "services/projectshowcase",
            element: <ProjectShowCase />
          }
        ]
      }
    ]
  }

]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);