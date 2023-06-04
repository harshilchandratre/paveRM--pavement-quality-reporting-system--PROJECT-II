// import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

import { NavLink } from 'react-router-dom';

// import image1 from './image1.jpg';
// import './login.css'
// import './Home.css'

const Login = () => {
    return (
        <div className="backgroundlogin">
            <div class="containerlogin">
        <form action="#" method="post" name="loginRequest" onsubmit="return validateForm()">
            <table cellpadding="8" cellspacing="28" align="center">
                <tr>
                    <td colspan="2">
                        <h1 align="center" id="loginhead">Sign in! <br/><span>
                                <hr/>
                            </span></h1>

                    </td>
                </tr>
                <tr>
                    <td width="50%">E-mail</td>
                    <td><input class="loginField" type="text" name="login_email" placeholder="Enter your email" required /></td>
                </tr>
                <tr>
                    <td width="50%">Password</td>
                    <td><input class="loginField" type="password" name="login_password" placeholder="Enter your password" required /></td>
                </tr>
                <tr>
                    <td colspan="2" width="50%"><NavLink to="Register.html" id="fpass">New to platform? Click here to
                            register.</NavLink>
                    </td>



                </tr>
                <tr>
                    <td align="center"><button class="btn1" type="reset">Reset</button></td>
                    <td align="center"><button class="btn2" type="submit">Submit</button></td>
                </tr>
                    <tr>
                    <td><span><hr/></span></td>
                    <td><NavLink id="fsign" to="#">New to site? Click here to sign up!</NavLink></td>
                </tr>
            </table>
        </form>
    </div>

        </div>
    )
}

export default Login