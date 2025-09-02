import { signToken } from "../auth/auth.js";
import { User } from "../models/User.js";

const logIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      return res.status(400).json({ message: "email/password missing" });

    const user = await User.findOne({ email: email });

    if (!user || !user.isCorrectPassword(password))
      return res.status(401).json({ message: "email/password mismatch" });

    const token = signToken(user);

    res.json({ token, user });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};

const register = async (req, res) => {
  try {
    if (!req.body)
      return res.status(400).json({ message: "cannot receive empty body" });

    const user = await User.create(req.body);

    res.status(201).json({ message: "Successfully created user!", user });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

export default { logIn, register };
