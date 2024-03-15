const PlansModel = require('../models/plans')

async function get(req, res) {

    const {id} = req.params

    const obj = id ? { _id: id } : {}
    
    const plans = await PlansModel.find(obj)

    res.send(plans)
}

async function post(req, res) {
    const {
        title,
        description,
        location,
        date,
        participants
    } = req.body

    const plan = new PlansModel({
        title,
        description,
        location,
        date,
        participants
    })

    plan.save()

    res.send({
        message: 'success'
    })
}

async function put(req, res) {
    const {id} = req.params

    const plan = await PlansModel.findOneAndUpdate({_id: id}, req.body, {new: true})

    res.send({
        message: 'success',
        plan
    })
}

async function remove(req, res) {

    const {id} = req.params

    const remove = await PlansModel.deleteOne({_id: id})

    let message = 'success'

    if(remove.deletedCount === 0){
        message = 'error'
    }

    res.send({
        message,
    })
}

module.exports = {
    get,
    post, 
    put,
    remove,
}