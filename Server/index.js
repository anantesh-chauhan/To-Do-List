const express= require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const TodoModel = require('./Models/Todo')

const app =express()
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/test {time stamp : 16:26} ')

app.get('./get' , (req ,res) => {
    Todo.Model.find()
    .then( rsult => res.json(rsult))
    .catch(err =>console.log(err))
})

app.post('/add',(req ,res) => {
    const task = req.body.task ;
    TodoModel.create({
        task : task
    }).then(result => res.json(result))
    .catch( err => console.log(err))

})

app.listen(5173,()=>{
    console.log("Server is Running")
})
