import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema({
  name: { type: String, required: true },
  id: { type: String, required: true, unique: true },
  subject: { type: String, required: true },
});

export const Teacher = mongoose.model("Teacher", teacherSchema);
