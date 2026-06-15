import express from "express";

const app=express();
const port=3000;

app.use(express.json());

app.get('/',(req,res)=>{
    res.send("Hello");
});

function add(a,b){
    return a+b;
}

function addhandler(req,res){
    const {a,b}=req.body;

    if(typeof a !== 'number' || typeof b !== 'number'){
        return res.status(400).json({error:"Both a and b should be numbers"});
    }
    return res.json({result:add(a,b)});
}

app.post('/add',addhandler);


app.listen(port,()=>{
    console.log("Server is running on port "+port);
})

