const PORT = 8082
const express = require('express')
//helps mak request without been blocked
const cor = require('cors')

//enables data be saved to dotenv file
const axios = require('axis')

const app = express()


//listen out to server to changes on the port
app.listen(PORT, () => console.log('Server Runnon on ' + PORT))