const express = require('express')
const app = express()
const { readdirSync } = require('fs')
const { configDotenv } = require('dotenv').config()
const body = require('body-parser')
const cookieParser = require('cookie-parser')
const port = process.env.SERVER_PORT || 8000
const cors=require('cors');
app.use(
    cors({
      origin: '*',
    }),
  )
app.use(body.json({ limit: '10mb' }))
app.use(body.urlencoded({ extended: true }))

readdirSync('./app/routes').map((route) =>
    app.use('/task',require('./app/routes/'+route))
)
app.use("/task/img",
 express.static("./public/upload"));

app.listen(port, () => console.log(`listening to port:${port} `))