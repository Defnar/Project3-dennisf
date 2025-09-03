export const middleware = (Model) => async (req, res, next) => {
  try {
    //grab last parameter out of params
    const idParam = Object.keys(req.params).pop();

    const model = await Model.findById(req.params[idParam]);

    const parentKeys = {
      Project: "user",
      Task: "project",
    };

    const key = parentKeys[Model.modelName];

    if (model && model[key].equals(req[key]._id))
      req[Model.modelName.toLowerCase()] = model;

    next();
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: err.message });
  }
};

export const checkMiddlewareAuth = (Model) => (req, res, next) => {
  if (!req[Model.modelName.toLowerCase()])
    return res.status(403).json({
      message: `Unauthorized to interact with ${Model.modelName.toLowerCase()}`,
    });
  next();
};
