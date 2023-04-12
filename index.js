const express = require("express")

const cors = require("cors")

const app = express()

const ds=require('./services/dataService')

app.use(cors({ origin: 'http://localhost:4200' }))

app.use(express.json())


app.post("/send",(req,res)=>{
    ds.send(req.body.uname,req.body.review).then(result=>{
        res.status(result.statusCode).json(result)
    })
})




















app.listen(3000, () => {
    console.log('server started at port 3000');
})