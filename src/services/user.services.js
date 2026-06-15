const users = require('../models/user.model').users;



const createUser = (id,name,email) =>{
    const user ={ id,name,email};
    users.push(user);

    return user;
};

const getAllUsers = () =>{
    return users;
};

const getuserbyemail=(email)=>{

     console.log("Users array:", users);

    console.log("Looking for email:", email);
    return users.find((user)=>user.email === email);
};

const getuserbyid=(id)=>{
    return users.find((user)=>user.id === Number(id));
};


const updateuserbyemail=(email,data) =>{
    const user=users.find((user) => user.email === email);
    if(!user){
        return null;
    }

    Object.assign(user,data);
    return user;
};

const deleteuserbyemail=(email) => {
    const index=users.findIndex((user)=>user.email === email);
    if(index === -1){
        return false;
    }
    return users.splice(index,1)[0];
}
module.exports = {
    getAllUsers,
    createUser,
    getuserbyemail,
    updateuserbyemail,
    getuserbyid,
    deleteuserbyemail
};