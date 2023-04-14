const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

mongoose
  .connect("mongodb://0.0.0.0:27017/Loginpage", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((mess) => {
    console.log("db connected");
  })
  .catch((err) => console.log(err));

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = new mongoose.model("User", userSchema);

//routes

app.post("/login", async (req, res) => {
  console.log(req.body);
  const { name, email, password } = req.body;
  User.findOne({ email: email }).then((user) => {
    if (user && user.password === password) {
      res.send({ message: "login successful", user: user });
    } else if (user && user.password !== password) {
      res.json({ message: "incorerct password" });
    } else {
      res.json({ message: "please register" });
    }
  });
});

app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  User.findOne({ email: email }).then((docs) => {
    if (docs) {
      res.json("user already registered");
    } else {
      const user = new User({
        name,
        email,
        password,
      });

      try {
        user.save();
        res.status(200).json("inserted successful");
      } catch {
        res.status(500).json("unsuccesful");
      }
    }
  });
});

app.listen(8080, () => {
  console.log("server listening on port 8080...");
});
