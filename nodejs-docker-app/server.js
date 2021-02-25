const express = require('express');

//네트워크도 매핑시켜줘야 함
// -> docker실행시 docker run -p (host port):(docker port) imagename
const PORT = 8080;

//App
const app = express();
app.get('/',(req,res)=>{
    res.send("반가워요~")
});

app.listen(PORT);
console.log("Server is running");