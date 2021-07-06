const router = require('express').Router()
const postCtrl = require('../controllers/postCtrl')
const auth = require('../middleware/auth')

//gets and posts texts made from users
router.route('/posts')
    .get(postCtrl.getPosts)
    .post(auth, postCtrl.createPost)

//deletes specific posts
router.route('/posts/:id')
    .delete(auth, postCtrl.deletePost)
    

module.exports = router