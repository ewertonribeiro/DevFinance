import {Request , Response} from 'express'

import {DeleteTransactionUseCase} from '../../services/DeleteTransaction/DeleteTransactionUseCase'

class DeleteTransactionController{

    constructor(private DeleteTransactionUseCase:DeleteTransactionUseCase){

    }

   async handle(req:Request , res:Response):Promise<Response>{
       const {id} = req.params;
       
       await this.DeleteTransactionUseCase.execute({id})
       
        return res.status(201).json({Sucess:"Transaction deleted"})
    }
}

export {DeleteTransactionController};