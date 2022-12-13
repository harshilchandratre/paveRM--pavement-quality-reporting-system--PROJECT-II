import React from 'react'
import logo from './logo.png';
import image1 from './image1.jpg';
// import background from './background.jpeg';
import './Home.css'
// import '../App.css'

const Home = () => {
    return (

        // <div className="bg" style="background-image: url({background});">
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                {/* <a className="my-brand" href="#">PaveRM</a> */}
                <img src={logo} className="logo" alt="Logo" />
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="./Home.js">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="./Create.js">Create</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">History</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Login</a>
                        </li>

                    </ul>
                </div>
            </nav>
            <p>Welcome to Homepage</p>

            <div className="container">
                {/* <h1 className="Heading">
                    What is PaveRM ?
                </h1>
                <h3 className="subHeading">
                    A computer science portal
                </h3>
                <br /> */}
                <table cellSpacing="60px" cellPadding="60px">
                    <thead>
                        <tr>
                            <td><label className="Heading">What is PaveRM?</label><br/><label className="subHeading">A Road Reporting Portal</label></td>
                            <td></td>
                        </tr>
                    </thead>
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
                </table>
            </div>

            {/* <footer className="page-footer font-small blue bg-dark text-light">

                <div className="footer-copyright text-center py-3">© 2022 Copyright:
                    <a className="my-brand" style="font-family: Arial, Helvetica, sans-serif; font-size: small; color: #9a9da0;"
                        href="#"> harshilchandratre.com</a>
                </div>
            </footer> */}











        </div>
        // </div>



    )
}

export default Home