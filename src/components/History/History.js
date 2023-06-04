import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import '../Home.css'

import { NavLink } from 'react-router-dom';
import { useState, useEffect } from "react";

const History = () => {

    // const initialValues =
    // {
    //     reporteeName: "",
    //     reporteeEmail: "",
    //     areaName: "",
    //     pincodeNumber: "",
    //     districtName: "",
    //     stateName: "",
    //     roadName: "",
    //     roadType: "",
    //     paveRate: "",
    //     describe: ""

    // };

    // const [formValues, setFormValues] = useState(initialValues);

    const [formValues, setFormValues] = useState([{
        reportDate: "",
        reporteeName: "",
        reporteeEmail: "",
        areaName: "",
        pincodeNumber: "",
        districtName: "",
        stateName: "",
        roadName: "",
        roadType: "",
        paveRate: "",
        describe: ""
    }])

    useEffect(() => {
        fetch("/read").then(res => {
            if (res.ok) {
                return res.json()
            }
        }).then(jsonRes => setFormValues(jsonRes))
    });




    return (
        <>
            <div id="mySidenav" className="sidenav">
                <NavLink to="#" id="blog">Blog</NavLink>
                <NavLink to="#" id="projects">Projects</NavLink>
                <NavLink to="#" id="about">About</NavLink>
                <NavLink to="#" id="contact">Contact</NavLink>
            </div>
            {/* <div className='container'> */}
                <div className="history-container">
                    <label className="Heading ml-5">🕔Grievance History</label>
                    <table id="customers">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Date</th>
                                <th scope="col">Reportee Name</th>
                                <th scope="col">Reportee Email</th>
                                <th scope="col">Area Name</th>
                                <th scope="col">Pincode</th>
                                <th scope="col">District</th>
                                <th scope="col">State</th>
                                <th scope="col">Road Name</th>
                                <th scope="col">Road Type</th>
                                <th scope="col">Ratings</th>
                                <th scope="col">Description</th>

                            </tr>
                        </thead>
                        <tbody>

                            {formValues.map((record, i) =>

                                <tr id='recordRow' key={i}>
                                    <th scope="row">{i + 1}</th>

                                    <td>{record.reportDate}</td>
                                    <td>{record.reporteeName}</td>
                                    <td>{record.reporteeEmail}</td>
                                    <td>{record.areaName}</td>
                                    <td>{record.pincodeNumber}</td>
                                    <td>{record.districtName}</td>
                                    <td>{record.stateName}</td>
                                    <td>{record.roadName}</td>
                                    <td>{record.roadType}</td>
                                    <td>{record.paveRate}</td>
                                    <td>{record.describe}</td>
                                </tr>


                            )}



                        </tbody>
                    </table>
                </div>
            {/* </div> */}
        </>
    )
}

export default History