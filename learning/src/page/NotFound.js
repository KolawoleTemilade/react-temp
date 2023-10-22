import React from 'react'
import {Link} from 'react-router-dom/'
import './home.css'

export default function NotFound() {
  return (
    <div className='pagenotfound'>
        <div className='error-msg'>
      <h1>404</h1>
      </div>
      <div className='error-msg2'>
       <h3>Oops!!! page not found.</h3>
         <p>The requested page was not found.</p>
         <button>
          <Link path= '/' className ='error-btn'>Go Back to Home.</Link>
         </button>
         </div>
    </div>
  )
}