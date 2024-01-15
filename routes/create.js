const { createLane } = require('../controllers/createLane')
const { createPath } = require('../controllers/createPath')
const { createPose } = require('../controllers/createPose')
const createTask = require('../controllers/createTask')
const createZone = require('../controllers/createZone')
const auth = require('../middlewares/auth')

const router = require('express').Router()


router.post('/path',auth,createPath)
router.post('/pose',auth,createPose)

router.post('/task',auth,createTask) 
router.post('/lane',auth,createLane)
router.post('/zone',auth,createZone)




module.exports = router