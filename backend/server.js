const app = require("./app");
const connectDatabase = require("./config/database");

// uncaught error
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Uncaught Exception`);

  process.exit(1);
});

if (process.env.NODE_ENV !== "PRODUCTION") {
  require('dotenv').config({ path: "backend/config/config.env" });
}

connectDatabase();

const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

// unhandled promise rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Unhandled Promise Rejection`);

  server.close(() => {
    process.exit(1);
  });
});
