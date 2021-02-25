const express = require("express");
const redis = require("redis");
//create redis client
const client = redis.createClient({
    host: "redis-server",
    port: 6379
})

const app = express();

//number start with 0
client.set("number",0);

app.get('/',(req,res)=>{
    client.get("number",(err,number)=>{
        //get current number and increase by one
        client.set("number",parseInt(number)+1)
        res.send("Number increase by one. Num : " + number)
    })
})
app.listen(8080);
console.log('server is running');
