const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema(
  {
    des: { type: String, required: true },
    author: {type: Schema.Types.ObjectId, ref: 'User', required: true}
  },
  { timestamps: true }
);
//collection name is stories in the database
module.exports = mongoose.model("Task", taskSchema);
