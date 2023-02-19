import React from 'react'
// import image1 from '../images/image1.jpg'
import '../Home.css'
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';

const Create = () => {
    return (
        <div>

            <div id="mySidenav" className="sidenav">
                <NavLink to="#" id="blog">Blog</NavLink>
                <NavLink to="#" id="projects">Projects</NavLink>
                <NavLink to="#" id="about">About</NavLink>
                <NavLink to="#" id="contact">Contact</NavLink>
            </div>

            <div className="container">
                <table cellSpacing="60px" cellPadding="60px">
                    <thead>
                        <tr>
                            <td><label className="Heading">This is Create Page</label><br /><label className="subHeading">You've been routed to Create page.</label></td>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <div className="card">
                                <img className="card-img-top" src="" alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <NavLink to="/create/FormOne" className="btn btn-primary">Go somewhere</NavLink>
                                    </div>
                            </div>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Create