require('dotenv').config()
const express = require('express')
const massive = require('massive')
const {SERVER_PORT} = process.env
const ctrl = require('./controller')
const app = express()

app.use(express.json())

app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} Days til Halo Infinite`))