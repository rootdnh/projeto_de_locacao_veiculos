
const express = require('express');
const app = express();         
const cors     = require('cors')
const bodyParser = require('body-parser');
const port = 3330; //porta padrão
const mysql = require('mysql');
const routes   = require('../routes')
const server   = require('http').createServer(app)
const con = require('../db')


app.use(cors())
app.use(express.json())
app.use(routes)


console.log('API funcionando!');
server.listen(process.env.PORT || 3330, () => {
    console.log("Server Running...")
})
