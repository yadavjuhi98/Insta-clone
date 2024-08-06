const mongoose = require('mongoose');

const storySchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  },
  caption: String,
  story:  {
    type: String,
    default: "def.png"
  },
  date: {
    type: Date,
    default: Date.now
  }
})


module.exports = mongoose.model("story", storySchema);