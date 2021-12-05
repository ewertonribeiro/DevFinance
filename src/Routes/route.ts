import {Router} from 'express';

import {CreateTransactionsController} from '../modules/Transactions'

const route = Router()

route.get("/",(req,res)=>{
    res.render("Index");
})

route.post("/transactions", (req,res)=>{
    CreateTransactionsController.create(req,res)
});


export {route};