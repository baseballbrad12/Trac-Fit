const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    
});

const Exercise = mongoose.model("Exercise", workoutSchema);

module.exports = Exercise;
