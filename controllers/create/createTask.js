const Task = require("../../models/Task");

const createTask = async (req, res) => {
  try {
    const { taskName, tasks } = req.body;
    if (!taskName || !tasks)
      return res.status(403).json({ error: "insufficient data" });
    const createTask = new Task({
      taskName,
      tasks,
    });

    const saveTask = await createTask.save();

    return res
      .status(200)
      .json({ message: "Task saved successfully", task: saveTask });
  } catch (error) {
    return res.status(500).json({ error:error.message });
  }
};



module.exports = createTask