import { Navigate, Outlet, useLocation } from 'react-router-dom';

const ProtectedRoutes = ({ allowedFor = [] }) => {
    const location = useLocation();
    const token = localStorage.getItem("token");

    const isPublicRoute = allowedFor.length === 0;
    
    if (!token) {
        if (isPublicRoute) return <Outlet />;
        return <Navigate to="/dashboard/login" replace />;
    }

    try {
        let role = token;
        if (!isPublicRoute && !allowedFor.includes(role)) {
            return <Navigate to="/unauthorized" replace />;
        }

        if (isPublicRoute && location.pathname === "/") {
            return <Navigate to="/dashboard" replace />;
        }

        return <Outlet />;
    } catch (error) {
        return <Navigate to="/dashboard/login" replace />;
    }
};


export default ProtectedRoutes;
