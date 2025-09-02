import { Project } from "../models/Project.js";
import { Task } from "../models/Task.js";

//project middlewares
export const authEditMiddleware = async (req, res, next) => {
  try {
    const project = await Project.findById(req.params.projectId);

    if (project && project.user == req.user._id) req.project = project;

    next();
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: err.message });
  }
};

export const checkProjectMiddleware = (req, res, next) => {
  if (!req.project)
    return res
      .status(403)
      .json({ message: "Unauthorized to interact with project" });
  next();
};

//task middlewares

export const taskMiddleware = async (req, res, next) => {
  try {
    const task = await Task.findById(req.params.taskId);

    if (task && task.project === req.params.projectId) req.task = task;

    next();
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: err.message });
  }
};

export const checkTaskMidleware = (req, res, next) => {
  if (!req.task)
    return res
      .status(403)
      .json({ message: "Unauthorized to interact with task" });
  next();
};
