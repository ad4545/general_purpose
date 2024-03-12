const Task = require("../../models/Task");

const updateScheduledTask = async (req, res) => {
  try {
    const { taskId, scheduledDate } = req.query;
    const taskUpdated = await Task.findByIdAndUpdate(taskId, {
      lastScheduledAt: scheduledDate,
    });

    if (!taskUpdated)
      return res.status(403).json({ error: "No task found by this Id" });

    return res.status(200).json(taskUpdated);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};



module.exports ={updateScheduledTask}