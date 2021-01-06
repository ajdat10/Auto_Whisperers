const Router = require('express').Router()

const UserRouter = require('./UserRouter')
const QuestionRouter = require('./QuestionRouter')
const AnswerRouter = require('./AnswerRouter')

Router.use('/users', UserRouter)
Router.use('/posts', QuestionRouter)
Router.use('/answers', AnswerRouter)

module.exports = Router
