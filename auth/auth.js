import jwt from "jsonwebtoken";

const secret = process.env.JWT_SECRET;
const expiration = "30m";

export const authMiddleware = (req, res, next) => {
  let token = req.body?.token || req.query.token || req.headers.authorization;

  if (req.headers.authorization) {
    token = token.split(" ").pop().trim();
  }

  if (!token) {
    return req;
  }

  try {
    const { data } = jwt.verify(token, secret, { maxAge: expiration });
    req.user = data;
  } catch {
    console.log("invalid token");
    res.status(401).json({ message: "invalid token" });
  }

  next();
};

export const signToken = (user) => {
  const payload = {
    _id: user._id,
    username: user.username,
    email: user.email,
  };

  return jwt.sign({data: payload}, secret, { expiresIn: expiration });
};
