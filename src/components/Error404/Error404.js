import React from 'react'
import { NavLink } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import '../Home.css'

const Error404 = () => {
  return (
    <div id="notfound">
        <div className="notfound">
            <div className="notfound-404">
                <h1>404</h1>
            </div>
            <h2>We are sorry, page not found!</h2>
            <p className="mb-5">
                The page you're looking for might have been removed, or please check your url.
            </p>
            <NavLink className="linktohome" to="/">HomePage</NavLink>
            
        </div>
    </div>
  )
  
}

export default Error404