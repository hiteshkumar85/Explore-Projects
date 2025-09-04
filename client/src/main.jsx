import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/pages/Home";
import ProjectSection from "./components/pages/Project/ProjectSection.jsx";
import MainDashbord from "./components/Dashboard/MainDashboard.jsx";
import Project from "./components/Dashboard/Projects/Project.jsx";
import Client from "./components/Dashboard/Client/Client.jsx";
import Report from "./components/Dashboard/Report/Report.jsx";
import IndustryAnalysis from "./components/Dashboard/IndustryAnalysis/IndustryAnalysis.jsx";
import Notification from "./components/Dashboard/Notification/Notification.jsx";
import Workspace from "./components/Dashboard/WorkSpace/Workspace.jsx";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard.jsx";
import ProjectInformation from "./components/pages/Project/ProjectInformation.jsx";
import LoginPage from "./components/Dashboard/LoginPage.jsx";
import Employee from "./components/Dashboard/UserManagement/Employee/Employee.jsx";

// Manager Components
import Manager from "./components/Dashboard/UserManagement/Manager/Manager.jsx";
import ManagerForm from "./components/Dashboard/UserManagement/Manager/ManagerForm.jsx";
import ManagerDetails from "./components/Dashboard/UserManagement/Manager/ManagerDetails.jsx";

// Service Components
import Solutions from "./components/Dashboard/Service/Solutions.jsx";
import Blog from "./components/Dashboard/Service/Blog.jsx";
import ClientRating from "./components/Dashboard/Service/ClientRating.jsx";
import ProjectShowCase from "./components/Dashboard/Service/ProjectShowCase.jsx";
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
    path: "/dashboard",
    element: <MainDashbord />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "projects",
        element: <Project />,
      },
      {
        path: "clients",
        element: <Client />,
      },
      {
        path: "reports",
        element: <Report />,
      },

      //  service routes start here
      { path: "services/clientrating", element: <ClientRating /> },
      {
        path: "services/solutions",
        element: <Solutions />,
      },
      {
        path: "services/blog",
        element: <Blog />,
      },
      {
        path: "services/projectshowcase",
        element: <ProjectShowCase />,
      },
      //  service routes end here

      {
        path: "Notification",
        element: <Notification />,
      },
      {
        path: "industry-analysis",
        element: <IndustryAnalysis />,
      },
      {
        path: "manager",
        element: <Manager />,
      },

      { path: "employee", element: <Employee /> },
      {
        path: "WorkSpace",
        element: <Workspace />,
      },
    ],
  },
  { path: "add-manager", element: <ManagerForm /> },
  { path: "managerdetails", element: <ManagerDetails /> },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
