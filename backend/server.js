const express = require('express');

const app = express()

app.get('/', (req,res) => {
    res.send("working server")
})

app.listen(5000, () => {
    console.log("Server is listening on 5000");
})