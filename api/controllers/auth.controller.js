import User from '../models/user.model.js'
import bcryptjs from 'bcrypt'

export const signup = async (req, res, next) => {
  const { userName, email, password } = req.body;

  try {
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({ userName, email, password: hashedPassword });
    console.log(newUser);
    await newUser.save()
    res.status(201).json({ message: "User created succesfully" })
  } catch (error) {
    next(error)
  }
};