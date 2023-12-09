const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/LoginSignUpTutorial")
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((error) => {
    console.error("Connection failed:", error.message);
  });

const LogInSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const collection = mongoose.model("Collection1", LogInSchema);

module.exports = collection;
