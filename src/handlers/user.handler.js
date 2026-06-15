const userService=require('../services/user.services');

const getUsers=(req,res) =>{
    const users=userService.getAllUsers();
    res.json(users);
};

const createUser=(req,res)=>{
    const {id,name,email}=req.body;
    const user=userService.createUser(id,name,email);
    res.status(201).json(user);
};

const getuserbyemail=(req,res)=>{

    console.log("Request params:", req.params);
    const email=req.params.email;
  

    console.log("Searching for:", email);

    const user = userService.getuserbyemail(email);

    console.log("Found user:", user);
    if(!user){
        return res.status(404).json({error:"User not found"});
    }
    return res.json(user);
};

const getuserbyid=(req,res)=>{
    const id=req.params.id;
    const user=userService.getuserbyid(id);
     if(!user){
        return res.status(404).json({error:"User not found"});
    }
    return res.json(user);
}

const updateuserbyemail=(req,res)=>{
    const email=req.params.email;
    const data=req.body;
    const user=userService.updateuserbyemail(email,data);
    if(!user){
        return res.status(404).json({error:"user not found"});
    }
    return res.json(user);
};

const deleteuser=(req,res)=>{
    const email=req.params.email;
    const user=userService.deleteuserbyemail(email);
     if(!user){
        return res.status(404).json({error:"User not found"});
    }
    
}
module.exports={
    getUsers,
    createUser,
    getuserbyemail,
    updateuserbyemail,
    getuserbyid,
    deleteuser
};