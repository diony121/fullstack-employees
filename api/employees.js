import express from "express";
const employeeRouter = express.Router();
export default employeeRouter;

// TODO: this file!

import { getEmployees, getEmployee, updateEmployee , deleteEmployee} from "#db/queries/employees";

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
      return res.status(404).send("No id found");
    }
    res.send(employee);
  } catch (err) {
    next(err);
  }
});


employeeRouter.put("/:id", async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const {name, birthday, salary} = req.body;
    
    const update = await updateEmployee({id, name, birthday, salary});
  
    if (!update){
      return res.status(404).send("No employ with that id")
    }
    res.send(update)
    
  } catch (error) {
    next(error);
  }

})

employeeRouter.delete("/:id", async (req, res, next) => {
  try {
    const id = Number(req.params.id);

    const deleted = await deleteEmployee(id);

    if (!deleted) {
      return res.status(404).send("No employee found with that ID");
    }

    res.send(deleted);

  } catch (err) {
    next(err);
  }
});
