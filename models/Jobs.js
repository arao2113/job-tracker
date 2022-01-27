const mongoose = require("mongoose");

const JobsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please add a  job title"],
    unique: false,
    maxlength: [25, "Job title cannot be more than 25 characters"],
  },
  company: {
    type: String,
    required: [true, "Please add a company name"],
    unique: false,
    maxlength: [20, "Company name cannot be more than 20 characters"],
  },
  location: {
    type: String,
    required: [true, "Is the job remote?"],
    unique: false,
    maxlength: [5, "Remote position cannot be more than 5 characters"],
  },
  salary: {
    type: Number,
    required: false,
    unique: false,
    maxlength: [10, "Salary cannot be more than 10 characters"],
  },
  status: {
    type: String,
    required: true,
    unique: false,
    maxlength: [15, "Status cannot be more than 15 characters"],
  },
  contact: {
    type: String,
    required: false,
    unique: false,
    maxlength: [15, "Contact cannot be more than 15 characters"],
  },
  note: {
    type: String,
    required: false,
    unique: false,
    maxlength: [200, "Note cannot be more than 200 characters"],
  },
});

module.exports = mongoose.models.Jobs || mongoose.model("Jobs", JobsSchema);
