const FitnessRoutes = require('../controllers/fitness.controller');

module.exports = (app) => {
    app.get('/api/fitness', FitnessRoutes.findAllWorkouts)
    app.get('/api/fitness/:id', FitnessRoutes.findOneSingleWorkout)
    app.put('/api/fitness/:id', FitnessRoutes.updateWorkout)
    app.post('/api/fitness', FitnessRoutes.createNewWorkout)
    app.delete('/api/fitness/:id', FitnessRoutes.deleteWorkout)
}