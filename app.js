console.log('Task Manager App')
const express=require('express')
const server=express()
const routes=require('./Routes/tasks')
require('dotenv').config()
const connectDB =require('./db/connection')

//middleware
server.use(express.static('./public'))
server.use(express.json())

server.use('/api/v1/tasks',routes)


//routes

server.get('/hello',(req,response)=>{

response.send('hello')

})

port=3000

const start= async ()=>{
    try{
        await connectDB(process.env.MONGO_URI)
        server.listen(port,console.log(`server is listening on port ${port}`))
    }
    catch(err){
        console.log(err)
    }
}

start()






