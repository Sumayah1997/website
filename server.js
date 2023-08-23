const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.port || 3000;

//user file in the public folder
app.use(express.static(path.join(__dirname,'Public')));
//route for home 
app.get('/home',(req,res)=>
{res.sendFile(path.join(__dirname,'Public','home.html'))});
//route for product
app.get('/product',(req,res)=>
{res.sendFile(path.join(__dirname,'Public','product.html'))}); 
//route for about us
app.get('/about',(req,res)=>
{res.sendFile(path.join(__dirname,'Public','about.html'))});
//start the server
app.listen(PORT,()=>
{console.log(`Server is runnign on http://localhost:${PORT}`);});
// --------------------------------------------------------------------------




