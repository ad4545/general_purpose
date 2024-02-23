const { createLane } = require("../controllers/create/createLane");
const { createPath } = require("../controllers/create/createPath");
const { createPose } = require("../controllers/create/createPose");
const createTask = require("../controllers/create/createTask");
const createZone = require("../controllers/create/createZone");
const auth = require("../middlewares/auth");

const router = require("express").Router();

router.post("/path", createPath);
router.post("/pose", createPose);

router.post("/task", createTask);
router.post("/lane", createLane);
router.post("/zone", createZone);

module.exports = router;
