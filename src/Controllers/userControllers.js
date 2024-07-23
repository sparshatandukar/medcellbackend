const User= require('../Models/userModel')
//controllers to create users
const createUser=async(req, res)=>{
//    const data  = req.body;
//    const name= data.name;
//    const age = data.age;
//    const role = data.role;
   const {name, age, role}=req.body;//deconstructing

   const addUser= new User({
    name:name,
    age:age,
    role:role
   });
  
   try{
    const response = await addUser.save();
    if(response){
        res.status(201).json({message:"user created successfully", response})
    }
   }
   catch(err){
    res.status(500).json({message:"internal server error",err})
   }
};

module.exports = createUser;