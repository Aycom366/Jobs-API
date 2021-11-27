const mongoose = require("mongoose");

const JobShema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: [true, "Please provide company name"],
      maxlength: 50,
    },
    position: {
      type: String,
      required: [true, "Please provide position"],
      maxlength: 100,
    },
    status: {
      type: String,
      default: "pending",
      enum: ["interview", "declined", "pending"],
    },
    //using the user id to link the job to the user
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      require: [true, "Please provide user"],
    },
  },
  { timeStamps: true }
);

module.exports = mongoose.model("Job", JobShema);
