const app = require('express')()
const bodyParser = require('body-parser')
const cors = require('cors')
const dotenv = require("dotenv")

dotenv.config()

const route = require('./src/routes')

app.use(cors({credentials : true}))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended : true }))

app.use('/api', route)

app.listen(process.env.APP_PORT, () => console.log(`Running on Port ${process.env.APP_PORT}`))
