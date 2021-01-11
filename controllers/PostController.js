const { Question, User, Answer } = require('../db/schema')

const GetPosts = async (req, res) => {
    try {
        const posts = await Question.find().populate([
            {
                model: 'answers',
                path: 'answers',
                

            }
        ])
        res.send(posts)
    } catch (error) {
        throw error
    }
}

const GetUserPosts = async (req, res) => {
    try {
        const userPosts = await Question.find({ user_id: req.params.user_id })
        // .populate([
        //     {
        //         model: 'answers',
        //         path: 'answers',
                
        //     }
        // ])
        res.send(userPosts)
    } catch (error) {
        throw error
    }
}

const CreatePost = async (req, res) => {
    try {
        const newPost = await Question({ ...req.body, user_id: req.params.user_id })
        newPost.save()
        await User.findByIdAndUpdate(
            { _id: req.params.user_id },
            { $push: { questions: newPost } },
            { upsert: true, new: true, useFindAndModify: false }
        )
        res.send(newPost)
    } catch (error) {
        throw error
    }
}

const GetPostById = async (req, res) => {
    try {
        const post = await (await Question.findById(req.params.post_id))
      
        res.send(post)
    } catch (error) {
        throw error;
    }
}

const DeletePost = async (req, res) => {
    try {
        const post = await Question.findById(req.params.post_id)
        await Answer.deleteMany({ _id: { $in: post.answersContent } })
        await Question.findByIdAndDelete(req.params.post_id)
        res.send({ msg: 'Post deleted' })
    } catch (error) {
        throw error
    }
}

const UpdatePost = async (req, res) => {
    try {
        const post = await Question.findByIdAndUpdate(
            req.params.post_id,
            {
                ...req.body
            },
            { new: true, useFindAndModify: false },
        )
        res.send(post)
    } catch (error) {
        throw error
    }
}

module.exports = {
    GetPosts,
    CreatePost,
    GetPostById,
    UpdatePost,
    DeletePost,
    GetUserPosts
}