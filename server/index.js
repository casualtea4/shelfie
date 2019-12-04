require('dotenv').config()
const express = require('express'),
      app = express(),
      massive = require('massive'),
      ctrl = require('./controller'),
      {SERVER_PORT,CONNECTION_STRING}=process.env

app.use(express.json())

//endpoints
app.get('/api/inventory', ctrl.getInventory)
app.post('/api/product', ctrl.addProduct)
// app.delete('/api/product/:id', ctrl.delete)

massive(CONNECTION_STRING).then(db=>{
    app.set('db',db)
    // console.log('db connected')
}).catch(err=>console.log(err))

app.listen(SERVER_PORT, ()=>{
    console.log('server running on 3030')
})
