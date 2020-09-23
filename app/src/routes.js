const express         = require('express')
const routes          = express.Router()
const db = require('./db')
const req = require('./requires_db')
const path            = require('path');


routes.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
})

routes.get('/clientes', req.getAllClientes )

routes.get('/requisicao-1', req.req1 )

routes.get('/requisicao-2', req.req2 )

routes.get('/requisicao-3', req.req3 )

routes.get('/all-location', req.all_location )

routes.post('/cad_locacao', req.location )

module.exports = routes
