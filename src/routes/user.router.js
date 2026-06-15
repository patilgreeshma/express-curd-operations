const express=require('express');

const userHandler=require('../handlers/user.handler');
const prodHandler=require('../handlers/product.handler');

const  router=express.Router();

router.get("/user",userHandler.getUsers);

router.post("/user",userHandler.createUser);

router.get("/user/email/:email",userHandler.getuserbyemail);

router.get("/user/id/:id",userHandler.getuserbyid);


router.put("/user/email/:email",userHandler.updateuserbyemail);

router.delete("/user/email/:email",userHandler.deleteuser);

router.post("/product",prodHandler.createProduct);
router.get("/product",prodHandler.getProducts);
router.get("/product/:id",prodHandler.getProductbyid);
router.put("/product/:id",prodHandler.updateproductbyid);
router.delete("/product/:id",prodHandler.deleteproduct);

module.exports=router;
