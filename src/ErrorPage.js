import React from 'react'
import { NavLink } from 'react-router-dom'
import "./ErrorPage.css"

const ErrorPage = () => {
  return (
    <div className="outer-box">
        <div className='error-container'>
          <h2 className='heading404'>404</h2>
          <h3 className='error-heading'>UH OH! You're lost.</h3>
          <p className='error-para'>
            The page you are looking for does not exist. How you got here is a
            mystery. But you can click the button below to go back to the
            homepage.
          </p>

          <NavLink to="/">
            <button className='btn continue'>Go Back to Home</button>
          </NavLink>
        </div>
      </div>
  )
}

export default ErrorPage