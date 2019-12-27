import React from 'react'
import { Link } from 'react-router-dom'

const Authentication = () => {
  return (
    <div className='auth-page'>
      <div className='container page'>
        <div className='row'>
          <div className='col-md-6 offset-md-3 col-xs-12'>
            <h1 className='text-xs-center'>Login</h1>
            <p className='text-xs-center'>
              <Link to='register'>Need an account</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Authentication
