import { Outlet } from "react-router-dom";
import Home from "./Home";
import UserInputForm from "./UserInputForm";
import React, { useEffect, useState, useRef } from 'react';



const ProtectedRoutes = () => {


    return (
        UserInputForm.auth ? <Outlet /> : <Home />
    )

};

export default ProtectedRoutes;