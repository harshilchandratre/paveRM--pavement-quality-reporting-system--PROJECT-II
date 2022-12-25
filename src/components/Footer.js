import React from 'react'
import './Home.css'
import { NavLink } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'

const Footer = () => {
  return (
    <div>

      <div className="page-footer mt-auto font-small blue bg-dark text-light">
        <div className="footer-copyright text-center py-3">© 2022 Copyright
          <NavLink className="my-brand-name" to="/">&nbsp; PaveRM.com </NavLink>
        </div>
      </div>
    </div>
  )
}


export default Footer