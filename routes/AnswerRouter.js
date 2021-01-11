const Router = require('express').Router()
const AnswerController = require('../controllers/AnswerController')

Router.post('/:post_id/user/:user_id', AnswerController.CreateAnswer)
Router.get('/:post_id', AnswerController.GetAnswerById)
Router.get('/', AnswerController.GetAnswers)
Router.delete('/:post_id/delete/:answer_id', AnswerController.DeleteAnswer)
Router.put('/:answer_id', AnswerController.UpdateAnswer)


module.exports = Router
