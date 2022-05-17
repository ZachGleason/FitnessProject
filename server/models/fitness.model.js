const mongoose = require("mongoose");

const FitnessSchema = new mongoose.Schema(
    {
    name: {
        type: String,
        maxlength: [50, "Workout Name is over 50 characters!"],
        required: [true, "Workout Name Required"],
        },
    type: {
        type: String,
        required: [true, "Workout Type Required"],
        enum: ["Cardio", "Powerlifting", "Yoga", "Weightlifting", "BodyBuilding", "CrossFit", "Stretching"],
        },
    intensity: {
        type: String,
        enum: ["Low-Intensity", "Medium-Intensity", "High-Intensity"],
        required: [true, "Workout Intensity Required"],
        default: "Low-Intensity",
        },
    comments: {
        type: String,
        maxlength: [100, "Comments over 100 characters!"],
        required: [false, "Workout Comments Not Required"],
    },
    workouts: {
        names: {
            type: String,
            required: [true, "Workouts Required"],
        }
    },
    date: {
        type: Date,
        required: [true, "Workout Date Required"],
    }
    },
    { timestamps: true }
    );

    module.exports = mongoose.model("Fitness", FitnessSchema);