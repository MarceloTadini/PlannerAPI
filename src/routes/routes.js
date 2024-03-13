const router = require('express').Router()

const PlansController = require('../controllers/plans')

router.get('/planner/:id?', PlansController.get)
router.post('/planner', PlansController.post)
router.put('/planner/:id', PlansController.put)
router.delete('/planner/:id', PlansController.remove)

module.exports = router