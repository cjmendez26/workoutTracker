const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const Plan = require("./planModel.js");
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutdb", { useNewUrlParser: true });

app.post("/submit", ({ body }, res) => {
  console.log(body);
  Plan.create(body)
    .then(dbWorkout => {
      console.log("response from database after submit");
      console.log(dbWorkout);
      Plan.find().then(dbWorkouts => {
        console.log("response from database after plans");
        console.log(dbWorkouts);
        res.json(dbWorkouts);
      })
    })
    .catch(err => {
      res.json(err);
    });
});

app.get("/plans", (req, res) => {
  Plan.find()
  .then(dbWorkouts => {
    console.log("response from database after plans");
    console.log(dbWorkouts);
    res.json(dbWorkouts);
  })
  .catch(err => {
    res.json(err);
  }); 
})

// app.get("/exercisesoftheday", (req, res) => {
//   Workout.find({"workoutCreated" : { $gte : new ISODate(`${currentYear}-${currentMonth}-${currentDay}T00:00:00Z`) }})
//   .then(dbWorkouts => {
//     console.log("response from database");
//     console.log(dbWorkouts);
//     res.json(dbWorkouts);
//   })
//   .catch(err => {
//     res.json(err);
//   }); 
// })

// app.post("/submit", ({body}, res) => {
//     console.log("submitting new workout");
//     console.log(body);
// });



app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});

