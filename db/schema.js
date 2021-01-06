const { model } = require('mongoose')

const UserSchema = require('./models/User')
const QuestionSchema = require('./models/Questions')
const AnswerSchema = require('./models/Answers')

const User = model('users', UserSchema)
const Question = model('questions', QuestionSchema)
const Answer = model('answers', AnswerSchema)

module.exports = {
    User,
    Answer,
    Question
} 