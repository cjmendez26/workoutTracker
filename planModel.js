const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const planSchema = new Schema({
  plan: {
    type: String,
    trim: true,
    required: "plan is Required"
  },

  exercises: {
    type: String,
    
  },

//   email: {
//     type: String,
//     unique: true,
//     match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
//   },

  created: {
    type: Date,
    default: Date.now
  }
});

const Plan = mongoose.model("plan", planSchema);

module.exports = Plan;


