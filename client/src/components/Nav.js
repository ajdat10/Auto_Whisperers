import React from 'react'
import {Link} from 'react-router-dom'

const Nav = (props) => {
    console.log(props.currentUser)
    return (
        <nav>
          <div className="nav-wrapper grey darken-4">
            <Link className="nav-active brand-logo center" to="/" >Auto Whisperers</Link>
            {props.currentUser ? 
              <ul id="nav-mobile" className="right">
                <li><Link className="nav-active" to="#">Sign Out</Link></li>
                <li><Link className="nav-active" to="/feed">Feed</Link></li>
                <li><Link className="nav-active" to="/profile">{props.currentUser.name}</Link></li>
              </ul>
            :
              <ul id="nav-mobile" className="right">
                <li><Link className="nav-active" to="/login">Sign In</Link></li>
                <li><Link className="nav-active" to="/register">Sign Up</Link></li>
              </ul>
            }
          </div>
        </nav>
    )
  }
  
  export default Nav