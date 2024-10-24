const express = require("express");
const {
  getAllEmployees,
  getEmployeeById,
  postEmployee,
  updateEmployeeById,
  deleteEmployeeById,
  deleteAllEmployees,
} = require("../controllers/employee");

const employeeRouter = express.Router();

// all employee routes

employeeRouter.get("/all", getAllEmployees);
employeeRouter.get("/:id", getEmployeeById);
employeeRouter.post("/add", postEmployee);
employeeRouter.put("/update/:id", updateEmployeeById);
employeeRouter.delete("/delete/:id", deleteEmployeeById);
employeeRouter.delete("/delete-all", deleteAllEmployees);

module.exports = {
  employeeRouter,
};
