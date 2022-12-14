import React from 'react'
// import logo from './images/logo.png'

import image1 from './image1.jpg';
import './Home.css'

const History = () => {
    return (
        <div>
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
                            <td><label className="Heading">This is History Page</label><br /><label className="subHeading">You've been routed to History page.</label></td>
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

export default History