const getAllPaths = require('../controllers/getPaths')
const getAllPoses = require('../controllers/getPoses')
const getAllTasks = require('../controllers/getTasks')
const auth = require('../middlewares/auth')

const  router = require('express').Router()


router.get('/paths',auth,getAllPaths)
router.get('/poses',auth,getAllPoses)
router.get('/tasks',auth,getAllTasks)


module.exports = router