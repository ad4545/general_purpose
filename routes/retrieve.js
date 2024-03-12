const getAllPaths = require("../controllers/retrieve/getPaths");
const getAllPoses = require("../controllers/retrieve/getPoses");
const {
  getTasksByPage,
  getTasksCount,
  getRecentlyAddedTasks,
} = require("../controllers/retrieve/getTasks");

const router = require("express").Router();

router.get("/paths", getAllPaths);
router.get("/poses", getAllPoses);
router.get("/tasks", getTasksByPage);
router.get("/tasks/count", getTasksCount);
router.get("/tasks/recentlyAdded", getRecentlyAddedTasks);

module.exports = router;
