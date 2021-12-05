import express,{static as useStatic} from 'express';

import {join} from "path"

import {route} from './Routes/route'

const server = express();

server.use(express.json());

const port = 3000;

server.set("views" , join(__dirname , 'views'));

server.set("view engine" , "ejs");

server.use(useStatic("public"));

server.use(route)



server.listen(port, ()=>{
    console.log(`Server is Running at port: ${port}`)
})