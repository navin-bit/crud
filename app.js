require("dotenv").config();

const express = require("express");
const { employeeRouter } = require("./routes/employeeRoutes");
const { connectMongoDB } = require("./config/db");

const app = express();
const port = process.env.PORT || 3000;

//Database configuration
connectMongoDB(process.env.MongoDB_URL);

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//employee api routes
app.use("/api/employees", employeeRouter);

//home route
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => console.log(`http://localhost:${port}`));
