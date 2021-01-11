import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { __GetPosts } from '../services/PostServices'
import { __GetAnswers } from '../services/AnswerServices'
import CreateAnswer from '../pages/CreateAnswer'
import Answers from '../components/Answers'
import '../styles/Main.css'

export default class MainPage extends Component {
    constructor() {
        super()
        this.state = {
            posts: [],
            username: '',
            answers:[],
            currentPage: 1
        }
    }

    componentDidMount() {
        this.getPosts()
    }

    getAnswers = async () => {
        try{
            const answers = await __GetAnswers(this.state.posts.postId)
            this.setState({answers: [...this.state.answers, ...answers]})
            console.log(answers)
        }catch(error){
        throw(error)
      }
    }
    getPosts = async () => {
        try {
            const posts = await __GetPosts(this.state.currentPage)
            this.setState({ posts: [...this.state.posts, ...posts] })
            
        } catch (error) {
            console.log(error)
        }
    }

    CreateAnswer = async () => {
        this.props.history.push('/create')
    }

    incrementPage = () =>
        this.setState(
            (prevstate) => ({ currentPage: prevstate.currentPage + 1 }),
            () => this.getPosts()
        )
    render() {
        const { posts } = this.state
        console.log("Check here", this.state)

        return (
            <div>
                <Link to="/upload" style={{textAlign: 'center'}}>
                    <button className="buttons" >Create Question</button>
                </Link>
                <div className="row">
                    {posts.length ? (
                        posts.map((post, index) => (
                            <div className="post col s12 m6" key={index}>
                                <div className="card" style={{backgroundColor: '#222222', color: 'white'}} >
                                    <div >
                                        <h6 style={{ margin: '15px', padding: '5px' }}> {this.props.currentUser.username}: </h6>
                                        <p className="card-image center">{post.questionsContent} </p>
                                    </div>
                                    <div className="card-content" style={{color: 'white'}}>
                                        <Answers post={post}/>
                                        <CreateAnswer {...this.props}
                                            currentUser={this.props.currentUser}
                                            postId={post._id}
                                            post={post} />
                                        <div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                            <h3>Loading . . . . .</h3>
                        )
                    }
                </div>
            </div>
        )
    }
}
