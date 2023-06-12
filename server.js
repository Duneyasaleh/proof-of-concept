import express from 'express'
import index from './routes/index.js'
// import data from './Course/collections.json' assert { type: 'json' }
// import data2 from './Course/collection/49453.json' assert { type: 'json' }

// const object = {}

// let totalJson = Object.assign({}, data, data2)

// console.log(data)

// console.log(object)

const server = express()

// Stel het poortnummer in
server.set('port', process.env.PORT || 8000)

// Stel de view engine in
server.set('view engine', 'ejs')
server.set('views', './views')

// Stel de public map in
server.use(express.static('public'))

server.use(express.json())
server.use(express.urlencoded({ extended: true }))

server.use(index)

// Start met luisteren
server.listen(server.get('port'), () => {
  console.log(`Application started on http://localhost:${server.get('port')}`)
})


