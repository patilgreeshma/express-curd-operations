const productService=require('../services/product.services');

const getProducts=(req,res) =>{
    const products=productService.getAllProducts();
    res.json(products);
};

const createProduct=(req,res)=>{
    const {id,name,price,stock}=req.body;
    const product=productService.createProduct(id,name,price,stock);


    res.status(201).json (product);
};

const getProductbyid=(req,res)=>{

    console.log("Request params:", req.params);
    const id=req.params.id;
  

    console.log("Searching for:", id);

    const product = productService.getProductbyid(id);

    console.log("Found product:", product);
    if( product){
        return res.status(404).json({error:"Product not found"});
    }
    return res.json(product);
};


const updateproductbyid=(req,res)=>{
    const id=req.params.id;
    const data=req.body;
    const product=productService.updateproductbyid(id,data);
    if(!product){
        return res.status(404).json({error: "product not found"});
    }
    return res.json (product);
};

const deleteproduct=(req,res)=>{
    const id=req.params.id;
    const product=productService.deleteproductbyid(id);
     if(!product){
        return res.status(404).json({error:"Product not found"});
    }
    res.json(product);
};
module.exports={
    getProducts,
    createProduct,
    getProductbyid,
    updateproductbyid,
    deleteproduct
};