import express from "express";
const app = express();
export default app;

app.get("/", (req, res) => {
  res.send("Welcome to the Fullstack Employees API.");
});

app.use((req, res, next) => {
  console.log(`${req.method} ${req.originalUrl}`);
  next();
});

app.use(express.json());

import employeesrouter from "#api/employees";
app.use("/employees", employeesrouter);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send("Sorry! Something went wrong : (");
});
