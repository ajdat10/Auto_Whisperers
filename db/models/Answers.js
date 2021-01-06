const {Schema} = require('mongoose')

module.exports = new Schema(
    {
        answersContent: {
            type: String,
            required: true
        },
        questionsContent: {
            type: Schema.Types.ObjectId,
            ref: 'questions'
        },
        user_id: {
            type: Schema.Types.ObjectId,
            ref: 'users'
        }
    }
)