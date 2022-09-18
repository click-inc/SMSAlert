const express = require('express')
const smsRouter =require('./routers/sms')
var cors = require('cors')

const port = process.env.PORT

const app = express()

app.use(cors())
app.use(express.json())
app.use(smsRouter)

app.listen(port, () => {
    console.log('server listening on port ' + port)
})