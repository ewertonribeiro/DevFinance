import {Request, Response} from 'express';

import {ListAllTransactionsUseCase} from '../../services/ListAllTransactions/ListAllTransactionsUseCase';

class ListAllTransactionsController{


    constructor(private ListAllTransactionsUseCase:ListAllTransactionsUseCase){

    }

  async handle(req:Request , res:Response){
       
      const listAll =await this.ListAllTransactionsUseCase.execute();
       
        return res.json(listAll);
    }
}

export {ListAllTransactionsController};