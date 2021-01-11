import React, { Component } from 'react'
import TextInput from '../components/TextInput'
import { __UpdatePost } from '../services/PostServices'

export default class CreatePost extends Component {
  constructor(props) {
    super(props)
    this.state = {
    questionsContent: this.props.post.questionsContent    
  }}

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value })
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await __UpdatePost(this.state, this.props.post._id)
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
      <form className="flex-col" onSubmit={this.handleSubmit}>
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
