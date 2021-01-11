import React, { Component } from 'react'
import TextInput from '../components/TextInput'
import { __UploadPost } from '../services/PostServices'
import '../styles/Create.css'

export default class CreatePost extends Component {
  constructor() {
    super()
    this.state = {
        questionsContent: ''
    }
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value })
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await __UploadPost(this.state, this.props.currentUser._id)
      this.props.history.push('/main')
    } catch (error) {
      console.log(error)
    }
  }

  render() {
      console.log(this.props)
    const { questionsContent } = this.state
    return (
      <div className="upload content">
        <form className="flex-col white" onSubmit={this.handleSubmit}>
          <TextInput
            
            placeholder="Create Question"
            fieldType="textfield"
            name="questionsContent"
            value={questionsContent}
            onChange={this.handleChange}
            
          />
          <button type="submit">Upload</button>
        </form>
      </div>
    )
  }
}
