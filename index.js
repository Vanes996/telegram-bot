var express = require ("express")
var app = express()
var bodyparser = require("body-parser")
const axios = require("axios")


app.use(bodyparser.json())
app.use(
    bodyparser.urlencoded({
        extended: true
    })
)


app.post("/new-message", function(req,res){

    const {message} = req.body

    if(!message){
        return res.end()
    }
    console.log("RICEVUTO:", message)

    axios.post(
        "https://api.telegram.org/bot1699796082:AAGV9z39W_uI6W8ooCsZK03ngCGL47-xhTY/sendMessage",
        {
            chat_id: message.chat.id,
            text: "test"
        }
    ).then((res)=>{
        console.log("messaggio postato")
        res.end("ok")
    }).catch((err)=>{
        console.log(error)
        res.end("ERROR:", err)
    })
})

app.listen(8443,function(){
    console.log("server running")
})


