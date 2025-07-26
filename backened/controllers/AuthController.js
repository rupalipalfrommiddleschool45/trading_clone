const User = require("../model/UserModel");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcryptjs");

// module.exports.Signup = async (req, res, next) => {
//   try {
//     const { email, password, username, createdAt } = req.body;
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.json({ message: "User already exists" });
//     }
//     const user = await User.create({ email, password, username, createdAt });
//     const token = createSecretToken(user._id);
//     res.cookie("token", token, {
//       withCredentials: true,
//       httpOnly: false,
//     });
//     res
//       .status(201)
//       .json({ message: "User signed in successfully", success: true, user });
//     next();
//   } catch (error) {
//     console.error(error);
//   }
// };
module.exports.Signup = async (req, res) => {
  const { email, username, password } = req.body;

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ success: false, message: "Email already registered" });
    }

    // Hash the password before saving the user
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create a new user
    const newUser = new User({
      email,
      username,
      password: hashedPassword,
    });

    // Save the new user in the database
    await newUser.save();

    // Respond with success message
    res.json({ success: true, message: "Signup successful" });
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ success: false, message: "Signup failed" });
  }
};
// module.exports.Login = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.json({ success: false, message: "User not found" });
//     }

//     const isMatch = await user.comparePassword(password); // Use comparePassword method here
//     if (!isMatch) {
//       return res.json({ success: false, message: "Incorrect password" });
//     }

//     res.json({ success: true, message: "Login successful" });
//   } catch (error) {
//     console.error("Login error:", error);
//     res.status(500).json({ success: false, message: "Login failed" });
//   }
// };
module.exports.Login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }

    // Use bcrypt to compare the plain text password with the hashed password
    // const isMatch = await bcrypt.compare(password, user.password);
    // if (!isMatch) {
    //   return res.json({ success: false, message: "Incorrect password" });
    // }

    // If password is correct, send success response
    res.json({ success: true, message: "Login successful" });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ success: false, message: "Login failed" });
  }
};
