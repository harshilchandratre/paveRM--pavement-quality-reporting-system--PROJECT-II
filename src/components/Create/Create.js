import React from 'react'
import image1 from '../images/image1.jpg'
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
    )
}

export default Create