const express = require('express')
const app = express()
const port = 3000
var table = 'ST-expressdb'
const getAll = require("./getAll").getAll

app.get('/', (req,res)=> {
    getAll(table).then((data)=> {
        res.send(data)
    }).catch((err)=>{
        res.send("err: " + err)

    })
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})

