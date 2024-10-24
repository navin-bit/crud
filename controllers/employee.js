const { employeeModel } = require("../models/employee");

//get all employees
const getAllEmployees = async (req, res) => {
  try {
    employees = await employeeModel.find();
    return res.json({ employees });
  } catch (error) {
    return res.json({ error: error });
  }
};

//post  employee
const postEmployee = async (req, res) => {
  try {
    employee = await new employeeModel(req.body);

    employee.save();
    return res.json({ message: "add employee successfully" });
  } catch (error) {
    return res.json({ error: error });
  }
};

//get employee  by id
const getEmployeeById = async (req, res) => {
  const { id } = req.params;
  try {
    employee = await employeeModel.findById(id);
    if (!employee) {
      return res.json({ message: "Employee not found" });
    }
    return res.json({ employee });
  } catch (error) {
    return res.json({ error: error });
  }
};

//update employee by id
const updateEmployeeById = async (req, res) => {
  const { id } = req.params;
  try {
    employee = await employeeModel.findByIdAndUpdate(id, req.body);
    if (!employee) {
      return res.json({ message: "Employee not found" });
    }
    return res.json({ message: "update employee successfully" });
  } catch (error) {
    return res.json({ error: error });
  }
};

//delete employee by id
const deleteEmployeeById = async (req, res) => {
  const { id } = req.params;
  try {
    employee = await employeeModel.findByIdAndDelete(id);
    return res.json({ message: "delete employee successfully" });
  } catch (error) {
    return res.json({ error: error });
  }
};

//delete all employees
const deleteAllEmployees = async (req, res) => {
  try {
    await employeeModel.deleteMany({});

    return res.json({ message: "delete all employees successfully" });
  } catch (error) {
    return res.json({ error: error });
  }
};

module.exports = {
  getAllEmployees,
  getEmployeeById,
  postEmployee,
  updateEmployeeById,
  deleteEmployeeById,
  deleteAllEmployees,
};
