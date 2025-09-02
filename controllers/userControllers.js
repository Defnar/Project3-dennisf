import { signToken } from "../auth/auth";
import { User } from "../models/User";

export const logIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      return res.status(400).json({ message: "email/password missing" });

    const user = await User.findOne({ email: email });

    if (!user || !user.isCorrectPassword(password))
      return res.status(401).json({ message: "email/password mismatch" });

    signToken(user);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};
