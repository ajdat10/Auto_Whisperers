import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Home.css'
import Nav from '../components/Nav'

export default (props) => {
  return (

    <div className="home">

      <h1 className="welcome-title center">Welcome to Auto Whisperers</h1>
      <p className="descrip center">
        This site is designed to provide and gain knowledge about your automotive
        vehicle. Once logged in you can surf the many different questions other users have regarding
        specific to their vehicle’s needs. You as the user have the ability to help others by
        going onto their question and giving them an accurate answer.
            </p>

      <div className='buttons' style={{ textAlign: 'center' }}>
        <Link to='/login'>
          <button className="btn waves-effect waves-light red darken-3" style={{ marginRight: '20px' }} name="action">Sign in
            <i className="material-icons right">directions_car</i>
          </button>
        </Link>

        <Link to='/register'>
          <button className="btn waves-effect waves-light red darken-3" to='/login' name="action">Sign Up
            <i className="material-icons right">directions_car</i>
          </button>
        </Link>

      </div>

    </div>




  )
}