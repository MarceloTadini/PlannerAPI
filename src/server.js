const express = require('express')
const cors = require('cors')

const db = require('./database/db')
const routes = require('./routes/routes')

const app = express()

//conexão com o banco de dados
db.connect()

//habilita CORS como api pública
 app.use(cors())


//habilita CORS para determinados endereços
 const allowedOrigins = [
     'http://127.0.0.1:5500',
     'http://127.0.0.1:5173',
     'http://www.app.com.br',
 ]

app.use(cors({
     origin: function (origin, callback) {
         let allowed = true

         //mobile app(vem sem origin pois é um aplicativo)
         if(!origin) allowed = true

         if(!allowedOrigins.includes(origin)) allowed = false

         callback(null, allowed)
     }
}))

//habilita CORS como api privada
//app.use(cors({origin: 'http://127.0.0.1:5173'}))

//habilita o server para receber dados via post JSON
app.use(express.json())

//definindo as rotas
app.use('/api', routes)


//executando o servidor
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`))