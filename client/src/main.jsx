import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/pages/Home";
import ProjectSection from "./components/pages/Project/ProjectSection.jsx";
import MainDashbord from "./components/Dahbord/MainDashbord.jsx";
import Project from "./components/Dahbord/Projects/Project.jsx";
import Client from "./components/Dahbord/Client/Client.jsx";
import Report from "./components/Dahbord/DashbordPage/Report.jsx";
import Service from "./components/Dahbord/DashbordPage/Service.jsx";
import IndustryAnalysis from "./components/Dahbord/DashbordPage/IndustryAnalysis.jsx";
import UserManagement from "./components/Dahbord/DashbordPage/UserManagement.jsx";
import Notification from "./components/Dahbord/DashbordPage/Notification.jsx";
import DevelopmantToolkit from "./components/Dahbord/DashbordPage/DevelopmantToolkit.jsx";
import Dashboard from "./components/Dahbord/DashbordPage/Dashbord.jsx";
import LoginPage from "./components/Dahbord/Login-Page/LoginPage.jsx";

const router = createBrowserRouter([
  // ALL PROJECT / Project Section COMPONENT START
  {
    path: "/Project/ProjecSection",
    element: <ProjectSection />,
  },

  //  END
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
        path: "blog",
        element: <LoginPage />,
      },

      {
        path: "/dashboard",
        element: <MainDashbord />,

        children: [

          { path: "Dashbord", element: <Dashboard /> },

          { path: "projects", element: <Project /> },

          { path: "clients", element: <Client /> },
          { path: "reports", element: <Report /> },
          { path: "services", element: <Service /> },
          { path: "Notification", element: <Notification /> },
          { path: "industry-analysis", element: <IndustryAnalysis /> },
          { path: "user-management", element: <UserManagement /> },
          { path: "developmant-toolkit", element: <DevelopmantToolkit /> },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
