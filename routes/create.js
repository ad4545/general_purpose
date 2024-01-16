const { createLane } = require("../controllers/create/createLane");
const { createPath } = require("../controllers/create/createPath");
const { createPose } = require("../controllers/create/createPose");
const createTask = require("../controllers/create/createTask");
const createZone = require("../controllers/create/createZone");
const auth = require("../middlewares/auth");

const router = require("express").Router();

router.post("/path", auth, createPath);
router.post("/pose", auth, createPose);

router.post("/task", auth, createTask);
router.post("/lane", auth, createLane);
router.post("/zone", auth, createZone);

module.exports = router;
