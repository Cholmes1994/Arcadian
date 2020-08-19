import React from 'react'
import { LogoutUser } from "../actions/authActions";
import { useDispatch } from "react-redux";
import "../components/Logout.css"
const Logout = () => {
    const dispatch = useDispatch();
    return (
        <a href="/login" style={{ border: "none", cursor: "pointer" }} className="item" onClick={() => { dispatch(LogoutUser()) }}>
            Logout
        </a>
    )
}

export default Logout;