const { Question, Answer } = require('../db/schema')

const CreateAnswer = async (req, res) => {
    try {
        const answer = new Answer({ ...req.body, user_id: req.params.user_id })
        answer.save()
        await Question.update({ _id: req.params.post_id },
            { $push: { answers: answer } })
        res.send(answer)
    } catch (error) {
        throw error
    }
}

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
    }catch(error){
        throw error
    }
}

const UpdateAnswer = async (req, res) => {
    try{
        const answer = await Answer.findByIdAndUpdate(
            res.params.answer_id,
            {
                ...req.body
            },
            {new: true, useFindAndModify: false},
        )
        res.send(answer)
    }catch (error) {
        throw error
    }
}

module.exports = {
    CreateAnswer,
    DeleteAnswer,
    UpdateAnswer
}