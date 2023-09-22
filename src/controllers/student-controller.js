import { Student } from "../models/student-model";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const studentSignup = async (req, res) => {
  try {
    const otp = Math.floor(100000 + Math.random() * 900000);
    req.body.otp = otp;
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const studentData = {
      name: req.body.name,
      id: req.body.id,
      phone: req.body.phone,
      otp: req.body.otp.toString(),
      password: hashedPassword,
    };

    const student = new Student(studentData);
    await student.save();

    const token = jwt.sign(studentData, process.env.SECRET_KEY, {
      expiresIn: "1h",
    });
    // console.log(studentData);
    await student.save();
    res.status(200).json({ message: "OTP sent successfully", otp, token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const verifyOTP = async (req, res) => {
  try {
    const student = await Student.findOne({ phone: req.body.phone });
    if (student && req.body.otp === student.otp) {
      student.otp = "";
      await student.save();
      res.status(200).json({ message: "OTP verified successfully" });
    } else {
      res.status(400).json({ message: "Invalid OTP" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const studentLogin = async (req, res) => {
  try {
    const student = await Student.findOne(req.body).select({
      name: 1,
      _id: 1,
      phone: 1,
      marks: 1,
      calculation: 1,
    });
    return res.status(200).json({
      status: true,
      message: "Login Successful",
      data: student,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find({});
    console.log(students.length);
    if (students.length !== 0) {
      res.status(200).json(students);
    } else {
      res.status(404).send("Students not found");
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getStudentById = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) {
      return res.status(404).json({ error: "Student not found" });
    }
    res.status(201).json(student);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const deleteStudent = async (req, res) => {
  try {
    const deletedStudent = await Student.findByIdAndDelete(req.params.id);
    if (!deletedStudent) {
      return res.status(404).json({ error: "Student not found" });
    }
    res.json({ message: "Student deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
