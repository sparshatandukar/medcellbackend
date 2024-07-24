const Product= require('../Models/productModel')
//controllers to create users
const createProduct=async(req, res)=>{
//    const data  = req.body;
//    const name= data.name;
//    const age = data.age;
//    const role = data.role;
   const {name, type, price}=req.body;//deconstructing

   const addProduct= new Product({
    name:name,
    type:type,
    price:price
   });
  
   try{
    const response = await addProduct.save();
    if(response){
        res.status(201).json({message:"product created successfully", response})
    }
   }
   catch(err){
    res.status(500).json({message:"internal server error",err})
   }
};

module.exports = createProduct;