const fs = require('fs')


const express = require('express')
const app = express()


app.use(express.static('public'))


app.listen(3000, ()=>{
    //console.log('server up and running on port 3000')
    console.log('server is listening on port 3000')
})