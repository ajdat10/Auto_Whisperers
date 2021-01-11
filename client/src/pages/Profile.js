import React, { Component } from 'react'
import { __DeletePost } from '../services/PostServices'
import { __GetProfile } from '../services/UserServices'
import UpdatePost from "../pages/UpdatePost"
// import "../styles/Profile.css"

export default class Profile extends Component {
  constructor() {
    super()
    this.state = {
      postFetchError: false,
      post: null,
      updating: false,
      user: null,
      posts: []
    }
  }

  componentDidMount() {
    this.getPosts()
  }

  getPosts = async () => {
    try {
      console.log(this.props)
      const profileData = await __GetProfile(this.props.currentUser._id)
      this.setState({ posts: profileData.posts, user: profileData.user})
    } catch (error) {
      this.setState({ postFetchError: true })
    }
  }

  deletePost = async (id) => {
    try {
      await __DeletePost(id)
      this.getPosts()
    } catch (error) {
      console.log(error)
    }
  }



  render(){
    console.log(this.state)
    const {user, posts, updating} = this.state
    const questions = posts.map((question, index) =>{
      return(
        <div className="post col s12 m6" key={index}> 
            <div className="card">
                <div className="card-image center">
                    <p>{question.questionsContent}</p>
                    <div>
                      <button 
                      className="btn-floating halfway-fab waves-effect waves-light red"
                      onClick={()=>{this.deletePost(question._id)}}
                      >
                        <i className="material-icons">delete</i>
                      </button>
                    </div>
                </div>
                <div className="card-content">
                    <button 
                    className="btn-floating halfway-fab waves-effect waves-light teal darken-4"
                    onClick={()=>{this.setState({updating: true, post: question})}}
                    >
                      <i className="material-icons">create</i>
                    </button>
                </div>
            </div>   
        </div>
      )
    })
    return(
      <div className="profile">
      {user ?
        <div>
          {updating ?
          <UpdatePost {...this.props}
          post={this.state.post}
          />
          :
          <div>
            <h3 className='profile' style={{color: 'red'}}>{user.firstName}, Here are your questions:</h3>
            <div>
              <div className="row">
                {questions}
              </div>
            </div>
          </div>
          }
        </div>
      :
        <h3>Loading...</h3>
      }
      </div>
    )
    }
}