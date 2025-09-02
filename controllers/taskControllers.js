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

const getAllTasks = async (req, res) => {
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

const getTask = async (req, res) => {
  try {
    res.json(req.task);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};

const editTask = async (req, res) => {
  try {
    if (!req.body)
      return res.status(400).json({ message: "Body cannot be empty" });

    const task = Object.assign(req.task, req.body);

    await task.save();
    res.json({ message: "task successfully updated" }, task);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};

const deleteTask = async (req, res) => {
  try {
    await req.task.deleteOne();
    res.json({ message: "Project successfully deleted" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};

export default { createTask, getAllTasks, getTask, editTask, deleteTask };
