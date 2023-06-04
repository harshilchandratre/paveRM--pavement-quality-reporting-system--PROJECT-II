import React from 'react'
// import image1 from '../images/image1.jpg'
import '../Home.css'
import './../../css/create.css'
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

            <div className='container'>
                <div className='con-card-title'>
                    <label className="Heading">
                        ✍🏼Pick a format
                    </label>
                    <label className="subHeading">
                        You've been routed to Create page.
                    </label>
                </div>
                <div className='con-card'>
                    <div className="card">
                        {/* <img className="card-img-top" alt="formone" /> */}
                            <div className="card-body">
                                <h5 className="card-title">🔥File Complaint for Roads</h5>
                                <p className="card-text">Create a specific grievance form for damaged roads that pedestrians and commuters can report and track issues related to the maintenance and condition of roads.</p>
                                <NavLink to="/create/FormOne" className="btn btn-primary">Create Now</NavLink>
                            </div>
                    </div>
                    <div className="card">
                        {/* <img className="card-img-top" alt="formone" /> */}
                            <div className="card-body">
                                <h5 className="card-title">🔥File Complaint for Roadside litter</h5>
                                <p className="card-text">Create a grievance form specific to roadside garbage can enable residents to report and track issues related to litter and waste management.</p>
                                <NavLink to="/create/FormTwo" className="btn btn-primary">Create Now</NavLink>
                            </div>
                    </div>
                    <div className="card">
                        {/* <img className="card-img-top" alt="formone" /> */}
                            <div className="card-body">
                                <h5 className="card-title">🔥Request for Flora</h5>
                                <p className="card-text">Create a specific grievance form for roads that pedestrians and commuters can report and track issues related to the maintenance and condition of roads.</p>
                                <NavLink to="/create/FormThree" className="btn btn-primary">Create Now</NavLink>
                            </div>
                    </div>
                    <div className="card">
                        {/* <img className="card-img-top" alt="formone" /> */}
                            <div className="card-body">
                                <h5 className="card-title">🔥File Complaint for Roads</h5>
                                <p className="card-text">Create a specific grievance form for damaged roads that pedestrians and commuters can report and track issues related to the maintenance and condition of roads.</p>
                                <NavLink to="/create/FormOne" className="btn btn-primary">Create Now</NavLink>
                            </div>
                    </div>
                    <div className="card">
                        {/* <img className="card-img-top" alt="formone" /> */}
                            <div className="card-body">
                                <h5 className="card-title">🔥File Complaint for Roadside litter</h5>
                                <p className="card-text">Create a grievance form specific to roadside garbage can enable residents to report and track issues related to litter and waste management.</p>
                                <NavLink to="/create/FormTwo" className="btn btn-primary">Create Now</NavLink>
                            </div>
                    </div>
                    <div className="card">
                        {/* <img className="card-img-top" alt="formone" /> */}
                            <div className="card-body">
                                <h5 className="card-title">🔥Request for Flora</h5>
                                <p className="card-text">Create a specific grievance form for roads that pedestrians and commuters can report and track issues related to the maintenance and condition of roads.</p>
                                <NavLink to="/create/FormThree" className="btn btn-primary">Create Now</NavLink>
                            </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Create