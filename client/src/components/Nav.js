import React from 'react'
import {Link} from 'react-router-dom'

const Nav = (props) => {
    // console.log(props.currentUser)
    return (
        <nav>
          <div className="nav-wrapper  red darken-3">
            <Link className="nav-active brand-logo center" to="/" >Auto Whisperers</Link>
            {props.currentUser ? 
              <ul id="nav-mobile" className="right">
                <li><Link className="nav-active" to="#">Sign Out</Link></li>
                <li><Link className="nav-active" to="/main">Questions Asked</Link></li>
                <li><Link className="nav-active" to="/profile">{props.currentUser.username}</Link></li>
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