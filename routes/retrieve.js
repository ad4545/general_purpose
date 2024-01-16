const getAllPaths = require("../controllers/retrieve/getPaths");
const getAllPoses = require("../controllers/retrieve/getPoses");
const getAllTasks = require("../controllers/retrieve/getTasks");
const auth = require("../middlewares/auth");

const router = require("express").Router();

router.get("/paths", auth, getAllPaths);
router.get("/poses", auth, getAllPoses);
router.get("/tasks", auth, getAllTasks);

module.exports = router;
