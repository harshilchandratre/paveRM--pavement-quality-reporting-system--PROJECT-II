import React from 'react'
import './Home.css'
import logo from '../components/images/logo.png'
// import Home from './Home'
import { NavLink } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";


const Navbar = () => {

    const { loginWithRedirect, user, isAuthenticated, logout, isLoading } = useAuth0();


    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
                {/* bg-dark */}



                {/* logo part */}
                <NavLink to="/"><img src={logo} className="logo ml-5" alt="Logo" /></NavLink>



                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>



                {/* navlinks part */}

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto text-center mt-2">

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>



                        {
                            isAuthenticated ? (<>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/create">Create</NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/history">History</NavLink>
                                </li>


                            </>)
                                :
                                <>
                                    <li className="nav-item">
                                    <NavLink className="nav-link" onClick={() => loginWithRedirect()}>Create</NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink className="nav-link" onClick={() => loginWithRedirect()}>History</NavLink>
                                </li>
                                </>

                        }

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About Us</NavLink>
                        </li>

                        {
                            isAuthenticated ?
                                (<li className="nav-item">
                                    {/* <NavLink className="nav-link" to={() => loginWithRedirect()}>Login</NavLink> */}
                                    <button className="btn btn-primary" onClick={() => logout({ returnTo: window.location.origin })}>Log Out</button>
                                </li>)
                                :
                                (<li className="nav-item">
                                    <button className="btn btn-primary" onClick={() => loginWithRedirect()}>Log In</button>
                                </li>)

                        }

                        {
                            isLoading && (<li className="nav-item"><span className="spinner-grow spinner-grow-sm text-light ml-4" role="status" aria-hidden="true"></span></li>
                            )
                        }

                        {/* user profile part */}

                        {
                            isAuthenticated && (<li className="nav-item-profile ml-5">
                                <NavLink className="nav-link"><label className="welcome-profile">Welcome<font color="skyblue"> {user.name}</font></label></NavLink>
                            </li>)

                        }
                    </ul>
                </div>
            </nav>
        </div>


    )
}

export default Navbar