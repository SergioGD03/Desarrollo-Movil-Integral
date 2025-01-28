import React from "react";
import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
    children: JSX.Element;
}

const PrivateRoute:React.FC<PrivateRouteProps> = ({ children }) => {
    const token = localStorage.getItem('Token'); //obtener el token

    return token ? children:<Navigate to="/"/>
}

export default PrivateRoute;