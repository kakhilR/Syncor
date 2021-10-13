const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();



const Port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

mongoose.connect(process.env.MongoURI,{ 
    useNewUrlParser:true,
    useUnifiedTopology: true}).then(()=>console.log('database connected')).catch((err)=>console.log(err))

// 



app.get('/', (req, res) => {
    res.send('hello')
})

    



const dataRouter = require('./routes/apis')



app.use('/api',dataRouter)



app.listen(Port,()=>{console.log(`listening on ${Port}`)})



