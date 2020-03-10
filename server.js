const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const Workout = require("./workoutModel.js");
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutdb", { useNewUrlParser: true });

app.post("/submit", ({ body }, res) => {
  console.log(body);
  Workout.create(body)
    .then(dbWorkout => {
      console.log("response from database");
      console.log(dbWorkout);
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

// app.post("/submit", ({body}, res) => {
//     console.log("submitting new workout");
//     console.log(body);
// });



app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});

