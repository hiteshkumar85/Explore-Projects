import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/pages/Home";
import ProjectSection from "./components/pages/Project/ProjectSection.jsx";

import MainDashbord from "./components/Dashbord/MainDashbord.jsx";
import Project from "./components/Dashbord/Projects/Project.jsx";
import Client from "./components/Dashbord/Client/Client.jsx";
import Report from "./components/Dashbord/Report/Report.jsx";
import Service from "./components/Dashbord/Service/Service.jsx";
import IndustryAnalysis from "./components/Dashbord/IndustryAnalysis/IndustryAnalysis.jsx";
import UserManagement from "./components/Dashbord/UserManagement/UserManagement.jsx";
import Notification from "./components/Dashbord/Notification/Notification.jsx";
import DevelopmantToolkit from "./components/Dashbord/DevelopmentToolkit/DevelopmantToolkit.jsx";
import Dashboard from "./components/Dashbord/Dashbord/Dashbord.jsx";
import ProjectInformation from "./components/pages/Project/ProjectInformation.jsx";
import LoginPage from "./components/Dashbord/LoginPage.jsx";

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
      }
    ],
  },
  {
    path: "/dashboard/login",
    element: <LoginPage /> 
  },
  {
    path: "/dashboard",
    element: <MainDashbord />,
    children: [
      {
        path: "",
        element: <Dashboard />
      },
      {
        path: "projects",
        element: <Project />
      },
      {
        path: "clients",
        element: <Client />
      },
      {
        path: "reports",
        element: <Report />
      },
      {
        path: "services",
        element: <Service />
      },
      {
        path: "Notification",
        element: <Notification />
      },
      {
        path: "industry-analysis",
        element: <IndustryAnalysis />
      },
      {
        path: "user-management",
        element: <UserManagement />
      },
      {
        path: "developmant-toolkit",
        element: <DevelopmantToolkit />
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
