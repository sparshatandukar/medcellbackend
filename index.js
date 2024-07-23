// const math = require('./math.js')
// const file = require('./file.js')
// const result = math.add(1,2);
// const result1 = math.sub(1,2);
// const result2 = math.multiply(4,2);
// const result3 = math.divide(4,2);
// console.log(result);
// console.log(result1);
// console.log(result2);
// console.log(result3);

//create server using http module
// const http = require('http');
// const server= http.createServer((req,res)=>{
//     res.writeHead(200, {'Content-Type':'text/html'});
//     res.write('Hello World');
//     res.end();
// }
// );
// server.listen(8080,()=>{
//     console.log('Server is running on port 8080')
// }
// )

//create server using expres

// const express = require('express');
// const port = 3000;
// const app  = express();
//  app.get('/', (req,res)=>{
//     res.send("Hello World");
//  }
// );

// const users =[
//     {
//         id:1,
//         name:"John",
//     },
//     {
//         id:2,
//         name:"Doe"
//     },
// ];

// app.use(express.json());
// app.get("/users", (req, res)=>{
//     res.json(users);
// });
// app.get("/users/:id",(req,res) =>{
//     const user_id =req.params.id;
//     console.log(typeof user_id)
//     console.log(user_id);
//     const user = users.find((user) => user.id === parseInt(user_id));
//     if(!user) {
//         res.status(404).send("User not found");
//     }
//     res.send(user);
    
// });

// app.post("/post-user", (req,res) =>{
//     const data = req.body.name;
//     res.send(data);
// })

// app.listen(port, ()=>{
//     console.log(`Server is running on ${port}`)
// })

const express = require("express");
const app  = express();
require('dotenv').config();
const connectDB = require("./src/config/db");
const userRoute = require("./src/Routes/userRoutes")
app.use(express.json());
const port = process.env.port;
//used to connect to db
connectDB();
app.use('/user',userRoute)

  app.listen(port, ()=>{
        console.log(`Server is running on ${port}`)
    });