import express from "express";
const router = express.Router();
export default router;

import { createEmployee } from "#db/queries/employees";

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
