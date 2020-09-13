const express = require('express');
const app = express();

const port = 3000

//  add 

app.get('/',(req,res) => res.send('hello world'))

app.listen(port,()=> console.log('echo port: ',port))