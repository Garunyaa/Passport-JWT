require("dotenv").config();
import mongoose from "mongoose";
import express from "express";
import studentsRoute from "./routes/student-routes";
import teachersRoute from "./routes/teacher-routes";

const app = express();
const port = process.env.PORT || 4000;

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/Management", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connected");
  })
  .catch((error) => {
    console.log("DB Connection error", error);
  });

//   Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/students", studentsRoute);
app.use("/api/teachers", teachersRoute);
app.use((req, res, next) => {
  return res.status(404).send("Requested route not found");
});

// Starting the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
