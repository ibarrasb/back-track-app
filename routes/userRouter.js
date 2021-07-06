const router = require('express').Router()
const userCtrl = require('../controllers/userCtrl')
const auth = require('../middleware/auth')

//register a new user
router.post('/register', userCtrl.register)

//logs user from db
router.post('/login', userCtrl.login)

//logs user out from session
router.get('/logout', userCtrl.logout)

//gets refresh token to keep user authenticated
router.get('/refresh_token', userCtrl.refreshToken)

//retrieves information from db of the specific user
router.get('/infor', auth,  userCtrl.getUser)

//adds posts made to the User API
router.patch('/addpost', auth, userCtrl.addPost)

module.exports = router