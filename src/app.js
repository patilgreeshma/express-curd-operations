const express=require('express');

const userRoutes=require('./routes/user.router.js');
const prodRoutes=require('./routes/user.router.js');
//Middleware to parse JSON bodies
const app=express();

app.use(express.json());

//groups the routes under /users path
app.use('/users',userRoutes);

app.use('/products',prodRoutes);
module.exports=app;