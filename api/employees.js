import express from "express";
const employeeRouter = express.Router();
export default employeeRouter;

// TODO: this file!

import { getEmployees, getEmployee } from "#db/queries/employees";

employeeRouter.get("/", async (req, res, next) => {
  try {
    res.send(await getEmployees());
  } catch (err) {
    next(err);
  }
});

employeeRouter.get("/:id", async (req, res, next) => {
  try {
    const id = Number(req.params.id);  // ← Convert to number
    const employee = await getEmployee(id);
    if (!employee) {
      return res.status(404).send("No employee found with that ID");
    }
    res.send(employee);
  } catch (err) {
    next(err);
  }
});