const Task = require("../models/Task");

const createTask = async (req, res) => {
  try {
    const { name, subTasks } = req.body;
    if (!name || !subTasks)
      return res.status(403).json({ error: "insufficient data" });
    const createTask = new Task({
      name,
      subTasks,
    });

    const saveTask = await createTask.save();

    return res
      .status(200)
      .json({ message: "Task saved successfully", task: saveTask });
  } catch (error) {
    return res.status(500).json({ error });
  }
};


module.exports = createTask