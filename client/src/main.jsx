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
import Service from "./components/Dashboard/Service/Service.jsx";
import IndustryAnalysis from "./components/Dashboard/IndustryAnalysis/IndustryAnalysis.jsx";
import Manager from "./components/Dashboard/UserManagement/Manager/Manager.jsx";
import Notification from "./components/Dashboard/Notification/Notification.jsx";
import DevelopmantToolkit from "./components/Dashboard/DevelopmentToolkit/DevelopmantToolkit.jsx";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard.jsx";
import ProjectInformation from "./components/pages/Project/ProjectInformation.jsx";
import LoginPage from "./components/Dashboard/LoginPage.jsx";
import Employ from "./components/Dashboard/UserManagement/Employ.jsx";

// useNavigate
import ManagerForm from "./components/Dashboard/UserManagement/Manager/ManagerForm.jsx";

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
      {
        path: "blog",
        element: <h1>blog</h1>,
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
      {
        path: "services",
        element: <Service />,
      },
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

        // children: [],


      },

      { path: "employ", element: <Employ /> },
      {
        path: "developmant-toolkit",
        element: <DevelopmantToolkit />,
      },
    ],
  },
  { path: "add-manager", element: <ManagerForm /> },
  
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
