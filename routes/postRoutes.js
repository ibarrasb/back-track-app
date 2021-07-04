const router = require('express').Router()
const postCtrl = require('../controllers/postCtrl')
const auth = require('../middleware/auth')

router.route('/posts')
    .get(postCtrl.getPosts)
    .post(auth, postCtrl.createPost)


router.route('/posts/:id')
    .delete(auth, postCtrl.deletePost)
    

module.exports = router