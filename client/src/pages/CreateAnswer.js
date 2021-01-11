import React, { Component } from 'react'
import TextInput from '../components/TextInput'
import {__CreateAnswer} from '../services/AnswerServices'

export default class CreateAnswer extends Component {
    constructor() {
      super()
      this.state = {
        answersContent: ''
      }
    }
  
     
    handleChange = ({ target }) => {
      this.setState({ [target.name]: target.value })
      console.log(this.state)
    }
  
    handleSubmit = async (e) => {
      e.preventDefault()
      try {
          console.log(e)
        await __CreateAnswer(this.state, this.props.currentUser._id, this.props.postId)
        this.props.history.push('/main')
      } catch (error) {
        console.log(error)
      }
    }
  
    render() {
       
      const { answersContent } = this.state
      return (
        <div className="upload content">
          <form className="flex-col" onSubmit={this.handleSubmit}>
            <TextInput
              placeholder="Answer"
              fieldType="textfield"
              name="answersContent"
              value={answersContent}
              onChange={this.handleChange}
            />
            <button type="submit">Answer</button>
          </form>
        </div>
      )
    }
  }
  