const PlansModel = require('../models/plans')

async function get(req, res) {

    const {id} = req.params

    const obj = id ? { _id: id } : {}
    
    const products = await PlansModel.find(obj)

    res.send(products)
}

async function post(req, res) {
    const {
        title,
        description,
        location,
        date,
        participants
    } = req.body

    const product = new PlansModel({
        title,
        description,
        location,
        date,
        participants
    })

    product.save()

    res.send({
        message: 'success'
    })
}

async function put(req, res) {
    const {id} = req.params

    const product = await PlansModel.findOneAndUpdate({_id: id}, req.body, {new: true})

    res.send({
        message: 'success',
        product
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