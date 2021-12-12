import express from 'express';

import cors from 'cors'

import {route} from './Routes/route';

const port = 3001

const server = express();

server.use(express.json());

server.use(cors());

server.use(route)

server.listen(port, ()=>{

    console.log(`Server is Running at port: ${port}`)
})