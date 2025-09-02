import { Project } from "../models/Project.js";

const newProject = async (req, res) => {
  if (!req.body)
    return res.status(400).json({ message: "Body cannot be empty" });

  try {
    Object.assign(req.body, { id: req.user._id });
    const project = await Project.create(req.body);

    res.status(201).json({ message: "project successfully created", project });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find({ user: req.user._id });

    if (projects.length === 0)
      return res.json({ message: "No projects found" });

    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: message.err });
    console.log(err);
  }
};

const getProject = async (req, res) => {
  try {
    res.json(req.project);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};

const editProject = async (req, res) => {
  try {
    if (!req.body)
      return res.status(400).json({ message: "Body cannot be empty" });
    const project = Object.assign(req.project, req.body);

    await project.save();
    res.json({ message: "Post successfully updated", project });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};

const deleteProject = async ( req, res) => {
    try {
        await req.project.deleteOne();
        res.json({message: "Project successfully deleted"})
    }
    catch (err) {
        console.log(err);
        res.status(500).json({error: err.message})
    }
}

export default { newProject, getAllProjects, getProject, editProject, deleteProject };
