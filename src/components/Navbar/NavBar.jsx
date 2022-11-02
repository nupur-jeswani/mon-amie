import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import logo from './Images/logo.png';
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import { Alert, Nav, Navbar, Button, NavLink, NavbarBrand } from "react-bootstrap";
import { UserAuth } from "../../context/AuthContext";
import './navbar.css';


export default function NavBar() {

    // const user = UserAuth();
    // const logout = UserAuth();
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const { user, logout } = UserAuth();

    async function handleLogOut() {
        setError("");

        try {
            await logout();
            navigate('/landing')
        } catch(e) {
            setError("Failed to logout of your account!", e);
        }
    }


    return (
        <>
            <Navbar bg="light" expand="lg" className="container-fluid  rounded-bottom shadow-sm" sticky="top">
                <NavbarBrand className="ms-3"><img classname="navlogo" src={logo} alt="monamie logo" width="10%"/></NavbarBrand>
                <NavbarToggle aria-controls="basic-navbar-nav" />
                <NavbarCollapse id="basic-navbar-nav">
                    <Nav className="container-fluid justify-content-end fw-bold me-auto">
                        { user ?
                            <>
                                {/* <NavbarBrand className="ms-auto ms-3" href="/home"><img classname="navlogo" src={logo} alt="monamie logo" width="10%"/></NavbarBrand> */}
                                <NavLink href="/home">Home</NavLink>
                                <NavLink href="/home">PCOS Prediction</NavLink>
                                <NavLink href="/home">Cycle Tracker</NavLink>
                                <NavLink href="/home">Periods Awareness</NavLink>
                                <NavLink href="/home">Periods Products</NavLink>
                                <Button className="btn btn-dark fw-bold" onClick={handleLogOut}>LOGOUT</Button>
                            </>
                            :
                            <>
                                {/* <NavbarBrand className="" href="/landing"><img classname="navlogo" src={logo} alt="monamie logo" width="10%"/></NavbarBrand> */}
                                <NavLink href="/login">Login</NavLink>
                                <NavLink href="/signup">Create Account</NavLink>
                                <NavLink href="/landing">Home</NavLink>
                                <NavLink href="/awareness">Periods Awareness</NavLink>
                                <NavLink href="/products">Periods Products</NavLink>
                            </>
                        }
                    </Nav>
                </NavbarCollapse>
            </Navbar>
            {error && <Alert variant="danger"> {error} </Alert>}
        </>
    )
}