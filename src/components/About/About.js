import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

import image1 from '../images/image1.jpg'
import '../Home.css'
import { NavLink } from 'react-router-dom';

const About = () => {
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
                            <td><label className="Heading">🥂About Us</label><br /><label className="subHeading">You've been routed to About Us page.</label></td>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <td><img className="subImg" src={image1} alt="img" /></td>
                            <td><p>At PaveRM, we are dedicated to improving the quality of roads across the country. We understand the critical role that roads play in ensuring the safety and mobility of citizens, supporting economic growth and development, and enhancing the quality of life in our communities. That's why we have developed a cutting-edge software application designed to collect and manage data related to the quality and condition of roads.</p></td>
                        </tr>
                        <tr>

                            <td><p>Our software application, PaveRM, is specifically designed to help government agencies and other stakeholders identify roads that require immediate attention and prioritize maintenance and repair efforts accordingly. By collecting data from various sources, including highways, district roads, rural roads, and border roads, PaveRM provides a comprehensive overview of the condition of roads across the country.</p></td>
                            <td><img className="subImg" src={image1} alt="img" /></td>
                        </tr>
                        <tr>
                            <td><img className="subImg" src={image1} alt="img" /></td>
                            <td><p>Using advanced data analytics techniques, PaveRM analyzes and processes this data to identify patterns and trends in road conditions and provide insights into the causes of road damage. This information is then used to produce a list of roads that require repair or maintenance work, which is handed over to the relevant government agency responsible for road maintenance and repair.</p></td>
                        </tr>
                        <tr>

                            <td><p>At PaveRM, we believe that our software application can make a significant difference in the quality of roads across the country. By providing accurate and up-to-date data on road conditions, we can help government agencies to plan and allocate resources more efficiently, focusing on the roads that need immediate attention and ensuring that maintenance efforts are targeted at the most critical areas. Together, we can build safer, more functional, and better-maintained roads that benefit all citizens and support our collective goals for economic growth and development.</p></td>
                            <td><img className="subImg" src={image1} alt="img" /></td>
                        </tr>
                        <tr>

                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default About