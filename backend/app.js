const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const errorMiddleware = require("./middlewares/error");
const path = require("path");

const env = process.env.NODE_ENV;
if (env !== "PRODUCTION") {
  require("dotenv").config({ path: "backend/config/config.env" });
}

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

const user = require("./userRoute");

app.use("/api/v1", user);

app.use(express.static(path.join(__dirname, "../frontend/build")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
});

// middleware for errors
app.use(errorMiddleware);

module.exports = app;
