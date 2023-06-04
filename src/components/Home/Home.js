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

                <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={homebg} class="d-block w-100" alt="..."/>
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>VIP Road</h5>
                                    {/* <p>Some representative placeholder content for the first slide.</p> */}
                                </div>
                        </div>
                        <div class="carousel-item">
                            <img src={secondbg} class="d-block w-100" alt="..."/>
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>Safdarjung Road</h5>
                                    {/* <p>Some representative placeholder content for the second slide.</p> */}
                                </div>
                        </div>
                        <div class="carousel-item">
                            <img src={thirdbg} class="d-block w-100" alt="..."/>
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>Connaught Place</h5>
                                    {/* <p>Some representative placeholder content for the third slide.</p> */}
                                </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-target="#carouselExampleCaptions" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-target="#carouselExampleCaptions" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
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