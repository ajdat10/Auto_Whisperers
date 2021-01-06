const {Schema} = require('mongoose')

module.exports = new Schema (
    {
        questionContent: {
            type: String,
            required: true
        },
        user_id:{
            type: Schema.Types.ObjectId,
            ref: 'users'
        },
        answers:{
            type: Schema.Types.ObjectId,
            ref: 'answers'
        }
    },
    {timestamps: true}
)