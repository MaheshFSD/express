const express = require("express")

const app = express()

app.get('/',(req,res)=>{
    console.log("Hello Express- it is from GET Method.")
})

app.post('/',(req,res)=>{
    console.log(req.body)
    console.log("express post request")
})
app.delete('/',(req,res)=>[

])
app.listen(8001,()=>{
    console.log("server listening on 8001")
})