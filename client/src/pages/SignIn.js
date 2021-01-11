import React, { Component } from 'react'
import TextInput from '../components/TextInput'
import { __LoginUser } from '../services/UserServices'
import {Link} from 'react-router-dom'
// import '../styles/SignIn.css'
export default class SignIn extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      formError: false
    }
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value, formError: false })
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const loginData = await __LoginUser(this.state)
      // console.log(loginData)
      this.props.toggleAuthenticated(true, loginData.user, () =>
        this.props.history.push('/main')
      )
    } catch (error) {
      this.setState({ formError: true })
    }
  }
  render() {
    const { username, password } = this.state
    return (
      <div container justify="center" style={{textAlign: 'center', marginTop: '-300px', padding: '400px', color: 'white'}} className="signin flex-col">
      
        <form className="flex-col" onSubmit={this.handleSubmit}>
          <TextInput
            placeholder="Your Username"
            name="username"
            type="text"
            value={username}
            onChange={this.handleChange}
            autoComplete="false"
          />
          <TextInput
            placeholder="Password"
            name="password"
            type="password"
            value={password}
            onChange={this.handleChange}
            autoComplete="false"
          />
          <button className="btn waves-effect waves-light red darken-3" type="submit" name="action">Sign In
            <i className="material-icons right">directions_car</i>
          </button>
          {this.state.formError ? <p>Error While Logging In</p> : <p></p>}
        </form>
        
      </div>
      
    )
  }
}
