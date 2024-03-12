const Task = require("../../models/Task");

const getTasksByPage = async (req, res) => {
  try {
    const { pageNo = 0, pageSize = 1 } = req.query;

    const tasks = await Task.find()
      .skip(pageNo * pageSize)
      .limit(pageSize);

    if (!tasks) return res.status(403).json({ error: "Tasks are empty" });

    return res.status(200).json(tasks);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getTasksCount = async (req, res) => {
  try {
    const count = await Task.countDocuments();

    if (!count) return res.status(403).json({ message: "Tasks are empty" });

    return res.status(200).json({ count });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};



const getRecentlyAddedTasks = async (req, res) => {
  try {
    const tasks = await Task.find().sort({ createdAt: -1 }).limit(5);

    if (!tasks) return res.status(403).json({ error: "no tasks found" });

    return res.status(200).json(tasks);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { getTasksByPage, getTasksCount, getRecentlyAddedTasks };
