import express from "express";
import employeeRouter from "./api/employees.js";

const app = express();

// TODO: this file!
app.use(express.json());

app.use("/api/employees", employeeRouter);

export default app;
