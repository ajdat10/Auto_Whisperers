const { Question, Answer } = require('../db/schema')

const CreateAnswer = async (req, res) => {
    // console.log(req.body)
    try {
        const answer = new Answer({ ...req.body, user_id: req.params.user_id })
        answer.save()
        await Question.updateMany(
            { _id: req.params.post_id },
            { $push: { answersContent: answer } })
        res.send(answer)
    } catch (error) {
        throw error
    }
}

const GetAnswers = async (req, res) => {
    try {
        const answers = await Answer.find().sort({ createdAt: -1 })
        res.send(answers)
    } catch (error) {
        throw error
    }
}

const GetAnswerById = async (req, res) => {
    try {
        const answer = await Answer.findById(req.params.answer_id).populate([
            {
                model: 'users',
                path: 'user_id',
                select: '_id name'
                
            },
            {
                path: 'questions',
                populate:{
                    path: 'user_id',
                    model: 'users',
                    select: '_id name'
                }
            }
        ])
        res.send(answer)
        console.log(answer)
    } catch (error) {
        throw error
    }
}
// const GetAnswer = async (req, res) => {
//     try{
//         const get_answer = await Answer.findB()
//         res.send(get_answer)
//     }catch(error){
//         throw error
//     }
// }

const DeleteAnswer = async (req, res) => {
    try {
        await Answer.deleteOne({ _id: req.params.answer_id })
        await Question.findByIdAndUpdate(
            { _id: req.params.post_id },
            { $pull: { comments: req.params.comment_id } },
            { upsert: true, new: true },
            (err, updatedPost) => {
                if (err) { console.log(err) }
                res.send(updatedPost)
            }
        )
    } catch (error) {
        throw error
    }
}

const UpdateAnswer = async (req, res) => {
    try {
        const answer = await Answer.findByIdAndUpdate(
            res.params.answer_id,
            {
                ...req.body
            },
            { new: true, useFindAndModify: false },
        )
        res.send(answer)
    } catch (error) {
        throw error
    }
}

module.exports = {
    CreateAnswer,
    GetAnswers,
    GetAnswerById,
    // GetAnswer,
    DeleteAnswer,
    UpdateAnswer
}