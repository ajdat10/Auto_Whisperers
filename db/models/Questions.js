const {Schema} = require('mongoose')

module.exports = new Schema (
    {
        questionsContent: {
            type: String,
            required: true
        },
        user_id:{
            type: Schema.Types.ObjectId,
            ref: 'users'
        },
        answersContent:{
            type: Schema.Types.ObjectId,
            ref: 'answers'
        }
    },
    {timestamps: true}
)