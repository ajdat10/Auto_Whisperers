import React, { Component } from 'react'
import TextInput from '../components/TextInput'
import { __RegisterUser } from '../services/UserServices'
import {Link} from 'react-router-dom'
import '../styles/SignUp.css'

export default class Signup extends Component {
  // TODO Integrate Auth
  constructor() {
    super()
    this.state = {
      username: '',  
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    }
  }

  handleChange = ({ target }) => {
    this.setState({[target.name]: target.value,  })
    console.log(this.state)
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await __RegisterUser(this.state)
      this.props.history.push('/login')
    } catch (error) {
      console.log(error)
    }
  }
  render() {
    const { firstName, lastName, username, password, email } = this.state
    return (
      <div className='signup' container justify="center" style={{textAlign: 'center', marginTop: '-300px', padding: '400px'}} className="signup ">
        
        <form className="flex-col" onSubmit={this.handleSubmit}>
            <TextInput
              placeholder="Create Username"
              type="text"
              name="username"
              value={username}
              onChange={this.handleChange}
              autoComplete="false"
            />
            <TextInput
              placeholder="Password"
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
              autoComplete="false"
            />
          <TextInput
            placeholder="First Name"
            type="text"
            name="firstName"
            value={firstName}
            onChange={this.handleChange}
            autoComplete="false"
          />
          <TextInput
            placeholder="Last Name"
            type="text"
            name="lastName"
            value={lastName}
            onChange={this.handleChange}
            autoComplete="false"
          />
          <TextInput
            placeholder="Your Email"
            name="email"
            value={email}
            type="email"
            onChange={this.handleChange}
            autoComplete="false"
          />
          
          <button className="btn waves-effect waves-light red darken-3" type="submit" name="action">Sign Up
            <i className="material-icons right">directions_car</i>
          </button>
        </form>
      </div>
    )
  }
}
