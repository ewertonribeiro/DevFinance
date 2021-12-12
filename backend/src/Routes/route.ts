import {Router} from 'express';

import {CreateTransactionsController , listAllTransactionsController , deleteTransactionController} from '../modules/Transactions';

const route = Router()

route.post("/transactions", (req,res)=>{
    CreateTransactionsController.handle(req,res)
});

route.get("/transactions", (req,res) =>{
    listAllTransactionsController.handle(req,res);
})

route.delete("/transactions/:id", (req,res)=>{
    deleteTransactionController.handle(req,res);
})

export {route};