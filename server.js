// const express = require("express");
// const logger = require("morgan");
// const mongoose = require("mongoose");

// const PORT = process.env.PORT || 3000;

// const User = require("./userModel.js");
// const app = express();

// app.use(logger("dev"));

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// app.use(express.static("public"));

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/userdb", { useNewUrlParser: true });

// app.post("/submit", ({ body }, res) => {
//   console.log(body);
//   User.create(body)
//     .then(dbUser => {
//       res.json(dbUser);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });

// app.get('/test', function (req, res) {
//   res.send({'name': 'felipe'})
// });

// app.listen(PORT, () => {
//   console.log(`App running on port ${PORT}!`);
// });
