const { updateScheduledTask } = require("../controllers/update/task");

const router = require("express").Router();

router.post('/task/scheduled',updateScheduledTask)

module.exports = router;
