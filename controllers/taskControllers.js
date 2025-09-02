import { Task } from "../models/Task.js";

const createTask = async (req, res) => {
  try {
    if (!req.body) res.status(400).json({ message: "Body cannot be empty" });

    const task = await Task.create(...req.body, {
      project: req.params.projectId,
    });

    res.status(201).json({ message: "Task successfully created" }, task);
  } catch (err) {
    console.log(err);
    res.status(500).json({ err: err.message });
  }
};

const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ project: req.params.projectId });

    if (tasks.length === 0)
      return res.status(404).json({ message: "No tasks found" });

    res.json(tasks);
  } catch (err) {
    console.log(err);
    res.status(500).json({ err: err.message });
  }
};

export default { createTask, getTasks };
