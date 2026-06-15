const products= require('../models/user.model').products;

const createProduct = (id,name,price,stock) =>{
    const product ={ id,name,price,stock};
    products.push(product);

    return product;
};

const getAllProducts = () =>{
    return products;
};


const getProductbyid=(id)=>{
    return products.find((product)=>product.id === Number(id));
};


const updateproductbyid=(id,data) =>{
    const product=products.find((product) => product.id === Number(id));
    if(!product){
        return null;
    }

    Object.assign(product,data);
    return product;
};

const deleteproductbyid=(id) => {
    const index=products.findIndex((product)=>product.id === Number(id));
    if(index === -1){
        return false;
    }
    return products.splice(index,1)[0];
}
module.exports = {
    createProduct,
    getAllProducts,
    getProductbyid,
    updateproductbyid,
    deleteproductbyid
    
};
