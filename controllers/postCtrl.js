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
            const{username, post, images} = req.body;

            const acc = await User.findOne({username})
            if(acc) return res.status(200).json({msg: 'You made a post'})
            if(!acc) return res.status(404).json({"msg": 'User does not exist'})

            const newPost = new Posts({
                username, post, images
            })
            //Save Post to MongoDB
            await newPost.save()
            res.json({accesstoken})
        
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