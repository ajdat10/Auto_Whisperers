const {Schema} = require('mongoose')

module.exports = new Schema(
    {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        username:{
            type: String,
            required: true,
            unique: true
        },
        email: {
            type:String,
            required: true,
            unique: true
        },
        password_digest: {
            type: String,
            required: true
        },
        answers: [{
            type: Schema.Types.ObjectId,
            ref: 'answers'
        }],
        questions: [{
            type: Schema.Types.ObjectId,
            ref: 'questions'
        }]
    },
    {timestamps: true}
)