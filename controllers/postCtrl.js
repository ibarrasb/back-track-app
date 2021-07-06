const Posts = require('../models/postModels');
const User = require('../models/userModel');

//user controller for authentication
const postsCtrl = {

getPosts: async(req, res) =>{
        try {
            const posts = await Posts.find()
            res.json(posts)
    
            
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
},
createPost: async(req,res) => {
        try{
            const{id, name, username, post} = req.body;

            const acc = await User.findOne({username})
            
            const newPost = new Posts({
                id, name, username, post
            })
            await newPost.save()
            
            res.json({msg: "Created a post"})
        
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
},
deletePost: async(req, res) => {
    try {
        await Posts.findByIdAndDelete(req.params.id)
            res.json({msg: "Deleted a Product"})
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }

}
}

module.exports = postsCtrl