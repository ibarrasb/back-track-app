const router = require('express').Router()
const postCtrl = require('../controllers/postCtrl')
const replyCtrl = require('../controllers/replyCtrl')
const auth = require('../middleware/auth')

//gets and posts texts made from users
router.route('/posts')
    .get(postCtrl.getPosts)
    .post(auth, postCtrl.createPost)

//deletes specific posts
router.route('/posts/:id')
    .delete(auth, postCtrl.deletePost)

//gets replies and makes replies
router.route('/reply')
    .get(replyCtrl.getReply)
    .post(auth, replyCtrl.createReply)

//deletes specific replies
router.route('/reply/:id')
    .delete(auth, replyCtrl.deleteReply)

    

module.exports = router