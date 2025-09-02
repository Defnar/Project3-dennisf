import { Task } from "../models/Task.js";

const createTask = async (req, res) => {
  try {
    if (!req.body) res.status(400).json({ message: "Body cannot be empty" });

    const task = await Task.create(...req.body, { project: req.project._id });

    res.status(201).json({ message: "Task successfully created" }, task);
  } catch (err) {
    console.log(err);
    res.status(500).json({ err: err.message });
  }
};

export default {createTask}
