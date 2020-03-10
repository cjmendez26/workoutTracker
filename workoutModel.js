const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  workout: {
    type: String,
    trim: true,
    required: "workout is Required"
  },

//   password: {
//     type: String,
//     trim: true,
//     required: "Password is Required",
//     validate: [({ length }) => length >= 6, "Password should be longer."]
//   },

//   email: {
//     type: String,
//     unique: true,
//     match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
//   },

  workoutCreated: {
    type: Date,
    default: Date.now
  }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;