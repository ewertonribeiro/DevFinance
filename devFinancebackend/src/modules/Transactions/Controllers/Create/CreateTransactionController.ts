import {Request , Response} from 'express'

import {CreateTransactionsUseCase} from '../../services/CreateTransactions/CreateTransactionsUseCase'



class CreateTransactionController{

    constructor(private CreateTransactionsUseCase:CreateTransactionsUseCase){

    }

    handle(req:Request , res:Response):Response{
       const {description  , amount , date , type} = req.body;
       
       this.CreateTransactionsUseCase.execute({description  , amount , date , type})
       
        return res.status(201).json({Sucess:"Transaction created With sucess"})
    }
}

export {CreateTransactionController};