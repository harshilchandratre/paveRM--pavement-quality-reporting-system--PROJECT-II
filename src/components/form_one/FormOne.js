import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import '../Home.css'
import { useState, useEffect } from "react"; //useEffect removed 

import axios from 'axios';


// ----------------------------JAVASCRIPT FOR GEOLOCATION----------------------------//
// var options = {
//   enableHighAccuracy: true,
//   timeout: 5000,
//   maximumAge: 0,
// };
// function success(pos) {
//   var crd = pos.coords;

//   console.log("Your current position is:");
//   console.log(`Latitude : ${crd.latitude}`);
//   console.log(`Longitude: ${crd.longitude}`);
//   console.log(`More or less ${crd.accuracy} meters.`);
// }

// function errors(err) {
//   console.warn(`ERROR(${err.code}): ${err.message}`);
// }
//----------------------------JAVASCRIPT FOR GEOLOCATION----------------------------//




// ****FORMONE COMPONENT STARTS HERE****//

const FormOne = () => {


  // -----------------CODE FOR GEOLOCATION STARTS----------------------//


  // if (navigator.geolocation) {
  //   navigator.permissions
  //     .query({ name: "geolocation" })
  //     .then(function (result) {


  //       if (result.state === "granted") {
  //         console.log(result.state);
  //         //If granted then you can directly call your function here
  //         navigator.geolocation.getCurrentPosition(success);
  //       }


  //       else if (result.state === "prompt") {
  //         navigator.geolocation.getCurrentPosition(success, errors, options);
  //       } else if (result.state === "denied") {
  //         //If denied then you have to show instructions to enable location
  //       }
  //       result.onchange = function () {
  //         console.log(result.state);
  //       };
  //     });
  // } else {
  //   alert("Sorry Not available!");
  // }




  // var x = document.getElementById("getLocate");
  // function getLocation() {
  //     if (navigator.geolocation) {
  //         navigator.geolocation.getCurrentPosition(showPosition);
  //     } else {
  //         x.innerHTML = "Geolocation is not supported by this browser.";
  //     }
  // }

  // function showPosition(position) {
  //     x.innerHTML = "Latitude: " + position.coords.latitude +
  //         "<br>Longitude: " + position.coords.longitude;
  // }


  //    { var x = document.getElementById("demo"); }

  //     function getLocation() {
  //         if (navigator.geolocation) {
  //             navigator.geolocation.getCurrentPosition(showPosition);
  //         } else {
  //             x.innerHTML = "Geolocation is not supported by this browser.";
  //         }
  //     }

  //     function showPosition(position) {
  //         x.innerHTML = "Latitude: " + position.coords.latitude +
  //             "<br>Longitude: " + position.coords.longitude;
  //     }

  // ---------------------CODE FOR GEOLOCATION ENDS--------------------------//




  const initialValues =
  {
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

  };

  const [formValues, setFormValues] = useState(initialValues);

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormErrors(validate(formValues));
    setIsSubmit(true);

    const newComplaints = {
      reportDate: formValues.reportDate,
      reporteeName: formValues.reporteeName,
      reporteeEmail: formValues.reporteeEmail,
      areaName: formValues.areaName,
      pincodeNumber: formValues.pincodeNumber,
      districtName: formValues.districtName,
      stateName: formValues.stateName,
      roadName: formValues.roadName,
      roadType: formValues.roadType,
      paveRate: formValues.paveRate,
      describe: formValues.describe
    }

    if (isSubmit && !formValues.reportDate && !formValues.reporteeName && !formValues.reporteeEmail && !formValues.areaName && !formValues.pincodeNumber && !formValues.districtName && !formValues.stateName && !formValues.roadName && !formValues.roadType && !formValues.paveRate && !formValues.describe) {
      alert("Please resolve empty field errors first!")
    }
    else if (formValues.reportDate !== "" && formValues.reporteeName !== "" && formValues.reporteeEmail !== "" && formValues.areaName !== "" && formValues.pincodeNumber !== "" && formValues.districtName !== "" && formValues.stateName !== "" && formValues.roadName !== "" && formValues.roadType !== "" && formValues.paveRate !== "" && formValues.describe !== "") {
      
      axios.post("/create", newComplaints)
      alert("Your Form has been accepted!")
    }

  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {

      // console.log(formValues);
      // alert('Form has been submitted!');
      alert("please wait...")
    }
  });  //, [formErrors]

  // code for validation check
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.reportDate) {
      errors.reportDate = "Date of Report is required!"
    }

    if (!values.reporteeName) {
      errors.reporteeName = "Username is required!";
    }

    if (!values.reporteeEmail) {
      errors.reporteeEmail = "Email is required!";
    } else if (!regex.test(values.reporteeEmail)) {
      errors.reporteeEmail = "This is not a valid email format!";
    }
    if (!values.areaName) {
      errors.areaName = "Username is required!";
    }
    if (!values.pincodeNumber) {
      errors.pincodeNumber = "Pincode is required!";
    } else if (values.pincodeNumber.length > 6 || values.pincodeNumber.length < 6) {
      errors.pincodeNumber = "Pincode must be 6 digit only!"
    }
    if (!values.districtName) {
      errors.districtName = "District Name is required!";
    }
    if (!values.stateName) {
      errors.stateName = "State Name is required!";
    }
    if (!values.roadName) {
      errors.roadName = "Road Name is required!";
    }
    if (formValues.roadType = "select") {
      errors.roadType = "Road Type is required!";
    }
    if (!values.paveRate) {
      errors.paveRate = "Rating is required!";
    }
    if (!values.describe) {
      errors.describe = "Description is required!";
    }




    // if (!values.password) {
    //   errors.password = "Password is required";
    // } else if (values.password.length < 4) {
    //   errors.password = "Password must be more than 4 characters";
    // } else if (values.password.length > 10) {
    //   errors.password = "Password cannot exceed more than 10 characters";
    // }
    return errors;
  };






  // ****CODE FOR RESET FORM****//

  // function resetForm() {
  //   // document.getElementById("informOne").reset();  
  //   this.setState(
  //     {
  //       reporteeName: "",
  //       reporteeEmail: "",
  //       areaName: "",
  //       pincodeNumber: "",
  //       districtName: "",
  //       stateName: "",
  //       roadName: "",
  //       roadType: "",
  //       paveRate: "",
  //       describe: ""
  //     }


  //   );

  // }

  const handleReset = () => {
    this.setState(
      {
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
      })
  };









  return (
    <div className='container'>
      <div className="formContainer">


        <h2>File Complaint</h2>
        <br />
        <br />

        <form onSubmit={handleSubmit} method='post' id='informOne'>
          <h4>Your Details:</h4><br />

          <label htmlFor="reportDate">Set current date:&nbsp;</label>
          <input type="date" id="reportDate" name="reportDate" value={formValues.reportDate} onChange={handleChange} /><br />
          <p className='validErrors'>{formErrors.reportDate}</p>
          <br />

          <label htmlFor="reporteeName">Your Full Name</label>
          <input type="text" id="reporteeName" name="reporteeName" value={formValues.reporteeName} onChange={handleChange} placeholder="Enter your full name" /><br/>
          <p className='validErrors'>{formErrors.reporteeName}</p>
          <br/>

          <label htmlFor="reporteeEmail">Your Email Address </label>
          <input type="text" id="reporteeEmail" name="reporteeEmail" value={formValues.reporteeEmail} onChange={handleChange} placeholder="Enter your Email Address" /><br/>
          <p className='validErrors'>{formErrors.reporteeEmail}</p>
          <br/>

          <hr className='hr' />
          <br />
          <h4>Your Road Details:</h4><br />

          <label htmlFor="areaName">Area Name</label>
          <input type="text" id="area" name="areaName" placeholder="Enter Area Name" value={formValues.areaName} onChange={handleChange} /><br/>
          <p className='validErrors'>{formErrors.areaName}</p>
          <br/>

          <label htmlFor="pincodeNumber">Area Pincode</label>
          <input type="text" id="pincodeNumber" name="pincodeNumber" maxLength={6} value={formValues.pincodeNumber} onChange={handleChange} placeholder="Enter Pincode" onkeypress="return event.charCode>=48 && event.charCode<=57"/><br/>
          <p className='validErrors'>{formErrors.pincodeNumber}</p>
          <br/>

          <label htmlFor="districtName">District</label>
          <input type="text" id="districtName" name="districtName" value={formValues.districtName} onChange={handleChange} placeholder="Enter District name" /><br/>
          <p className='validErrors'>{formErrors.districtName}</p>
          <br/>
          <label htmlFor="stateName">State Name</label>
          <input type="text" id="stateName" name="stateName" value={formValues.stateName} onChange={handleChange} placeholder="Enter State Name" /><br/>
          <p className='validErrors'>{formErrors.stateName}</p>
          <br/>

          <label htmlFor="roadName">Road Name</label>
          <input type="text" id="roadName" name="roadName" value={formValues.roadName} onChange={handleChange} placeholder="Enter Road Name (eg. NH48 or Ghodbunder road or NH48 - Ghodbunder Road)" /><br/>
          <p className='validErrors'>{formErrors.roadName}</p>
          <br/>

          <label htmlFor="roadType">Road Type</label>
          <select id="roadType" name="roadType" value={formValues.roadType} onChange={handleChange} >
            <option name="Dunno">select</option>
            <option name="Expressway">Expressway</option>
            <option name="National_Highway">National Highway</option>
            <option name="StateHighway">State Highway</option>
            <option name="DistrictRoad">District Road</option>
            <option name="RuralRoad">Rural Road</option>
            <option name="BorderRoad">Border Road</option>
          </select>
          <br/>
          <p className='validErrors'>{formErrors.roadType}</p> 
          <br/> 
          <label htmlFor="paveRate">Rate Pavement Condition</label>
          <input type="number" id="paveRate" name="paveRate" value={formValues.paveRate} onChange={handleChange} placeholder="Rate Pavement Condition b/w 1-10 where 1 is worst and 10 is best" max="10" min="1" /><br/>
          <p className='validErrors'>{formErrors.paveRate}</p>
          <br/>



          <label htmlFor="describe">Describe the condition</label>
          <textarea id="describe" name="describe" value={formValues.describe} onChange={handleChange} placeholder="Explain the problem here..."  ></textarea><br />
          <p className='validErrors'>{formErrors.describe}</p>
          <br/>

          <br/>
          <h4>Upload a picture of your road:</h4><br />
          <div className='form_content'>
            <input type="file" name="file" className="up_btn" />
            <input type="button" name="upload" value="Upload" />
          </div>
          <br />

          {/* <hr />
          <br /> */}

          <hr className='hr' />
          <br />
          
          {Object.keys(formErrors).length === 0 && isSubmit ? (
            <div className="ui message success">Thank you for reporting! </div>
          ) : (
            <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
          )}
          <br />

          <div className='finalBtn'>
            <input type="submit" value="Submit" />&nbsp; &nbsp;
            <input type="Reset" value='Reset' onClick={handleReset} />
            {/* <input type='reset' onClick={resetForm} /> */}
          </div>

        </form>

        {/* submit dialog */}


      </div>
    </div>
  )
}

export default FormOne

