const express = require("express")

const app = express()

app.get('/',(req,res)=>{
    console.log("Hello Express")
})

app.listen(8001,()=>{
    console.log("server listening on 8001")
})