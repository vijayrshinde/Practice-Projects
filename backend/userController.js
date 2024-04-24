const userModel = require("./userModal");
const catchAsyncErrors = require("./middlewares/catchAsyncErrors");
const sendToken = require("./utils/jwtTokens");
const ErrorHandler = require("./utils/errorHandler");

// register user
exports.registerUser = catchAsyncErrors(async (req, res, next) => {
  const { name, email, password, dob } = req.body;

  const user = await userModel.create({
    name,
    email,
    password,
    dob,
  });

  sendToken(user, 200, res);
});

// login user
exports.loginUser = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password)
    return next(new ErrorHandler("Please enter your email and password", 401));

  const user = await userModel.findOne({ email }).select("+password");
  if (!user) {
    return next(new ErrorHandler("Invalid email or password", 401));
  }

  const isPasswordMatched = await user.comparePassword(password);
  if (!isPasswordMatched)
    return next(new ErrorHandler("Invalid email or password!", 401));

  sendToken(user, 200, res);
});

// logout
exports.logoutUser = catchAsyncErrors(async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: false,
  });
  res.status(200).json({
    success: true,
    message: "Logged Out",
  });
});

