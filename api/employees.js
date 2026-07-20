import express from "express";
const employeeRouter = express.Router();
export default employeeRouter;

// TODO: this file!

import { getEmployees } from "#db/queries/employees";

employeeRouter.get("/", async (req, res, next) => {
  try {
    res.send(await getEmployees());
  } catch (err) {
    next(err);
  }
});
