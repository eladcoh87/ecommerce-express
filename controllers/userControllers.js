import AsyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import Wish from '../models/wishModel.js';
import bcryptjs from 'bcryptjs';
import jsonwebtoken from 'jsonwebtoken';

//post Method
//REGISTER NEW USER
//public

export const registerUser = AsyncHandler(async (req, res) => {
  const { name, email, password } = req.body.user;

  if (!email || !password) {
    res.status(400);

    throw new Error('no email or no password ');
  }

  const userExsiset = await User.findOne({ email: email });

  if (userExsiset) {
    res.status(400);
    throw new Error('user already exist');
  }

  const salt = await bcryptjs.genSalt(10);
  const hashPass = await bcryptjs.hash(password, salt);

  const user = await User.create({
    name: name,
    email: email,
    password: hashPass,
  });

  const wishList = await Wish.create({
    userId: user._id,
  });

  if (user) {
    res.status(201).json({ success: true, message: 'user created' });
  } else {
    res.status(405);
    throw new Error('invaild user data');
  }
});

// @desc    Auth user & get token
//@route    POST /api/users/login
//@access   Public
export const loginUser = AsyncHandler(async (req, res) => {
  const { email, password } = req.body.user;
  if (!email || !password) {
    res.status(401);
    throw new Error('no email or no password');
  }
  const user = await User.findOne({ email: email });
  if (!user) {
    res.status(401);
    throw new Error('no user found');
  }
  const validPassword = await bcryptjs.compare(password, user.password);

  if (user && validPassword) {
    const newUser = {
      id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: jsonwebtoken.sign({ id: user._id }, process.env.TOKEN_SECRET, {
        expiresIn: '50d',
      }),
    };
    res.status(201).json({ newUser, message: 'login success' });
  } else {
    res.status(401);
    throw new Error('invaild email or passowrd');
  }
});
