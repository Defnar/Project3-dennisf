import { Project } from "../models/Project.js";


export const authEditMiddleware = async (req, res, next) => {
   try {
        const project = await Project.findById(req.params.id);

        if (project && project.user == req.user._id)
            req.project = project
        
        next();
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({error: err.message})
    }
}