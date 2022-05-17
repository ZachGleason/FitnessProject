const fitness = require('../models/fitness.model');

const findAllWorkouts = (req, res) => {
    fitness.find()
        .then((fitnesss) => {
            res.json({ fitnesss })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

const findOneSingleWorkout = (req, res) => {
    fitness.findOne({ _id: req.params.id })
        .then(OneWorkout => {
            res.json({ OneWorkout })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}

const createNewWorkout = (req, res) => {
    fitness.create(req.body)
        .then(newlyCreatedfitness => {
            res.json({ newlyCreatedfitness })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}

const updateWorkout = (req, res) => {
    fitness.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedfitness => {
            res.json({ updatedfitness })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}

const deleteWorkout = (req, res) => {
    fitness.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}

module.exports = {
    findAllWorkouts,
    findOneSingleWorkout,
    createNewWorkout,
    updateWorkout,
    deleteWorkout,
}