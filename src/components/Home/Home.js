import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import image1 from '../images/image1.jpg'
import '../Home.css'
import { NavLink } from 'react-router-dom';
import homebg from '../images/welcome-bg.jpg'
import secondbg from '../images/second-bg.jpg'
import thirdbg from '../images/third-bg.jpg'



const Home = () => {

    return (



        <div className="wrapper">


            <div id="mySidenav" className="sidenav">
                <NavLink to="#" id="blog">Blog</NavLink>
                <NavLink to="#" id="projects">Projects</NavLink>
                <NavLink to="#" id="about">About</NavLink>
                <NavLink to="#" id="contact">Contact</NavLink>
            </div>



            <div className="container">

                <label className="Heading">🏠paveRM, post the road!</label><br />
                <label className="subHeading">A Road Reporting Portal</label>

                <br />
                <br />

                <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={homebg} className="d-block w-100" alt="..."/>
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>VIP Road</h5>
                                    {/* <p>Some representative placeholder content for the first slide.</p> */}
                                </div>
                        </div>
                        <div className="carousel-item">
                            <img src={secondbg} className="d-block w-100" alt="..."/>
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Safdarjung Road</h5>
                                    {/* <p>Some representative placeholder content for the second slide.</p> */}
                                </div>
                        </div>
                        <div className="carousel-item">
                            <img src={thirdbg} className="d-block w-100" alt="..."/>
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Connaught Place</h5>
                                    {/* <p>Some representative placeholder content for the third slide.</p> */}
                                </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-target="#carouselExampleCaptions" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-target="#carouselExampleCaptions" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </button>
                </div>

                <table cellSpacing="60px" cellPadding="60px" align="center">
                    <thead>
                    </thead>
                    <tbody>

                        <tr>
                            <td><img className="subImg" src={image1} alt="img" /></td>
                            <td><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo rerum, laudantium sunt culpa illum, aliquid dicta perspiciatis odio cumque laborum, similique cum deleniti architecto blanditiis impedit autem praesentium nostrum? Optio eveniet minima labore voluptatum deserunt quo nulla similique quaerat, eaque fuga qui temporibus itaque architecto sequi tempora. Dolorem odit nostrum qui minima eaque excepturi, commodi doloribus rem asperiores architecto totam animi sequi esse, voluptatibus vel sed, ratione accusamus doloremque perferendis? A molestias placeat error minus laboriosam voluptatum in ipsa. Amet corporis, a ullam impedit pariatur id temporibus omnis odit incidunt. Tempora, cumque vel. Veritatis, placeat provident? Totam quasi repudiandae debitis?</p></td>
                        </tr>
                        <tr>

                            <td><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo rerum, laudantium sunt culpa illum, aliquid dicta perspiciatis odio cumque laborum, similique cum deleniti architecto blanditiis impedit autem praesentium nostrum? Optio eveniet minima labore voluptatum deserunt quo nulla similique quaerat, eaque fuga qui temporibus itaque architecto sequi tempora. Dolorem odit nostrum qui minima eaque excepturi, commodi doloribus rem asperiores architecto totam animi sequi esse, voluptatibus vel sed, ratione accusamus doloremque perferendis? A molestias placeat error minus laboriosam voluptatum in ipsa. Amet corporis, a ullam impedit pariatur id temporibus omnis odit incidunt. Tempora, cumque vel. Veritatis, placeat provident? Totam quasi repudiandae debitis?</p></td>
                            <td><img className="subImg" src={image1} alt="img" /></td>
                        </tr>
                        <tr>
                            <td><img className="subImg" src={image1} alt="img" /></td>
                            <td><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo rerum, laudantium sunt culpa illum, aliquid dicta perspiciatis odio cumque laborum, similique cum deleniti architecto blanditiis impedit autem praesentium nostrum? Optio eveniet minima labore voluptatum deserunt quo nulla similique quaerat, eaque fuga qui temporibus itaque architecto sequi tempora. Dolorem odit nostrum qui minima eaque excepturi, commodi doloribus rem asperiores architecto totam animi sequi esse, voluptatibus vel sed, ratione accusamus doloremque perferendis? A molestias placeat error minus laboriosam voluptatum in ipsa. Amet corporis, a ullam impedit pariatur id temporibus omnis odit incidunt. Tempora, cumque vel. Veritatis, placeat provident? Totam quasi repudiandae debitis?</p></td>
                        </tr>
                        <tr>

                            <td><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo rerum, laudantium sunt culpa illum, aliquid dicta perspiciatis odio cumque laborum, similique cum deleniti architecto blanditiis impedit autem praesentium nostrum? Optio eveniet minima labore voluptatum deserunt quo nulla similique quaerat, eaque fuga qui temporibus itaque architecto sequi tempora. Dolorem odit nostrum qui minima eaque excepturi, commodi doloribus rem asperiores architecto totam animi sequi esse, voluptatibus vel sed, ratione accusamus doloremque perferendis? A molestias placeat error minus laboriosam voluptatum in ipsa. Amet corporis, a ullam impedit pariatur id temporibus omnis odit incidunt. Tempora, cumque vel. Veritatis, placeat provident? Totam quasi repudiandae debitis?</p></td>
                            <td><img className="subImg" src={image1} alt="img" /></td>
                        </tr>
                        <tr>

                        </tr>
                    </tbody>
                </table>


            </div>

        </div>
        // </div>



    )
}

export default Home