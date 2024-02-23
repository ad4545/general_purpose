const getAllPaths = require("../controllers/retrieve/getPaths");
const getAllPoses = require("../controllers/retrieve/getPoses");
const getAllTasks = require("../controllers/retrieve/getTasks");
const auth = require("../middlewares/auth");

const router = require("express").Router();

router.get("/paths", getAllPaths);
router.get("/poses", getAllPoses);
router.get("/tasks", getAllTasks);

module.exports = router;
