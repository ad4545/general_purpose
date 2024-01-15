const { Lane } = require("../models/Lane");

const createLane = async (req, res) => {
  try {
    const { name, type, start, end, rotation, width } = req.body;

    if (!name || !type || !start || !end || !rotation || !width)
      return res.status(403).json({ error: "Required data is insufficient" });

    const lane = new Lane({
      name,
      type,
      start,
      end,
      rotation,
      width,
    });

    const saveLane = await lane.save();

    return res
      .status(200)
      .json({ message: "Lane has been saved", pose: saveLane });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

module.exports = { createLane };
