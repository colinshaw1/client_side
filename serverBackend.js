const PORT = 8082
const express = require('express')
//helps mak request without been blocked
const cor = require('cors')

//enables data be saved to dotenv file
const axios = require('axis')

const app = express()
//Url to pass a new collection requests
const url = 'https://https://91959d8b-bc56-4bfc-8af5-b4356315a502-europe-west1.apps.astra.datastax.com/api/rest/v2/namespaces/tickets/collections/taks-bc56-4bfc-8af5-b4356315a502-europe-west1.apps.astra.datastax.com/api/rest/v2/namespaces/tickets/collections'

//gets token generated form datastax for the database 
const token = 'AstraCS:UjTMaLhBgpJQtPUDzibwCfvl:72f31d100aaffc667ec2ad86e8becf74b4360315b41ace52438ec2a930205124:JGTqaNSqJlyvxSwMypwZDmkI:913ca9a3c6c912465cdd4082c5868428a926638f40dcdea4b2f97f14cacea3cc'

//creat tickets POST new task to database
app.post('/tickets', async (req,res) => {
    const formData = req.body.formData

    const options = {
        method: 'POST',
        heards: {
            Accepts: 'applications/json',
            'X-Cassandra-Token':token,
            'Content-type': 'application/json'
        },
        //data been sent to the back end
        data: formData
        
    }
    
    try{
        const respone = await axios(url, options)
        res.status(200).json(response.data)
    }catch(err){
        console.log(err)
        res.status(500).json({message:err})
    }

})


//listen out to server to changes on the port
app.listen(PORT, () => console.log('Server Runnon on ' + PORT))