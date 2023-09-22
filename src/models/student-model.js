import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  id: { type: String, required: true, unique: true },
  phone: { type: Number, required: true, unique: true },
  otp: {
    type: String,
  },
  password: { type: String, required: true },
  marks: {
    sub1: Number,
    sub2: Number,
    sub3: Number,
    sub4: Number,
    sub5: Number,
  },
  calculation: {
    total: Number,
    average: Number,
    percentage: Number,
  },
});

export const Student = mongoose.model("Student", studentSchema);
