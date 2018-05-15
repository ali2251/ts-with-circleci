import express = require('express')
import api from './api'
import middleware from './middleware'

const app = express()

app.set('x-powered-by', false)
app.set('json spaces', 2)

app.use(middleware)
app.use(api)

export default app
