import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }){

    let isLogin = JSON.parse(localStorage.getItem('loginStatus'))

    return !isLogin ? <Navigate to="/login" /> : children

}

export default ProtectedRoute;