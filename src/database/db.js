const mongoose = require('mongoose')


//estabelece a conexão

function connect() {
    mongoose.connect('mongodb://localhost:27017/plans')

    const db = mongoose.connection

    db.once('open', () => {
        console.log('Connected to database!')
    })

    db.on('erro', console.error.bind(console, 'connection error? '))
}

module.exports = {connect}