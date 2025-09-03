export const authMiddleware = (Model, parentKey) => async (req, res, next) => {
  try {
    //grab last parameter out of params
    const idParam = Object.keys(req.params).pop();

    const model = await Model.findById(req.params[idParam]);

    if (model && model[parentKey].equals(req[parentKey]._id))
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
