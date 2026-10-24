import express from "express";
const router = express.Router();
export default router;

import {
  createEmployee,
  getEmployees,
  getEmployee,
} from "#db/queries/employees";

//POST Create a employee
router.post("/", async (req, res) => {
  if (!req.body) return res.status(400).send("Request must have a body.");
  const { name, birthday, salary } = req.body;

  if (!name || !birthday || !salary)
    return res
      .status(400)
      .send("Request body must have a name, birthday, and salary.");
  const employee = await createEmployee({ name, birthday, salary });
  res.status(201).send(employee);
});

//GET  all employees
router.get("/", async (req, res) => {
  const employees = await getEmployees();
  res.send(employees);
});

// GET :id

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const employee = await getEmployee(+id);

  if (!employee)
    return res.status(404).send(`Employee with #${id} does not exist.`);

  res.send(employee);
});
